let inMemory = [];

exports.handler = async function(event) {
  let store = null;
  let storeReady = false;
  try {
    const blobs = require("@netlify/blobs");
    if (blobs && typeof blobs.getStore === "function") {
      store = blobs.getStore("bmc-supporters");
      storeReady = true;
    }
  } catch (_) {}

  const readItems = async () => {
    if (!store) return inMemory;
    try {
      const got = await store.get("messages", { type: "json" });
      return Array.isArray(got) ? got : [];
    } catch (_) {
      return [];
    }
  };

  const writeItems = async (items) => {
    if (!store) {
      inMemory = items;
      return;
    }
    try {
      await store.set("messages", JSON.stringify(items));
    } catch (_) {}
  };

  if (event.httpMethod === "GET") {
    const items = (await readItems()).slice(-8).reverse();
    return {
      statusCode: 200,
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ ok: true, endpoint: "bmc-webhook", method: "GET", items, store: storeReady ? "blobs" : "memory" }),
    };
  }
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method not allowed" };
  }

  const expected = process.env.BMC_WEBHOOK_TOKEN || "";
  let body = {};
  try { body = JSON.parse(event.body || "{}"); } catch (_) {}
  const headers = event.headers || {};
  const query = event.queryStringParameters || {};
  const bodyData = body && typeof body.data === "object" ? body.data : {};
  const candidates = [
    headers["x-bmc-webhook-token"],
    headers["x-webhook-token"],
    headers["x-bmc-token"],
    headers["x-verification-token"],
    headers["authorization"] ? String(headers["authorization"]).replace(/^Bearer\s+/i, "") : "",
    query["token"],
    query["verification_token"],
    body.verification_token,
    body.token,
    bodyData.verification_token,
    bodyData.token,
  ]
    .filter(Boolean)
    .map((v) => String(v).trim());

  // Fallback robusto: alcuni provider usano header non documentati.
  for (const v of Object.values(headers)) {
    if (!v) continue;
    candidates.push(String(v).trim());
  }

  const okToken = !expected || candidates.includes(String(expected).trim());
  if (!okToken) {
    return { statusCode: 401, body: "Unauthorized" };
  }

  const data = body && typeof body.data === "object" ? body.data : body;
  const pick = (...keys) => {
    for (const k of keys) {
      const v = data && data[k];
      if (typeof v === "string" && v.trim()) return v.trim();
    }
    return "";
  };
  const name = pick("supporter_name", "payer_name", "name", "from_name") || "Bitwaizer";
  const message = pick("support_note", "support_notes", "message", "note", "comment");

  if (message) {
    const items = await readItems();
    items.push({
      name: String(name).slice(0, 60),
      message: String(message).slice(0, 220),
      received_at: new Date().toISOString(),
    });
    await writeItems(items.slice(-80));
  }

  return {
    statusCode: 200,
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ ok: true, received: true, stored: !!message, store: storeReady ? "blobs" : "memory" }),
  };
};

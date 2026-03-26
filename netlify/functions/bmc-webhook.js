exports.handler = async function(event) {
  if (event.httpMethod === "GET") {
    return {
      statusCode: 200,
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ ok: true, endpoint: "bmc-webhook", method: "GET" }),
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

  return {
    statusCode: 200,
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ ok: true, received: true }),
  };
};

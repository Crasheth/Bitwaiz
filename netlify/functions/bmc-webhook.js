exports.handler = async function(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method not allowed" };
  }

  const expected = process.env.BMC_WEBHOOK_TOKEN || "";
  let body = {};
  try { body = JSON.parse(event.body || "{}"); } catch (_) {}

  const provided =
    (event.headers && (event.headers["x-bmc-webhook-token"] || event.headers["x-webhook-token"])) ||
    body.verification_token ||
    body.token ||
    "";

  if (expected && String(provided).trim() !== String(expected).trim()) {
    return { statusCode: 401, body: "Unauthorized" };
  }

  return {
    statusCode: 200,
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ ok: true, received: true }),
  };
};

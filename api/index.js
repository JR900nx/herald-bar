const { createRequestHandler } = require("@react-router/node");

let handler;

module.exports = async (req, res) => {
  if (!handler) {
    const build = await import("../build/server/index.js");
    handler = createRequestHandler({ build });
  }
  return handler(req, res);
};

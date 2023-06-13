import { generateRtcToken } from "./TokenGenerator.js";

module.exports = async function (req, res) {
  try {
    let decodedJson = JSON.parse(req.body);

    return res.json({
      "token": generateRtcToken(decodedJson.channelName, decodedJson.uid),
    });
  } catch (error) {
    return res.json({
      "error": error.message,
    });
  }
};

"use strict";
exports.__esModule = true;
exports.generateRtcToken = void 0;
var agora_token_1 = require("agora-token");
function generateRtcToken(channelName, uid) {
  var appId = "6f098e3930d044e1b87449f38dc57ccf";
  var appCertificate = "e94b5360356f4f89a3a17f2a0e5f0fb9";
  var expirationTimeInSeconds = 3600;
  var currentTimestamp = Math.floor(Date.now() / 1000);
  var privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds;
  // IMPORTANT! Build token with either the uid or with the user account. Comment out the option you do not want to use below.
  // Build token with uid
  var tokenA = agora_token_1.RtcTokenBuilder.buildTokenWithUid(
    appId,
    appCertificate,
    channelName,
    uid,
    agora_token_1.RtcRole.PUBLISHER,
    expirationTimeInSeconds,
    privilegeExpiredTs
  );
  return tokenA;
}
exports.generateRtcToken = generateRtcToken;

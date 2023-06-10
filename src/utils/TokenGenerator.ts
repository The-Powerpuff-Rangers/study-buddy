const {RtcTokenBuilder, RtmTokenBuilder, RtcRole, RtmRole} = require('agora-token')

const generateRtcToken = () => {

  const appId = '6f098e3930d044e1b87449f38dc57ccf';
  const appCertificate = 'e94b5360356f4f89a3a17f2a0e5f0fb9';
  var channelName = 'studybuddy';
  var uid = 0;

  const expirationTimeInSeconds = 3600

  const currentTimestamp = Math.floor(Date.now() / 1000)

  const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds

  // IMPORTANT! Build token with either the uid or with the user account. Comment out the option you do not want to use below.

  // Build token with uid
  const tokenA = RtcTokenBuilder.buildTokenWithUid(appId, appCertificate, channelName, uid, privilegeExpiredTs);
  return tokenA;

}
console.log(generateRtcToken());
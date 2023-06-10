// import { env } from '$env/dynamic/private';
// import { env as publicEnv } from '$env/dynamic/public';
import TokenServerImport from 'agora-token';
const { RtcRole, RtcTokenBuilder } = TokenServerImport; // CJS module import
import type { PageServerLoadEvent } from '../$types';

export async function load(event: PageServerLoadEvent) {
  const { params, url } = event;
  let uid = url.searchParams.get('uid');
  try {
    const channel = new URLSearchParams(params).get('channel');
    console.log(channel, uid);

    if (!channel) {
      throw console.error('channel is required');
    }

    if (!uid) {
      uid = '0';
    }

    const token = RtcTokenBuilder.buildTokenWithUid(
      "6f098e3930d044e1b87449f38dc57ccf",
      "e94b5360356f4f89a3a17f2a0e5f0fb9",
      channel,
      parseInt(uid),
      RtcRole.PUBLISHER,
      600,
      600
    );

    return { token, uid, channel };
  } catch (e) {
    throw console.error(e);
  }
}
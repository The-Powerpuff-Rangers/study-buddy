<script lang="ts">
  import AgoraRTC from "agora-rtc-sdk-ng";
  // import { generateRtcToken } from "../utils/TokenGenerator.ts";

  export var channelId: string;
  export var uid: string;

  
  let options = {
    // Pass your App ID here.
    appId: "6f098e3930d044e1b87449f38dc57ccf",
    // Set the channel name.
    channel: channelId,
    // Pass your temp token here.
    token: "007eJxTYDitG1z+ewm3rYlZxYQWCbdV6x+xvrP6KTpxxo2s7B8PovMUGMzSDCwtUo0tjQ1SDExMUg2TLMxNTCzTjC1Skk3Nk5PTrAvbUxqsOBnSLUsZGRkYGViAePfqCSlMYJIZTLKASS6G4pLSlMqk0pSUSgYGANouKhM=",
    // Set the user ID.
    uid: uid,
  };

  let channelParameters = {
    // A variable to hold a local audio track.
    localAudioTrack: null,
    // A variable to hold a local video track.
    localVideoTrack: null,
    // A variable to hold a remote audio track.
    remoteAudioTrack: null,
    // A variable to hold a remote video track.
    remoteVideoTrack: null,
    // A variable to hold the remote user id.s
    remoteUid: null,
  };
  async function startBasicCall() {

    const agoraEngine = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
    const remotePlayerContainer = document.getElementById("remoteUser");
    const localPlayerContainer = document.getElementById("localUser");

    agoraEngine.on("user-published", async (user, mediaType) => {
      // Subscribe to the remote user when the SDK triggers the "user-published" event.
      await agoraEngine.subscribe(user, mediaType);
      console.log("subscribe success");
      // Subscribe and play the remote video in the container If the remote user publishes a video track.
      if (mediaType == "video") {
        // Retrieve the remote video track.
        channelParameters.remoteVideoTrack = user.videoTrack;
        // Retrieve the remote audio track.
        channelParameters.remoteAudioTrack = user.audioTrack;
        // Save the remote user id for reuse.
        channelParameters.remoteUid = user.uid.toString();
        // Specify the ID of the DIV container. You can use the uid of the remote user.
        // remotePlayerContainer.id = user.uid.toString();
        channelParameters.remoteUid = user.uid.toString();
        remotePlayerContainer.textContent =
          "Remote user " + user.uid.toString();
        // Append the remote container to the page body.
        // document.body.append(remotePlayerContainer);
        // Play the remote video track.
        channelParameters.remoteVideoTrack.play(remotePlayerContainer);
      }
      // Subscribe and play the remote audio track If the remote user publishes the audio track only.
      if (mediaType == "audio") {
        // Get the RemoteAudioTrack object in the AgoraRTCRemoteUser object.
        channelParameters.remoteAudioTrack = user.audioTrack;
        // Play the remote audio track. No need to pass any DOM element.
        channelParameters.remoteAudioTrack.play();
      }
      // Listen for the "user-unpublished" event.
      agoraEngine.on("user-unpublished", (user) => {
        console.log(user.uid + "has left the channel");
      });
    });
    window.onload = async function () {
      // Listen to the Join button click event.
      // document. = async function () {
        // Join a channel.
        await agoraEngine.join(
          options.appId,
          options.channel,
          options.token,
          options.uid
        );
        // Create a local audio track from the audio sampled by a microphone.
        channelParameters.localAudioTrack =
          await AgoraRTC.createMicrophoneAudioTrack();
        // Create a local video track from the video captured by a camera.
        channelParameters.localVideoTrack =
          await AgoraRTC.createCameraVideoTrack();
        // Append the local video container to the page body.
        // document.body.append(localPlayerContainer);
        // Publish the local audio and video tracks in the channel.
        await agoraEngine.publish([
          channelParameters.localAudioTrack,
          channelParameters.localVideoTrack,
        ]);
        // Play the local video track.
        channelParameters.localVideoTrack.play(localPlayerContainer);
        console.log("publish success!");
      // };
      // Listen to the Leave button click event.
      document.getElementById("leave").onclick = async function () {
        // Destroy the local audio and video tracks.
        channelParameters.localAudioTrack.close();
        channelParameters.localVideoTrack.close();
        // Remove the containers you created for the local video and remote video.
        // removeVideoDiv(remotePlayerContainer.id);
        // removeVideoDiv(localPlayerContainer.id);
        // Leave the channel
        await agoraEngine.leave();
        console.log("You left the channel");
        // Refresh the page for reuse
        window.location.reload();
      };
    };
  }
  startBasicCall();

</script>

<div class="grid grid-cols-2 p-4 pt-10 gap-8 w-full mx-auto items-centerd justify-center ">
  <div id="localUser" class="h-96 bg-white rounded-xl">
    Video Meet
    
  </div>
  <div id="remoteUser" class="h-96  bg-white rounded-xl">
  Remote
  </div>
</div>
<button id="join">Video Meet</button>
<style>
</style>

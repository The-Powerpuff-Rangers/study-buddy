<script lang="ts">
    export let channelId: string;
    export let uid: string;
    import VideoCall from "../components/VideoCall.svelte";
</script>

<VideoCall channelId={channelId} uid={uid}/>
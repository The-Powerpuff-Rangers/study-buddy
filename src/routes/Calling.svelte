<script lang="ts">
  export let channelId: string;
  export let uid: string;
  import VideoCall from "../components/VideoCall.svelte";
  import ChatBox from "../components/ChatBox.svelte";
  import { Message } from "../models/Message.ts";
  import MeetTool from "../components/MeetTool.svelte";

  let messages: Message[] = [
    new Message(
      1,
      new Date(),
      "Alice",
      "Hi there, I'm writing a chat message!"
    ),
    new Message(
      2,
      new Date(),
      "Bob",
      "Hi Alice, what's the weather over there? ☁️"
    ),
    new Message(4, new Date(), "Alice", "It's really sunny over here 🌞😎"),
    new Message(3, new Date(), "Carol", "Hi guys 👋"),
  ];
</script>
<div class="h-full bg-neutral-300 w-full">
  <div class="flex flex-row">
    <div class="w-8/12">
      <VideoCall {channelId} {uid} />
    </div>
    <div class="w-4/12">
      <ChatBox {messages} />
    </div>
  </div>
  <MeetTool />
</div>


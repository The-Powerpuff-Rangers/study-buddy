<script lang="ts">
    import { afterUpdate } from "svelte";
    import Bubble from "./ChatBubble.svelte";
    import Controls from "./ChatBoxControl.svelte";
    import {Message} from "../models/Message.ts"


    export let messages: Message[]; 
  
    let user: string = "Alice";
    let message: string;
      
    
    let messageContainer;
  
    afterUpdate(() => {
      scrollToBottom(messageContainer);
    });
  
    async function send() {
      if (!message || message == undefined || message == "" || !user || user == undefined || user == "") return;
  
      messages.push({ timestamp: new Date(), user: user, message: message, id: messages.length + 1 });
      message = "";
      messages = messages;
    }
  
    const scrollToBottom = async (node: any) => {
      node.scroll({ top: node.scrollHeight, behavior: "smooth" });
    };
  </script>
  
  <div class="h-screen overflow-auto mx-auto">
    <div class="h-80% bg-white w-80 rounded-2xl shadow-md">
      <h1 class=" rounded-2xl text-lg p-3">In-call Messages</h1>
      <div bind:this={messageContainer} class=" p-2 overflow-y-auto h-80">
        {#each messages as message}
        <Bubble {message} {user}></Bubble>
        {/each}
      </div>
      <Controls bind:message={message} bind:user={user} {send}></Controls>
    </div>
  </div>
  
<script>
    export let user;    // Value of the user input
    export let send;    // Function that sends the current message
    export let message; // Value of the message input
  </script>
  
  <div class="controls p-2">
    <!-- <p class="text-xs">Username: <input class="w-full rounded-md" placeholder="Type your username here..." bind:value={user} type="text" /></p> -->
    
    <textarea class="w-full border-2 border-neutral-50 h-20 mt-2 rounded-md resize-none p-3" placeholder="Type your message here..." bind:value={message}></textarea>
    <button class="w-full h-8 mt-2 bg-orange-400 text-white rounded-md transition duration-200 hover:bg-orange-400" on:click="{()=>send()}">Send</button>
  </div>
  
<script>
    export let message; // Message object that contains all information about this specific message
    export let user; // Username of the user that is currently using the chatbox
  </script>
  
  <p class="{message.user == user ? 'text-right' : 'text-left'} text-xs text-gray-500 px-3 mt-5">
    {message.user} | {message.timestamp.toLocaleString()}
  </p>
  
  <div class="{message.user == user ? 'flex justify-end' : 'flex justify-start'} items-center mt-2">
    <div
      class="w-40 py-2 mx-3 px-2 rounded-lg {message.user == user ? 'bg-primary-100 text-white' : 'bg-neutral-30'}">
      <p class="text-s">{message.message}</p>
    </div>
  </div>
  
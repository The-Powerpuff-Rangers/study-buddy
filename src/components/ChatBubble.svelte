<script>
    export let message; // Message object that contains all information about this specific message
    export let user; // Username of the user that is currently using the chatbox
  </script>
  
  <p class="{message.user == user ? 'text-right' : 'text-left'} text-xs text-gray-500">
    {message.user} | {message.timestamp.toLocaleString()}
  </p>
  
  <div class="{message.user == user ? 'flex justify-end' : 'flex justify-start'} items-center mt-2">
    <div
      class="w-80 px-2 py-1 rounded-lg {message.user == user ? 'bg-blue-500' : 'bg-gray-200'}"
    >
      <p class="text-xs">{message.message}</p>
    </div>
  </div>
  
<script lang="ts">
    export let title: string = "StudyBuddy";
    export let logout: () => void;
  </script>
  
  <nav class="text-primary-100 p-3 py-5  mt-3 flex items-center w-5/6 mx-auto justify-between rounded-xl bg-gray-700 backdrop-filter bg-opacity-30 border-gray-600 backdrop-blur-lg">
    <div class="text-xl font-bold">{title}</div>
    <div class="flex justify-center space-x-4">
      <button class="px-4 py-2 rounded hover:text-white  ">Home</button>
      <button class="px-4 py-2 rounded hover:text-white">About</button>
      <button class="px-4 py-2 rounded hover:text-white">Friends</button>
    </div>
    <button class="p-3 rounded-xl bg-primary-200 text-white" on:click={logout}>Logout</button>
  </nav>
  

  
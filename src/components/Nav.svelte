<script lang="ts">
    export let title: string = "StudyBuddy";
    export let logout: () => void;
  </script>
  
  <nav class="bg-transparent text-primary-100 py-5 px-4  flex items-center w-7/12 mx-auto justify-between">
    <div class="text-xl font-bold">{title}</div>
    <div class="flex justify-center space-x-4">
      <button class="px-4 py-2 rounded hover:bg-neutral-200  ">Home</button>
      <button class="px-4 py-2 rounded hover:bg-neutral-200">About</button>
      <button class="px-4 py-2 rounded hover:bg-neutral-200">Friends</button>
    </div>
    <button class="px-4 py-2 rounded hover:bg-neutral-200" on:click={logout}>Logout</button>
  </nav>
  

  
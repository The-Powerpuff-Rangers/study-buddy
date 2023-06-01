<script lang="ts">
  export let title: string = "StudyBuddy";
  export let logout: () => void;

  let active: string = "hidden";
  function toggleActive() {
    active = active === "hidden" ? "block" : "hidden";
  }
</script>

<nav
  class="text-primary-100 p-3 py-5 mt-3 px-15 flex md:flex-row items-center w-auto mx-auto justify-between rounded-xl bg-neutral-150 backdrop-filter bg-opacity-30 border-gray-600 backdrop-blur-lg"
>
  <div class="text-xl px-6 font-bold">{title}</div>
  <div class="max-md:hidden w-1/3 flex justify-between">
      <div class="flex">
        <a class="px-6 py-4 rounded hover:text-white" href="/">Home</a>
        <a class="px-6 py-4 rounded hover:text-white" href="/about">About</a>
        <a class="px-6 py-4 rounded hover:text-white" href="/calling">Friends</a
        >
      </div>
      <button
        class="p-3 mx-6 rounded-xl bg-primary-200 text-white"
        on:click={logout}>Logout</button
      >
  </div>
  <div class=" md:hidden">
    <button
      type="button"
      class="p-3 rounded-md bg-primary-200 text-white"
      aria-label="Menu"
      on:click={toggleActive}
    >
      <svg
        class="h-6 w-6"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
    <div
      class="{active} origin-top-right fixed right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
      id="dropdown-menu"
    >
      <a
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        role="menuitem"
        href="/">Home</a
      >
      <a
        href="/about"
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        role="menuitem">About</a
      >
      <a
        href="/"
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        role="menuitem">Friends</a
      >
      <button
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        on:click={logout}
        role="menuitem">Logout</button
      >
    </div>
  </div>
</nav>

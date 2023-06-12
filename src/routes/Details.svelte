<script lang="ts">

  import universities from "../assets/json/university_list.json";
  import subjects from "../assets/json/subjects_list.json";

  import { onMount } from "svelte";
  import TomSelect from "tom-select";

  let select;

  onMount(() => {
    select = new TomSelect(".tom-multiselect", {
      plugins: ["remove_button"], // Enable remove button plugin for multiselect
      //   multiple: true, // Enable multiple selection
      // Add any additional configuration options here
    });
  });

  let unis: string[] = universities.Universities;
</script>

<!-- Markup Area Begin -->
<div class="flex items-center min-h-screen bg-neutral-300">
  <div class="flex-1 h-full max-w-4xl mx-auto bg-slate-50 rounded-lg shadow-xl">
    <div class="w-full p-5">
      <div class="flex justify-center">
        <img
          src="src/assets/icons/svelte.svg"
          alt="logo"
          class=" h-full float-right"
        />
      </div>
      <h1 class="mb-4 text-2xl font-bold text-center text-gray-700">
        Enter Profile Details
      </h1>

      <!-- Dropdown here -->

      <div class="w-full h-8">
        <label for="universities" class="block mt-4 text-sm text-slate-900"
          >Select Your Semester</label
        >
        <select
          class="w-full h-full text-gray-600 border-2 border-gray-300 text-xs"
        >
          <option selected />
          {#each ["1 Sem", "2 Sem", "3 Sem", "4 Sem", "5 Sem", "6 Sem", "7 Sem", "8 Sem"] as sem}
            <option value={sem}>{sem}</option>
          {/each}
        </select>
      </div>
      <!-- END -->
      <!-- Dropdown here -->

      <div class="w-full h-8">
        <label for="universities" class="block mt-10 text-sm text-slate-900"
          >Select Your University</label
        >
        <select
          class="w-full h-full text-gray-600 border-2 border-gray-300 text-xs"
        >
          <option selected />
          {#each unis as university}
            <option value={university}>{university}</option>
          {/each}
        </select>
      </div>
      <!-- END -->

      <!-- Tom Select here -->
      <div class="w-full mt-10">
        <label for="universities" class="block mt-4 text-sm text-slate-900"
          >Select Your Subject(s)</label
        >
        <select class="tom-multiselect" multiple>
          {#each subjects.values as subject}
            <option value={subject}>{subject}</option>
          {/each}
          
        </select>
      </div>
      <!-- END -->

      <button
        class="block w-full px-4 py-2 mt-10 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 border border-transparent rounded-lg active:bg-pink-500 hover:bg-pink-500 focus:outline-none focus:shadow-outline-blue bg-pink-600"
      >
        Submit
      </button>
    </div>
  </div>
</div>

<!-- Markup Area End -->

<style>
</style>

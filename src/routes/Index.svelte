<script lang="ts">
  import Nav from "../components/Nav.svelte";
  import ProfileCard from "../components/ProfileCard.svelte";
</script>

<div class="bg-neutral-300 h-screen w-full">
  <div class="w-full fixed">
    <Nav />
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pl-6 text-white pt-28">
    <div class="bg-transparent p-4">
      <h2 class="text-sm text-white font-medium mt-5 mb-2">
        Find your study buddy today
      </h2>
      <h1 class="text-8xl text-white font-bold w-5/6">Apes Together Strong</h1>
    </div>
    <div class="bg-transparent p-4">
      Subjects

      <div class="grid grid-cols-2 md:grid-cols-2 p-2 gap-4">
        <!-- Boxes for the right half -->
        <div class="bg-transparent h-32">sub1</div>
        <div class="bg-transparent h-32">sub2</div>
        <div class="bg-transparent h-32">sub3</div>
        <div class="bg-transparent h-32">sub4</div>
        <!-- Add more boxes as needed -->
      </div>
    </div>
  </div>
</div>

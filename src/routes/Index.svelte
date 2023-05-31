<script lang="ts">
  import Nav from "../components/Nav.svelte";
  import ProfileCard from "../components/ProfileCard.svelte";
  import SubjectCard from "../components/SubjectCard.svelte";
</script>

<style>
  .scrollable {
    overflow-y: scroll;
    max-height: 45%;
  }
  @media (max-height: 2000px) {
    .scrollable {
      max-height: 75%;
    }
  }
  @media (max-height: 1024px) {
    .scrollable {
      max-height: 45%;
    }
  }

  @media (max-height: 860px) {
    .scrollable {
      max-height: 40%;
    }
  }

  @media (max-height: 768px) {
    .scrollable {
      max-height: 30%;
    }
  }
  
  @media (max-height: 690px) {
    .scrollable {
      max-height: 23%;
    }
  }
  @media (max-height: 610px) {
    .scrollable {
      max-height: 37%;
    }
  }
  @media (max-height: 400px) {
    .scrollable {
      max-height: 33%;
    }
  }
</style>

<div class="bg-neutral-300 h-screen w-full overflow-hidden">
  <div class="w-5/6 max-md:w-3/4 mx-auto items-center">
    <Nav />
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pl-6 text-white pt-0 md:mt-20">
    <div class="bg-transparent p-4 ">
      <h2 class="text-xl text-white font-medium mt-5">
        Find your study buddy today
      </h2>
      <h1 class="text-white font-bold w-5/6 lg:text-8xl md:text-6xl text-6xl">Apes Together Strong</h1>
    </div>
    <div class="p-4">
      <div class="scrollable rounded-lg">
        <div class="grid grid-cols-2 md:grid-cols-2 p-2 gap-4">
          <!-- Boxes for the right half -->
          <div><SubjectCard/></div>
          <div><SubjectCard/></div>
          <div><SubjectCard/></div>
          <div><SubjectCard/></div>
          <div><SubjectCard/></div>
          <div><SubjectCard/></div>
          <div><SubjectCard/></div>
          <div><SubjectCard/></div>
          <div><SubjectCard/></div>
          <div><SubjectCard/></div>
          <div><SubjectCard/></div>
          <div><SubjectCard/></div>
          <!-- Add more boxes as needed -->
        </div>
      </div>
    </div>
  </div>
</div>

<script lang="ts">
  import Nav from "../components/Nav.svelte";
  import ProfileCard from "../components/ProfileCard.svelte";
  import SubjectCard from "../components/SubjectCard.svelte";

</script>

<Nav/>
<header
class="flex-col items-center h-screen bg-fixed bg-center bg-cover custom-img overflow-hidden"
>
  <div class="p-5 mx-auto mt-36 heading">
    <div
      class="bg-transparent p-4 w-5/6 flex-col justify-center items-center mx-auto"
    >
      <div class="mx-auto w-full">
        <h2 class="text-xl text-white font-medium mt-5">
          Find your study buddy today
        </h2>
        <h1
          class="text-white font-bold max-md:text-8xl max-sm:text-6xl max-lg:text-9xl lg:text-9xl"
        >
          Apes Together Strong
        </h1>
      </div>
    </div>
  </div>
</header>
<div class=" bg-neutral-300 w-full text-center">
  
  <h2
    class="text-5xl bg-transparent pt-10 mb-10 pb-10 w-fit rounded-full text-white font-medium mx-auto"
  >
    <p class="p-3">Let's start learning...</p>
  </h2>
  <div
    class="grid grid-cols-3 p-4 gap-4 mb-0 w-fit mx-auto items-centerd justify-center max-lg:grid-cols-2 max-md:grid-cols-1"
  >
    <SubjectCard />
    <SubjectCard />
    <SubjectCard />
    <SubjectCard />
    <SubjectCard />
    <SubjectCard />
    <SubjectCard />
    <SubjectCard />
    <SubjectCard />
    <SubjectCard />
  </div>
</div>
<section
  class="flex items-center justify-center h-screen mx-auto mb-12 bg-fixed bg-center bg-cover custom-img"
>
<!-- use lottie files for animation -->

</section>
<div class="max-w-lg m-auto">

</div>


<style>
  .custom-img {
    background-image: url("../assets/backgroundHome.png");
  }
  @media (max-height: 700px) {
    .heading {
      margin-top: 0rem;
    }
  }
</style>

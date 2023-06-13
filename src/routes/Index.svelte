<script lang="ts">
  import Footer from "../components/Footer.svelte";
  import Nav from "../components/Nav.svelte";
  import ProfileCard from "../components/ProfileCard.svelte";
  import SubjectCard from "../components/SubjectCard.svelte";
</script>

<Nav />
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
<div class="bg-neutral-300">
  <div class="flex justify-center items-center">
    <h1 class=" text-8xl text-left text-white opacity-10 absolute">
      Let's Learn
    </h1>
    <h2
      class=" text-primary-100 font-extrabold text-6xl p-6 drop-shadow-[0_0px_15px_rgba(240,44,50,0.7)]"
    >
      Let's Learn
    </h2>
  </div>
  <!-- <div class=" bg-neutral-300 w-full text-center"> -->

  <div
    class="grid grid-cols-3 p-4 pt-10 gap-8 w-fit mx-auto justify-center max-lg:grid-cols-2 max-md:grid-cols-1"
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
  class="flex items-center justify-center h-screen mx-auto bg-fixed bg-center bg-cover custom-img"
>
  <div class="text-2xl text-white flex flex-col bg-opacity-50 rounded-xl">
    <h1 class=" text-8xl text-center text-white opacity-100">
      How it works?
    </h1>
      <iframe width="190rem" height="160rem" class="mt-10 rounded-xl" src="https://www.youtube.com/embed/xvFZjo5PgG0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
</section>

<Footer />

<!-- <div class="max-w-lg m-auto" /> -->

<style>
  .custom-img {
    background-image: url("../assets/covers/backgroundHome.png");
  }
  @media (max-height: 700px) {
    .heading {
      margin-top: 0rem;
    }
  }
</style>

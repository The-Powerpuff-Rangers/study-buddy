<script lang="ts">
  import Nav from "../components/Nav.svelte";
  import ProfileCard from "../components/ProfileCard.svelte";
  import SubjectCard from "../components/SubjectCard.svelte";
</script>

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
<!--
<div class="bg-neutral-300 bg h-full w-full flex-col">
  <div class="w-5/6 max-md:w-3/4 mx-auto items-center">
    <Nav />
  </div>
  <div class=" pl-6 text-white pt-0 md:mt-20">
    <div class="bg-transparent p-4 w-5/6">
      <h2 class="text-xl text-white font-medium mt-5">
        Find your study buddy today
      </h2>
      <h1 class="text-white font-bold w-5/6 lg:text-9xl my-auto md:text-6xl text-8xl">Apes Together Strong</h1>
    </div>
    <div class="p-4 w-1/2 mx-auto">
      <div class="scrollable rounded-lg">
        <div class="grid grid-cols-2 md:grid-cols-2 p-2 gap-4">

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

        </div>
      </div>
    </div>
  </div>
</div> -->

<header class="flex-col items-center h-screen bg-fixed bg-center bg-cover custom-img overflow-hidden">
  <div class="w-5/6 max-md:w-3/4 mx-auto items-center  bg-transparent">
    <Nav/>
    </div>    
  <div class="p-5 mx-auto mt-36 heading">
    <div class="bg-transparent p-4 w-5/6 flex-col justify-center items-center mx-auto">
      <div class="mx-auto w-full">
      <h2 class="text-xl text-white font-medium mt-5 ">
        Find your study buddy today
      </h2>
      <h1 class="text-white font-bold max-md:text-8xl max-sm:text-6xl max-lg:text-9xl lg:text-9xl">Apes Together Strong</h1>
      </div>
    </div>
    
  </div>
  
</header>
<div class=" bg-neutral-300 w-full text-center">
  <h1 class="p-10"></h1>
  <h2 class="text-5xl bg-neutral-200 pt-10 mb-10 pb-10 w-fit rounded-full text-white font-medium mx-auto shadow-lg shadow-neutral-150">
    <p class="p-3">Let's start learning...</p>
  </h2>
  <div class="grid grid-cols-3 p-4 gap-4 mb-4 w-fit mx-auto items-centerd justify-center max-lg:grid-cols-2 max-md:grid-cols-1">

    <SubjectCard/>
    <SubjectCard/>
    <SubjectCard/>
    <SubjectCard/>
    <SubjectCard/>
    <SubjectCard/>
    <SubjectCard/>
    <SubjectCard/>
    <SubjectCard/>
    <SubjectCard/>
    
</div></div>
<section
  class="flex items-center justify-center h-screen mx-auto mb-12 bg-fixed bg-center bg-cover custom-img"
>
  <div class="p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl">
    Parralax inline
  </div>
</section>
<div class="max-w-lg m-auto">
  <p class="mb-4">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat a
    magna non varius. Proin leo felis, euismod non porta eget, varius sit amet
    sapien. Maecenas in nulla at leo convallis consectetur id a sapien. Nulla
    nec pulvinar nisi. Vivamus non facilisis lacus, et volutpat libero. Nulla ac
    odio aliquam, accumsan arcu ut, lacinia est. Nulla eu sem elit. Fusce nec
    laoreet sem, semper molestie libero.
  </p>
  <p class="mb-4">
    Ut sagittis lacus consequat accumsan venenatis. Sed sollicitudin, lectus et
    fringilla ultrices, dolor nisi scelerisque tortor, vel finibus magna massa
    non nunc. Phasellus massa quam, egestas a nisl sed, porta volutpat metus.
    Nunc sed elit ac tellus tempor cursus. Suspendisse potenti. Vestibulum
    varius rutrum nisl nec consequat. Suspendisse semper dignissim sem viverra
    semper. Nulla porttitor, purus nec accumsan pharetra, nisi dolor condimentum
    ipsum, id consequat nulla nunc in ligula.
  </p>
  <p class="mb-4">
    Nulla pharetra lacinia nisi, vitae mollis tellus euismod id. Mauris porta
    dignissim hendrerit. Cras id velit varius, fermentum lectus vitae, ultricies
    dolor. In bibendum rhoncus purus vel rutrum. Nam vulputate imperdiet
    fringilla. Donec blandit libero massa. Suspendisse dictum diam mauris, vitae
    fermentum dolor tincidunt in. Pellentesque sollicitudin venenatis dolor,
    vitae scelerisque elit ultrices eu. Donec eget sodales risus, quis dignissim
    neque.
  </p>
</div>

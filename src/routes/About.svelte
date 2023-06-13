<script lang="ts">
  import Footer from "../components/Footer.svelte";
  import Nav from "../components/Nav.svelte";
</script>

<Nav />
<section class="h-screen w-screen bg-neutral-300 overflow-x-clip">
  <div class="flex flex-row items-center mx-auto justify-between h-full px-20 overflow-hidden">
    <h1 class="text-8xl mx-auto text-white p-15 font-bold overflow-hidden">Learn about Us</h1>
    <img src="src/assets/illustrations/build-up.svg" class="h-2/3 overflow-hidden" alt="Colab"/>
  </div>
  <div class="">
    <Footer />
  </div>
</section>
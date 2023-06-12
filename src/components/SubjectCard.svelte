<script lang="ts">
  export let imagePath: string =
    "https://i.pinimg.com/originals/fc/8e/3c/fc8e3c43e7581107e77558e7f4b56e0f.png";
  export let subjectName: string = "Computer Networks";
</script>

<!-- Card Design -->
<div class="rounded-xl max-w-xs overflow-hidden shadow-lg bg-neutral-70 hover:scale-105 hover:cursor-pointer transition-transform">
  <img class="w-full" src={imagePath} alt="Sunset in the mountains" />
  <div class="px-6 py-4 bg-white">
    <div class="font-bold text-xl mb-2">{subjectName}</div>
    <p class="text-gray-700 text-base pb-10">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
      quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
      nihil.
    </p>
  </div>
</div>

<style>
</style>

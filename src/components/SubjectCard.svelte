<script lang='ts'>
    export let imagePath:string = "https://cdn.icon-icons.com/icons2/3310/PNG/512/laptop_computer_books_study_pc_icon_209270.png";
    export let subjectName:string = "Computer Networks";
  </script>

  
  <div class="bg-primary-300 shadow-lg shadow-neutral-200 rounded-lg flex flex-col h-80 w-80 m-2 p-2 text-center hover:bg-primary-100">
    <div class="items-baseline h-full pt-3 bg-transparent">
    <img src={imagePath} alt="Placeholder" class="rounded-full w-1/4 mx-auto mb-3">
    <h3 class="text-lg font-semibold mb-2 mx-auto">{subjectName}</h3>
  </div>
  </div>
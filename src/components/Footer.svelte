<script lang="ts">
    export let logo:string = "src/assets/logos/logo-white.png";
</script>

<footer class="bg-neutral-300 py-10">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
              <a href="https://github.com/The-Powerpuff-Rangers/study-buddy/" class="flex items-center">
                  <img src={logo} class="h-8 mr-3" alt="Logo" />
                  <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Study Buddy</span>
              </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 text-xs">
              <div>
                  <h2 class="mb-6 font-semibold uppercase text-white">Resources</h2>
                  <ul class=" text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="https://github.com/The-Powerpuff-Rangers/study-buddy/" class="hover:underline">Github</a>
                      </li>
                      <li>
                          <a href="https://github.com/The-Powerpuff-Rangers/study-buddy/blob/main/README.md" class="hover:underline">Docs</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 font-semibold uppercase text-white">Follow us</h2>
                  <ul class=" text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="https://github.com/The-Powerpuff-Rangers/study-buddy" class="hover:underline ">Github</a>
                      </li>
                      <li class="mb-4">
                          <a href="https://www.linkedin.com/in/khushiyant/" class="hover:underline ">Linkedin</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 font-semibold  uppercase text-white">Legal</h2>
                  <ul class="text-gray-400 font-medium text-xs">
                      <li class="mb-4">
                          <a href="#" class="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr class="my-6 :mx-auto border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center ">© 2023 <a href="https://github.com/The-Powerpuff-Rangers/study-buddy/" class="hover:underline">Study Buddy</a>. All Rights Reserved.
          </span>
          <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              
              <a href="https://github.com/The-Powerpuff-Rangers/study-buddy" class="text-gray-500 hover:text-white">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                  <span class="sr-only">GitHub account</span>
              </a>
          </div>
      </div>
    </div>
  </footer>
<script lang="ts">
  export const cover: string = "src/assets/books.jpg";
</script>

<!-- Markup Area Begin -->
<div class="flex items-center min-h-screen bg-neutral-300">
  <div class="flex-1 h-full max-w-4xl mx-auto bg-slate-50 rounded-lg shadow-xl">
    <div class="flex flex-col md:flex-row ">
      <div class="h-32 md:h-auto md:w-1/2">
        <img
          class="object-cover w-full h-full"
          src={cover}
          alt="img"
        />
      </div>
      <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
        <div class="w-full">
          <div class="flex justify-center ">
            <img
              src="src/assets/svelte.svg"
              alt="logo"
              class=" h-full float-right"
            />
          </div>
          <h1 class="mb-4 text-2xl font-bold text-center text-gray-700">
            Login to Your Account
          </h1>
          <div>
            <label class="block text-sm text-slate-900" for="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              class="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
              placeholder=""
            />
          </div>
          <div>
            <label class="block mt-4 text-sm text-slate-900" for="password">
              Password
            </label>
            <input
              id="password"
              class="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
              placeholder=""
              type="password"
            />
          </div>

          <button
            class="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue bg-pink-600"
            href="#"
          >
            Log in
          </button>

          <p class=" text-sm mt-4 text-gray-900">
            New User?
            <a class=" text-blue-600 hover:underline" href="/register">
              Sign Up
            </a>
          </p>
          <hr class="my-8" />

          <div class="flex items-center justify-center gap-4">
            <button
              class="flex items-center justify-center w-full px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-lg hover:border-gray-500 focus:border-gray-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                class="w-4 h-4 mr-2"
                viewBox="0 0 48 48"
              >
                <defs>
                  <path
                    id="a"
                    d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                  />
                </defs>
                <clipPath id="b">
                  <use xlink:href="#a" overflow="visible" />
                </clipPath>
                <path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
                <path
                  clip-path="url(#b)"
                  fill="#EA4335"
                  d="M0 11l17 13 7-6.1L48 14V0H0z"
                />
                <path
                  clip-path="url(#b)"
                  fill="#34A853"
                  d="M0 37l30-23 7.9 1L48 0v48H0z"
                />
                <path
                  clip-path="url(#b)"
                  fill="#4285F4"
                  d="M48 48L17 24l-4-3 35-10z"
                />
              </svg>Google
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Markup Area End -->

<style>
</style>

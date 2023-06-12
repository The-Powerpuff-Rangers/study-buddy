<script lang="ts">
  import { loginWithGoogle, signUp } from "../api/authentication/auth";

  export const cover: string = "src/assets/cover-signup.jpg";

  import universities from "../assets/json/university_list.json";
  let unis: string[] = universities.Universities;
  let email: string = "";
  let password: string = "";
 async function register() {
  if(email.length < 1 || password.length < 8) {
    alert("Please enter a valid email and password")
    return;
  }
  if(email != null || email != undefined || email != "" || password != null || password != undefined || password != "") {
    const response =  await signUp(email,password)
    console.log(response)
  }
}
</script>

<!-- Markup Area Begin -->
<div class="flex items-center min-h-screen bg-neutral-300">
  <div class="flex-1 h-full max-w-4xl mx-auto bg-slate-50 rounded-lg shadow-xl">
    <div class="flex flex-col md:flex-row">
      <div class="h-32 md:h-auto md:w-1/2">
        <img class="object-cover w-full h-full" src={cover} alt="img" />
      </div>
      <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
        <div class="w-full">
          <div class="flex justify-center">
            <img
              src="src/assets/logos/logo-pink.png"
              alt="logo"
              class=" h-12 float-right"
            />
          </div>
          <h1 class="mb-4 text-2xl font-bold text-center text-gray-700">
            Sign Up
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
              bind:value={email}
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
              bind:value={password}
            />
          </div>
          <div>
            <label
              class="block mt-4 text-sm text-slate-900"
              for="confirm_password"
            >
              Confirm Password
            </label>
            <input
              id="confirm_password"
              class="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
              placeholder=""
              type="confirm_password"
            />
          </div>

          <!-- Dropdown here -->

          <!-- <div class="w-full h-8">
            <label for="universities" class="block mt-4 text-sm text-slate-900"
              >Select Your University</label
            >
            <select class="w-full h-full text-gray-600 border-2 border-gray-300 text-xs">
              <option selected /> 
              {#each unis as university}
                <option value={university}>{university}</option>
              {/each}
            </select>
          </div> -->
          <!-- END -->

          <button class="block w-full px-4 py-2 mt-10 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 border border-transparent rounded-lg active:bg-pink-500 hover:bg-pink-500 focus:outline-none focus:shadow-outline-blue bg-pink-600" on:click={register}>
            Sign Up
          </button>
          <p class=" text-sm mt-4 text-gray-900 ">
            Already a User?
            <a class=" text-blue-600 hover:underline" href="/login">
              Sign In
            </a>
          </p>

          <hr class="my-8" />

          <div class="flex items-center justify-center gap-4">
            <button
              class="flex items-center justify-center w-full px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-lg hover:border-gray-500 focus:border-gray-500"
              on:click={loginWithGoogle}
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

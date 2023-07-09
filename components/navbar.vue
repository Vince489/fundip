<template>
  <div>
    <!-- navbar goes here -->
    <nav id="navbar" class="z-40 bg-gray-300 fixed inset-x-0">
      <div class="px-6 pb-1 mx-auto">
        <div class="flex justify-between">
          <div class="flex space-x-4">
            <!-- logo -->
            <div>
              <nuxt-link
                to="/"
                class="flex items-center py-3 px-3 text-gray-700"
              >
                <svg
                  class="w-7 h-7 mr-1 text-green-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525"
                  />
                </svg>

                <span class="text-xl font-bold">Virtron</span>
              </nuxt-link>
            </div>

            <!-- primary nav-->
            <div class="hidden md:flex items-center space-x-3">

              <nuxt-link to="/fighters" class="font-semibold py-3 px-3 text-gray-700">Fighters</nuxt-link>
              <nuxt-link to="/ebca" class="font-semibold py-3 px-3 text-gray-700">EBCA</nuxt-link>
              <nuxt-link to="/about" class="font-semibold py-3 px-3 text-gray-700">About</nuxt-link>
              <nuxt-link to="#/contact" class="font-semibold py-3 px-3 text-gray-700">Contact</nuxt-link>

            </div>
          </div>

          <!--second nav-->


          <!-- mobile button-->
          <div id="menu-btn" class="md:hidden flex items-center">
            <button @click="toggleMenu" class="mobile-menu-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!--mobile menu-->
      <div v-if="toggle_menu" id="mobile-menu" class="mobile-menu md:hidden">
        <nuxt-link to="/events" class="block py-3 px-4 hover:bg-gray-200"
          >Events</nuxt-link
        >
        <nuxt-link to="/fighters" class="block py-3 px-4 hover:bg-gray-200"
          >Fighters</nuxt-link
        >
      </div>

      <div class="hidden">
        <nuxt-link to="#login" class="font-semibold py-1 px-3 text-gray-700"
          >Login
        </nuxt-link>
        <nuxt-link to="#signup" class="btn">
          Sign up
        </nuxt-link>
      </div>
    </nav>

    <!--content goes here-->
    <div class="container p-6 pt-24">
      <slot />
    </div>
    
  </div>
</template>

<script setup>
  let toggle_menu = ref(false);
  let toggle_profile = ref(false);

  onMounted(() => {
    window.addEventListener("click", function (e) {
      if (
        document.getElementById("mobile-menu") &&
        !document.getElementById("menu-btn").contains(e.target)
      ) {
        toggle_menu.value = false;
      }
      if (
        document.getElementById("profile-menu") &&
        !document.getElementById("profile-btn").contains(e.target)
      ) {
        toggle_profile.value = false;
      }
    });
  });

  function toggleMenu() {
    toggle_menu.value = !toggle_menu.value;
  }

  function toggleProfile() {
    toggle_profile.value = !toggle_profile.value;
  }
</script>



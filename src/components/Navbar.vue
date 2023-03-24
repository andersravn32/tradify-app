<script setup>
import {
  HomeIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  ArrowsRightLeftIcon,
  UserIcon,
} from "@heroicons/vue/24/solid";
</script>

<template>
  <nav id="navbar">
    <router-link to="/">
      <HomeIcon class="h-6 w-6" />
    </router-link>
    <router-link to="/">
      <MagnifyingGlassIcon class="h-6 w-6" />
    </router-link>
    <router-link to="/">
      <PlusIcon class="h-6 w-6" />
    </router-link>
    <router-link to="/">
      <ArrowsRightLeftIcon class="h-6 w-6" />
    </router-link>
    <router-link to="/">
      <UserIcon class="h-6 w-6" />
    </router-link>
  </nav>
</template>

<style>
#navbar {
  @apply flex items-center justify-between px-8 border-t-2 border-zinc-800/50 fixed bottom-0 left-0 right-0;
}

#navbar a {
  @apply p-4 text-white/50;
}

#navbar .router-link-active, #navbar .router-link-exact-active{
    @apply text-white
}
</style>

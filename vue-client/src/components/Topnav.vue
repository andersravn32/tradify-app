<script setup>
import { Bars3BottomLeftIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <header id="topnav">
    <button class="h-10 w-10">
      <Bars3BottomLeftIcon class="w-full h-full" />
    </button>
    <button class="h-10 w-10 bg-white/10 rounded-full"></button>
  </header>
</template>

<style>
#topnav {
  @apply flex items-center justify-between p-8 text-white;
}
</style>

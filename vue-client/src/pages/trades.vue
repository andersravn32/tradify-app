<script setup>
import {
  ArrowsRightLeftIcon,
  ChevronRightIcon,
} from "@heroicons/vue/24/outline";
</script>

<template>
  <div id="page-trades">
    <div class="flex flex-col space-y-2">
      <h1 class="text-4xl font-bold text-white">Mine handler</h1>
      <p class="text-white/50">
        Forneden kan du se de handler som du har deltaget i.
      </p>
    </div>
    <ul>
      <li class="date">
        <span class="text-sm text-white/50 uppercase">22. Mar 2022</span>
      </li>
      <li class="trade">
        <div class="flex flex-col space-y-2">
          <div class="flex space-x-4">
            <span class="flex items-center space-x-2 text-white/50 text-xs"
              ><span class="bg-red-500 h-2 w-2 rounded-full"></span
              ><span>Salg</span></span
            >
            <span class="text-xs text-white/50">Kryptovaluta</span>
          </div>

          <h3 class="text-white font-bold text-lg">Ethereum</h3>
          <div
            class="grid grid-cols-4 gap-4 text-sm text-white items-center text-white/50"
          >
            <span class="col-span-2">Modtager</span>
            <span>Beløb</span>
            <span>Status</span>
          </div>
        </div>
        <div class="grid grid-cols-4 gap-4 text-sm text-white items-center">
          <span class="col-span-2">Benny Jensen</span>
          <span>1.500 kr</span>
          <span>Afsluttet</span>
        </div>
      </li>
      <li class="trade">
        <div class="flex flex-col space-y-2">
          <div class="flex space-x-4">
            <span class="flex items-center space-x-2 text-white/50 text-xs"
              ><span class="bg-indigo-500 h-2 w-2 rounded-full"></span
              ><span>Mellemmand</span></span
            >
            <span class="text-xs text-white/50">Kryptovaluta</span>
          </div>

          <h3 class="text-white font-bold text-lg">Ethereum</h3>
          <div
            class="grid grid-cols-4 gap-4 text-sm text-white items-center text-white/50"
          >
            <span class="col-span-2">Modtager</span>
            <span>Beløb</span>
            <span>Status</span>
          </div>
        </div>
        <div class="grid grid-cols-4 gap-4 text-sm text-white items-center">
          <span class="col-span-2">Benny Jensen</span>
          <span>1.500 kr</span>
          <span>Afsluttet</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<style>
#page-trades {
  @apply px-8 flex flex-col space-y-8;
}

#page-trades ul {
  @apply flex flex-col space-y-4;
}

#page-trades ul .trade {
  @apply bg-zinc-800 p-4 flex flex-col rounded;
}
</style>

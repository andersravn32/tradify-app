<script setup>
import {
  EnvelopeIcon,
  ArrowsRightLeftIcon,
  UserPlusIcon,
} from "@heroicons/vue/24/solid";
</script>

<template>
  <div id="page-profile">
    <div
      class="profile-header"
      :style="{
        'background-image': `url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80)`,
      }"
    >
      <div
        class="h-32 w-32 bg-zinc-900 rounded-full absolute bottom-0 translate-y-1/4 bg-cover bg-center"
        :style="{
          'background-image':
            'url(https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)',
        }"
      ></div>
    </div>
    <div class="px-8">
      <h2 class="text-white font-bold text-2xl">Anders Ravn Adriansen</h2>
      <h3 class="text-white/50">@anders</h3>
      <div
        class="grid grid-cols-3 place-items-center my-4 py-4 border-t-2 border-b-2 border-zinc-800"
      >
        <button class="text-white/50 text-xs flex flex-col items-center">
          <EnvelopeIcon class="h-6 w-6" /><span>Send Besked</span></button
        ><button class="text-white/50 text-xs flex flex-col items-center">
          <ArrowsRightLeftIcon class="h-6 w-6" /><span
            >Opret Handel</span
          ></button
        ><button class="text-white/50 text-xs flex flex-col items-center">
          <UserPlusIcon class="h-6 w-6" /><span>Tilføj kontakt</span>
        </button>
      </div>
    </div>
    <div class="flex flex-col space-y-2 px-8 mb-4">
      <label class="text-white/50 uppercase text-sm" for="trades"
        >Handler</label
      >
      <div class="trade-counter">
        <span class="flex flex-col text-center"
          ><span class="text-2xl text-green-500">655</span
          ><span class="text-xs text-white/50">Positive</span></span
        ><span class="text-white/5">/</span
        ><span class="flex flex-col text-center"
          ><span class="text-2xl text-white">0</span
          ><span class="text-xs text-white/50">Neutrale</span></span
        ><span class="text-white/5">/</span
        ><span class="flex flex-col text-center"
          ><span class="text-2xl text-red-500">0</span
          ><span class="text-xs text-white/50">Negative</span></span
        >
      </div>
    </div>
    <div class="flex flex-col space-y-2 px-8">
      <label class="text-white/50 uppercase text-sm" for="trades"
        >Kontakter</label
      >
      <div class="bg-zinc-800 p-4 rounded grid grid-cols-2 gap-4">
        <div>
            <div
        class="h-10 w-10 bg-zinc-900 rounded-full bg-cover bg-center"
        :style="{
          'background-image':
            'url(https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)',
        }"
      ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#page-profile {
  @apply flex flex-col;
}

.profile-header {
  @apply bg-center bg-cover h-32 relative px-8 mb-12;
}

.trade-counter {
  @apply bg-zinc-800 p-4 rounded grid grid-cols-5 place-items-center;
}
</style>

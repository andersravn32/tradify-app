<template>
  <div id="page-index">
    <div class="flex flex-col space-y-2">
      <h1 class="text-4xl font-bold text-white">Velkommen</h1>
      <p class="text-white/50">Velkommen tilbage til Tradify.dk Anders!</p>
    </div>
    <div class="flex flex-col space-y-2">
      <label class="text-white/50 uppercase text-sm" for="trades"
        >Opret ny handel</label
      >
      <img src="../assets/qr.svg" alt="qr" />
      <div class="grid grid-cols-2 gap-2 text-white font-bold">
        <button class="bg-indigo-500 py-3 px-6 rounded">Opret handel</button>
        <button class="bg-zinc-800/50 py-3 px-6 rounded">Opdater</button>
      </div>
    </div>
    <div class="flex flex-col space-y-2">
      <label class="text-white/50 uppercase text-sm" for="trades"
        >Handler</label
      >
      <div class="trade-counter">
        <span class="flex flex-col text-center"
          ><span class="text-2xl text-green-500">655</span
          ><span class="text-xs text-white/25">Positive</span></span
        ><span class="text-white/5">/</span
        ><span class="flex flex-col text-center"
          ><span class="text-2xl text-white">0</span
          ><span class="text-xs text-white/25">Neutrale</span></span
        ><span class="text-white/5">/</span
        ><span class="flex flex-col text-center"
          ><span class="text-2xl text-red-500">0</span
          ><span class="text-xs text-white/25">Negative</span></span
        >
      </div>
    </div>
  </div>
</template>

<style>
#page-index {
  @apply px-8 flex flex-col space-y-8;
}

.trade-counter {
  @apply bg-zinc-800/50 p-4 rounded grid grid-cols-5 place-items-center;
}
</style>

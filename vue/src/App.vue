<script setup>
import Topnav from "./components/Topnav.vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div>
    <Topnav />
    <div>
      <router-view />
    </div>
    <Navbar />
  </div>
</template>

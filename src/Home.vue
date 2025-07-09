<script setup lang="ts">
import HeaderGeneral from './widgets/header/HeaderGeneral.vue';
import HeaderMobile from './widgets/header/HeaderMobile.vue';
</script>

<template>
    <HeaderGeneral/>
    <HeaderMobile/>
    <main>
      <router-view></router-view>
    </main>
</template>


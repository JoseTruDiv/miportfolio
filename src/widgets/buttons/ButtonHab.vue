<script setup lang="ts">
defineProps({
  textBtn: String,
  svg: String,
  bgColor: String,
  color: String
})


</script>

<template>
    <div class="btn-hab d-flex align-center text justify-center" style="font-weight: bold;" :style="{ backgroundColor: bgColor, color: color }"><img style="width: 24px;" :src="svg" alt=""> {{textBtn}}</div>
</template>

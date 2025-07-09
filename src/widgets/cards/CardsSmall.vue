<script setup lang="ts">
defineProps({
  title: String,
  img: String,
  link: String

})


</script>

<template>
    <div class="row-column align-center justify-center pt-4 pt-tablet-1">
        <div class="card-exp-img p-0 text-center d-none-mobile" style="z-index: 7;">
            <img :src="img" alt="">
        </div>
        <div class="card-edu p-1 pt-4">
            <h3 class="text-center w-100" style="font-size: 1.4rem;">{{title}}</h3>
            <div class="card-stickers">

            </div>
            <div class="d-flex justify-center">
                <a target="_blank" :href="link" class="a-nav w-100">Ver más</a>
            </div>
        </div>
    </div>
</template>

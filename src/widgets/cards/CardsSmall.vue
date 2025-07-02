<script setup lang="ts">
defineProps({
  title: String,
  img: String,
  link: String

})


</script>

<template>
    <div class="row-column align-center justify-center pt-4">
        <div class="card-exp-img p-0 text-center" style="z-index: 10;">
            <img style="border-radius: 100%;width: 10rem;" :src="img" alt="">
        </div>
        <div class="card-edu p-1 pt-4" style="margin-top: -4rem;">
            <h3 class="text-center w-100" style="font-size: 1.4rem;">{{title}}</h3>
            <div class="card-stickers">

            </div>
            <div class="d-flex justify-center">
                <a target="_blank" :href="link" class="a-nav w-100">Ver más</a>
            </div>
        </div>
    </div>
</template>

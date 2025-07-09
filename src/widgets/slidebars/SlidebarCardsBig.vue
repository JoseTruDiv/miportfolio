<script setup lang="ts">
    import { ref } from 'vue';
    import CardBig from '../../widgets/cards/CardsBig.vue';
    import Prismalia from '../../viewmodels/data/Empresas/Prismalia.ts';
    import PickRoll from '../../viewmodels/data/Empresas/PickRoll.ts';

    const pickroll = new PickRoll();
    const prismalia = new Prismalia();
    

    const num = ref(1);

    const next = () => {
        num.value++;

        console.log(num.value);
    }

    const back = () =>{
        num.value--;
        console.log(num.value);
    }

    console.log(num.value);


</script>

<template>
    <div class="d-flex align-center d-none-mobile pt-tablet-6 w-80 w-mobile-100">
        <div class="w-10">
            <a href="#" v-show="num>1" class="arrow-slider-big" @click.prevent="back">
                <svg xmlns="http://www.w3.org/2000/svg" height="30" fill="currentColor" class="bi bi-chevron-compact-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223"/>
                </svg>
            </a>
        </div>
        <CardBig v-show="num==1" :title="prismalia.title" :img="prismalia.img" :desc="prismalia.description" :numCard="1" />
        <CardBig v-show="num==2" :title="pickroll.title" :img="pickroll.img" :desc="pickroll.description" :numCard="2" />
        <div class="w-10">
            <a href="#" v-show="num<2" class="arrow-slider-big" @click.prevent="next">
                <svg xmlns="http://www.w3.org/2000/svg" height="30" fill="currentColor" class="bi bi-chevron-compact-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671"/>
                </svg>
            </a>
        </div>
    </div>
    <div class="d-none d-flex-mobile align-center flex-column-mobile" style="justify-content: space-between;height: 100vh;">
        <CardBig v-show="num==1" :title="prismalia.title" :img="prismalia.img" :desc="prismalia.description" :numCard="1" />
        <CardBig v-show="num==2" :title="pickroll.title" :img="pickroll.img" :desc="pickroll.description" :numCard="2" />
        <div class="d-flex w-100" style="position: relative;z-index: 8;margin-top: 6rem;">
            <div class="w-50 h-10" style="background-color: #fbfcfc70;">
                <a href="#" v-show="num>1" class="arrow-slider-big-mobile" @click.prevent="back" style="justify-content: center;display: flex;padding-top: 1.3rem;">
                <svg xmlns="http://www.w3.org/2000/svg" height="30" fill="currentColor" class="bi bi-chevron-compact-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223"/>
                </svg>
            </a>
            </div>
            <div class="w-50 h-10" style="background-color: #fbfcfc70;">
                <a href="#" style="justify-content: center;display: flex;padding-top: 1.3rem;" v-show="num<2" class="arrow-slider-big-mobile" @click.prevent="next">
                <svg xmlns="http://www.w3.org/2000/svg" height="30" fill="currentColor" class="bi bi-chevron-compact-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671"/>
                </svg>
                </a>
            </div>
        </div>
    </div>
</template>

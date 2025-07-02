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
    <div class="d-flex align-center">
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
</template>
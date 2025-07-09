<script setup lang="ts">
    import { ref,computed } from 'vue'; 
    import svgArrowRigth from '../../imgs/svg/chevron-right.svg';
    import svgArrowBottom from '../../imgs/svg/chevron-down.svg';

    defineProps({
        tittle: String,
        text: String
    })

    const boxTextActive = ref(false);
    const isAccordionOpen = ref(false);

    const currentArrow = computed(() => {
    return isAccordionOpen.value ? svgArrowBottom : svgArrowRigth;
    });

    const toggleAccordion = () => {
        isAccordionOpen.value = !isAccordionOpen.value;
        boxTextActive.value = !boxTextActive.value;
    };

</script>

<template>
    <div class="box-acordion-contact">
        <div class="d-flex justify-between align-center">
            <h3 style="color: #fff;font-size: 1.2rem;">{{tittle}}</h3>
            <a class="pr-2" href="#" @click.prevent="toggleAccordion"><img :src="currentArrow" alt=""></a>
        </div>
        <div>
            <p class="text" :class="!boxTextActive ? 'off-acordion-contact' : 'on-acordion-contact'" style="color: #fff;">{{text}}</p>
        </div>
    </div>
</template>
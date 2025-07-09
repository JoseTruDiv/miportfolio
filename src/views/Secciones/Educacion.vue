<script setup lang="ts">

import CardsSmall from '../../widgets/cards/CardsSmall.vue';
import Asir from '../../viewmodels/data/Estudios/Asir';
import Daw from '../../viewmodels/data/Estudios/Daw';
import Sa from '../../viewmodels/data/Estudios/Sa';

const asir = new Asir();
const daw = new Daw();
const sa = new Sa();

</script>

<template>
    <div class="container">
        <div class="box-edu d-none-tablet d-none-mobile">
            <CardsSmall :title="asir.title" :img="asir.img" :link="asir.link" />
             <CardsSmall :title="daw.title" :img="daw.img" :link="daw.link" />
             <CardsSmall :title="sa.title" :img="sa.img" :link="sa.link" />
        </div>
        <div class="d-none d-block-tablet d-none-mobile pt-4">
            <div class="d-flex justify-center align-center pt-3">
                <CardsSmall :title="asir.title" :img="asir.img" :link="asir.link" />
                 <CardsSmall :title="daw.title" :img="daw.img" :link="daw.link" />
            </div>
            <div class="d-flex justify-center align-center" style="margin-top: -1rem;">
                <CardsSmall :title="sa.title" :img="sa.img" :link="sa.link" />
            </div>
        </div>
        <div class="d-none d-tablet-none d-block-mobile pt-4">
            <div class="row-column" style="gap: 0rem;">
                <CardsSmall :title="asir.title" :img="asir.img" :link="asir.link" />
                <CardsSmall :title="daw.title" :img="daw.img" :link="daw.link" />
                <CardsSmall :title="sa.title" :img="sa.img" :link="sa.link" />
            </div>
        </div>
    </div>
</template>
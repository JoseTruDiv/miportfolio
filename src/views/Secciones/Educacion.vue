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
        <div class="d-flex justify-center g-2">
            <CardsSmall :title="asir.title" :img="asir.img" :link="asir.link" />
             <CardsSmall :title="daw.title" :img="daw.img" :link="daw.link" />
             <CardsSmall :title="sa.title" :img="sa.img" :link="sa.link" />
        </div>
    </div>
</template>
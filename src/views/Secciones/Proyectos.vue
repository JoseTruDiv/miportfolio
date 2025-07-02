<script setup lang="ts">

import CardsProyectos from '../../widgets/cards/CardsProyectos.vue'
import AppSoundWave from '../../viewmodels/data/Proyectos/AppSoundWave';
import BellezaJara from '../../viewmodels/data/Proyectos/BellezaJara';

const appSoundWave = new AppSoundWave();
const bellezaJara = new BellezaJara();

</script>

<template>
    <div class="container">
        <div class="d-flex justify-center g-2">
            <CardsProyectos :title="appSoundWave.title" :img="appSoundWave.img" :link="appSoundWave.link" :num-card="1" text-btn="Ver Repositorio" :iconGithub="1" />
             <CardsProyectos :title="bellezaJara.title" :img="bellezaJara.img" :link="bellezaJara.link" :num-card="2" text-btn="Ver Web" :iconGithub="0" />
             <CardsProyectos :title="appSoundWave.title" :img="appSoundWave.img" :link="appSoundWave.link" :num-card="1" text-btn="Ver Repositorio" :iconGithub="1" />
        </div>
    </div>
</template>
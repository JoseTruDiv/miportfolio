<script setup lang="ts">

import CardsProyectos from '../../widgets/cards/CardsProyectos.vue'
import AppSoundWave from '../../viewmodels/data/Proyectos/AppSoundWave';
import BellezaJara from '../../viewmodels/data/Proyectos/BellezaJara';
import Salesmaster from '../../viewmodels/data/Proyectos/Salesmaster';

const appSoundWave = new AppSoundWave();
const bellezaJara = new BellezaJara();
const salesmaster = new Salesmaster();

</script>

<template>
    <div class="container">
        <div class="d-flex d-none-tablet d-none-mobile justify-center g-2">
            <CardsProyectos :title="appSoundWave.title" :img="appSoundWave.img" :link="appSoundWave.link" :num-card="1" text-btn="Ver Repositorio" :iconGithub="1" />
             <CardsProyectos :title="bellezaJara.title" :img="bellezaJara.img" :link="bellezaJara.link" :num-card="2" text-btn="Ver Web" :iconGithub="0" />
             <CardsProyectos :title="salesmaster.title" :img="salesmaster.img" :link="salesmaster.link" :num-card="3" text-btn="Ver Repositorio" :iconGithub="1" />
        </div>
        <div class="d-none d-block-tablet d-none-mobile pt-4">
            <div class="d-flex justify-center align-center pt-2">
               <CardsProyectos :title="appSoundWave.title" :img="appSoundWave.img" :link="appSoundWave.link" :num-card="1" text-btn="Ver Repositorio" :iconGithub="1" />
                <CardsProyectos :title="bellezaJara.title" :img="bellezaJara.img" :link="bellezaJara.link" :num-card="2" text-btn="Ver Web" :iconGithub="0" />
            </div>
            <div class="d-flex justify-center align-center" style="margin-top: -3rem;">
                 <CardsProyectos :title="salesmaster.title" :img="salesmaster.img" :link="salesmaster.link" :num-card="3" text-btn="Ver Repositorio" :iconGithub="1" />
            </div>
        </div>
        <div class="d-none d-tablet-none d-block-mobile pt-2">
            <div class="row-column" style="gap: 0rem;">
                <CardsProyectos :title="appSoundWave.title" :img="appSoundWave.img" :link="appSoundWave.link" :num-card="1" text-btn="Ver Repositorio" :iconGithub="1" />
                <div style="margin-top: -3rem;">
                    <CardsProyectos :title="bellezaJara.title" :img="bellezaJara.img" :link="bellezaJara.link" :num-card="2" text-btn="Ver Web" :iconGithub="0" />
                </div>
                 <div style="margin-top: -3rem;">
                    <CardsProyectos :title="salesmaster.title" :img="salesmaster.img" :link="salesmaster.link" :num-card="3" text-btn="Ver Repositorio" :iconGithub="1" />
                </div>
            </div>
        </div>
    </div>
</template>
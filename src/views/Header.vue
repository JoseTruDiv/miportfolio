<script lang="ts" setup>
import { RouterLink, useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();

const getLinkClass = computed(() => (path) => {
    if (route.path === path) {
        return 'a-nav-on';
    }else{
        return 'a-nav';
    }
});

</script>

<template>
  <header>
    <div class="d-flex justify-center">
      <div class="nav">
        <router-link to="/" :class="getLinkClass('/')">Sobre mí</router-link>
        <router-link to="/stack" :class="getLinkClass('/stack')">Mi stack</router-link>
        <router-link to="/experiencia" :class="getLinkClass('/experiencia')">Experiencia laboral</router-link>
        <router-link to="/educacion" :class="getLinkClass('/educacion')">Educación y certificaciones</router-link>
        <router-link to="/proyectos" :class="getLinkClass('/proyectos')">Proyectos destacados</router-link>
        <router-link to="/contacto" :class="getLinkClass('/contacto')">Contacto</router-link>
      </div>
    </div>
  </header>
</template>



<style>

.a-nav-on {
  background-color: #5d6061;
  color: #fff;
  border-radius: 3rem;
  opacity: 0.8;
  text-decoration: none;
  height: 100%;
  padding: 1rem;
  text-align: center;
  font-family: "Nunito";
}
</style>
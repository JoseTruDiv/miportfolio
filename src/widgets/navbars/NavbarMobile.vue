<script lang="ts" setup>
    import activeModalNav from '../../viewmodels/components/nav/ActiveModalNav';

    const cambiaPalanca = ()=>{
        if (activeModalNav.palanca.value==0) {
            activeModalNav.onPalanca();
            console.log(activeModalNav.palanca.value);
        }else{
            activeModalNav.offPalaca();
        }
    }


</script>


<template>
       <div class="div-header-mobile">
            <a class="btn-nav-mobile" href="#" @click.prevent="cambiaPalanca">
                <svg xmlns="http://www.w3.org/2000/svg" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
            </a>
       </div>
</template>


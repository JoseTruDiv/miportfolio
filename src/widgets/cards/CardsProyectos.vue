<script setup lang="ts">
import ButtonHab from "../buttons/ButtonHab.vue";
import Laravel from "../../imgs/svg/laravel.svg";
import sass from "../../imgs/svg/sass-logo.svg";
import svgphp from '../../imgs/svg/php.svg';
import vue from "../../imgs/svg/vue.svg";
import svgWp from "../../imgs/svg/wordpress-logo_59483.svg";
import svgElm from "../../imgs/svg/elementor_5968697.svg";
import svgfigma from "../../imgs/svg/figma.svg";
import svgIllustrator from '../../imgs/svg/illustrator_5968472.svg';
import svgCss from '../../imgs/svg/css-3_732190.svg';
import svgHtml from '../../imgs/svg/html-5_174854.svg';



defineProps({
  title: String,
  img: String,
  link: String,
  numCard: Number,
  textBtn : String,
  iconGithub: Number
})


</script>

<template>
    <div class="row-column align-center justify-center pt-4 pt-tablet-1">
        <div class="card-exp-img p-0 text-center d-none-mobile" style="z-index: 7;">
            <img :src="img" alt="">
        </div>
        <div class="card-proy p-1 pt-4 pt-mobile-1">
            <h3 class="text-center w-100" style="font-size: 1.4rem;">{{title}}</h3>
                <template v-if="numCard === 1">
                <div class="card-stickers py-1">
                    <ButtonHab :svg="Laravel" textBtn="Laravel" bgColor="#f72c1e" color="#fff" />
                    <ButtonHab :svg="vue" textBtn="Vue" bgColor="#33495e" color="#41b783" />
                    <ButtonHab :svg="sass" textBtn="Sass" bgColor="#C33EE6" color="#fff" />
                    <ButtonHab :svg="svgfigma" textBtn="Figma" bgColor="#1e1e1e" color="#fff" />
                    <ButtonHab :svg="svgIllustrator" textBtn="Illustrator" bgColor="#fe9b00" color="#330000" />
                    <ButtonHab :svg="svgCss" textBtn="CSS" bgColor="#A9BAC7" color="#1d80c1" />
                    </div>
                </template>
                <template v-if="numCard === 2">
                <div class="card-stickers py-1">
                    <ButtonHab :svg="svgWp" textBtn="Wordpress" bgColor="#87A2E6" color="#3858e9" />
                <ButtonHab :svg="svgElm" textBtn="Elementor" bgColor="#C33EE6" color="#660044" />
                <ButtonHab :svg="svgfigma" textBtn="Figma" bgColor="#1e1e1e" color="#fff" />
                <ButtonHab :svg="svgIllustrator" textBtn="Illustrator" bgColor="#fe9b00" color="#330000" />
                <ButtonHab :svg="svgCss" textBtn="CSS" bgColor="#A9BAC7" color="#1d80c1" />
                <ButtonHab :svg="svgHtml" textBtn="HTML" bgColor="#D99B66" color="#fc490b" />
                    </div>
                </template>
                <template v-if="numCard === 3">
                <div class="card-stickers py-1">
                <ButtonHab :svg="svgphp" textBtn="Php" bgColor="#607bbe" color="#fff" />
                <ButtonHab :svg="sass" textBtn="Sass" bgColor="#C33EE6" color="#fff" />
                <ButtonHab :svg="svgfigma" textBtn="Figma" bgColor="#1e1e1e" color="#fff" />
                <ButtonHab :svg="svgIllustrator" textBtn="Illustrator" bgColor="#fe9b00" color="#330000" />
                <ButtonHab :svg="svgCss" textBtn="CSS" bgColor="#A9BAC7" color="#1d80c1" />
                <ButtonHab :svg="svgHtml" textBtn="HTML" bgColor="#D99B66" color="#fc490b" />
                    </div>
                </template>
            <div class="d-flex justify-center">
                <a target="_blank" :href="link" class="a-nav w-100 d-flex align-center justify-center" style="gap: 5px; font-weight: bold;">
                    <template v-if="iconGithub === 1">
                        <svg xmlns="http://www.w3.org/2000/svg" height="20" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                        </svg> 
                    </template>
                    
                    {{textBtn}}
                </a>
            </div>
        </div>
    </div>
</template>

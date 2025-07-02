<script setup lang="ts">
import ButtonHab from "../buttons/ButtonHab.vue";
import svgWp from "../../imgs/svg/wordpress-logo_59483.svg";
import svgElm from "../../imgs/svg/elementor_5968697.svg";
import svgfigma from "../../imgs/svg/figma.svg";
import svgIllustrator from '../../imgs/svg/illustrator_5968472.svg';
import svgCss from '../../imgs/svg/css-3_732190.svg';
import svgHtml from '../../imgs/svg/html-5_174854.svg';
import svgMailchimp from '../../imgs/svg/mailchimp_5968879.svg';

defineProps({
  title: String,
  img: String,
  desc: String,
  numCard: Number
})


</script>

<template>
    <div class="d-flex justify-center pt-2" style="height: 65vh;">
        <div class="d-flex w-90">
            <div class="card-exp-img p-0 text-center">
            <div style="width: 100%; height: 100%; border-radius: 1rem 0rem 0rem 1rem; overflow: hidden;"><img :src="img" alt="" style="width: 100%; height: 100%; object-fit: cover; border-radius: 1rem 0rem 0rem 1rem;">
            </div>
        </div>
        <div class="card-exp px-2 py-3 w-100">
            <h3 class="w-100">{{title}}</h3>
            <p class="text py-1">{{desc}}</p>
            <template v-if="numCard === 1">
              <div class="card-stickers">
                <ButtonHab :svg="svgWp" textBtn="Wordpress" bgColor="#87A2E6" color="#3858e9" />
                <ButtonHab :svg="svgElm" textBtn="Elementor" bgColor="#C33EE6" color="#660044" />
                <ButtonHab :svg="svgfigma" textBtn="Figma" bgColor="#1e1e1e" color="#fff" />
                <ButtonHab :svg="svgIllustrator" textBtn="Illustrator" bgColor="#fe9b00" color="#330000" />
                <ButtonHab :svg="svgCss" textBtn="CSS" bgColor="#A9BAC7" color="#1d80c1" />
                <ButtonHab :svg="svgHtml" textBtn="HTML" bgColor="#D99B66" color="#fc490b" />
                </div>
            </template>
            <template v-if="numCard === 2">
              <div class="card-stickers">
                <ButtonHab :svg="svgWp" textBtn="Wordpress" bgColor="#87A2E6" color="#3858e9" />
                <ButtonHab :svg="svgIllustrator" textBtn="Illustrator" bgColor="#fe9b00" color="#330000" />
                <ButtonHab :svg="svgCss" textBtn="CSS" bgColor="#A9BAC7" color="#1d80c1" />
                <ButtonHab :svg="svgHtml" textBtn="HTML" bgColor="#D99B66" color="#fc490b" />
                <ButtonHab :svg="svgMailchimp" textBtn="Mailchimp" bgColor="#fee101" color="#000" />
                </div>
            </template>
        </div>
        </div>
        
    </div>
</template>

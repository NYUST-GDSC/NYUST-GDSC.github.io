<template>
  <div class="container-fluid" id="image-carousel-container">
    <div class="row ">
      <div class="col-md-12 align-items-center justify-content-center">
        <div class="fs-1" style="text-align: center">{{$t("index.photo.title")}}</div>
      </div>
    </div>

    <Carousel :itemsToShow="3.95" :wrapAround="true" :transition="500" :autoplay="1000" :breakpoints="breakpoints"  v-bind="settings">
      <Slide v-for="slide in images" :key="slide">
        <div class="carousel__item" >
          <img :src="slide.url" class="img-thumbnail" :alt="slide.text">
          <div class="img-caption">{{slide.text}}</div>
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

import devFestTaiChung from '/Index/ImageCarousel/NYUST-DevFest-Taichung.jpg'
import devFestChangHua from '/Index/ImageCarousel/NYUST-DevFest-ChangHua.jpg'
import coscup from '/Index/ImageCarousel/NYUST-COSCUP.jpg'
import chatBot1 from '/Index/ImageCarousel/NYUST-ChatBot.jpg'
import chatBot2 from '/Index/ImageCarousel/NYUST-ChatBot2.jpg'
import final from '/Index/ImageCarousel/NYUST-Final.jpg'
import begin from '/Index/ImageCarousel/NYUST-Begin.jpg'
export default defineComponent({
  name: 'ImageCarousel',
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data(){
    return{
      images:[
        {
          text:"DevFest 台中",
          url:devFestTaiChung,
        },
        {
          text:"DevFest 彰化",
          url:devFestChangHua,
        },
        {
          text:"COSCUP 開源人年會",
          url:coscup
        },
        {
          text:"聊天機器人小聚 - 1",
          url:chatBot1
        },
        {
          text:"聊天機器人小聚 - 2",
          url:chatBot2
        },
        {
          text:"雲林科技大學-期末社員大會",
          url:final,
        },
        {
          text:"雲林科技大學-期初社員大會",
          url:begin
        },
      ],
      settings: {
        itemsToShow: 1,
        snapAlign: 'center',
      },
      breakpoints: {
        700: {
          itemsToShow: 2,
          snapAlign: 'center',
        },
        1024: {
          itemsToShow: 5,
          snapAlign: 'start',
        },
      },
    }
  },

})
</script>

<style scoped>
#image-carousel-container{
  background: url("/logo-chinese-background.png");
  background-size: cover;
  padding: 10% 5%;
  background-position: center;
}
.carousel__item{
  position: relative;
}
.img-caption{
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 2%;
  text-align: center;
  font-size: 1rem;
}
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}

</style>
<template>
  <MainBanner></MainBanner>
<!--  <Intro></Intro>-->
  <AboutUs></AboutUs>
  <RecentEvents></RecentEvents>
  <ImageCarousel></ImageCarousel>
</template>

<script>
import MainBanner from "../components/index/MainBanner.vue";
import Intro from "../components/index/Intro.vue";
import AboutUs from "../components/index/AboutUs.vue";
import RecentEvents from "../components/index/RecentEvents.vue";
import ImageCarousel from "../components/index/ImageCarousel.vue";
export default {
  name: "IndexView",
  components: {MainBanner,Intro,AboutUs,RecentEvents,ImageCarousel}
}
</script>

<style scoped>

</style>
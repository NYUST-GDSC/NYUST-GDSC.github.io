<template>
  <MainBanner></MainBanner>
  <Intro></Intro>
</template>

<script>
import MainBanner from "../components/index/MainBanner.vue";
import Intro from "../components/index/Intro.vue";
export default {
  name: "IndexView",
  components: {MainBanner,Intro}
}
</script>

<style scoped>

</style>
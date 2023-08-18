<template>
  <div class="container" id="intro-container">
    <h1 style="font-size: 2.5rem; text-align: center" id="intro-title">{{ $t('index.what') }}</h1>
    <div class="row align-items-center justify-content-center">
      <div class="col-md-6 text-center" style="align-items: center;">
        <iframe data-aos="flip-down" width="560" height="315" src="https://www.youtube.com/embed/UGE13GR9_CU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div class="col-md-6 text-center" data-aos="flip-left">
        <h1 style="font-size: 1rem;">{{ $t('index.intro') }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Intro"
}
</script>

<style scoped>
#intro-container{
  padding: 0px 0px 10% 0px;
}
#intro-title{
  padding: 0px 0px 5% 0px;
}
</style>
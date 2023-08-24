<template>
  <div class="container-fluid" id="about-us-container">
    <div class="row align-items-center justify-content-center">
      <h1 style="text-align: center">{{ $t('index.about.title') }}</h1>
    </div>
    <div class="row align-items-center justify-content-center">
      <div class="col-md-6">
        <div id="about-us-img-container">
          <img src="/about.jpeg" class="img-thumbnail" alt="國立雲林科技大學" data-aos="flip-down">
        </div>
      </div>
      <div class="col-md-6">
        <div id="about-us-text-container" data-aos="fade-in" data-aos-duration="2s">
          {{ $t('index.about.text') }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs"
}
</script>

<style scoped>

#about-us-container{
  background: url("/logo-chinese-background.png");
  background-size: cover;
  padding-top: 5%;
  background-position: center;

}
#about-us-img-container{
  padding: 5%;
}
#about-us-text-container{
  font-size: 2.0rem;
}
</style>
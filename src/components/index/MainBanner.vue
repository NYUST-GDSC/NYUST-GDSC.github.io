<template>
  <div class="container-fluid" id="banner-container">
    <div class="row align-items-center justify-content-center main-banner">
      <div class="col-lg-6 main-banner-col">
        <div class="banner-text-box" data-aos="flip-right">
            <h1 style="font-size: 2.5rem;">{{ $t('index.banner.school') }}</h1>
            <h1 style="font-size: 2.0rem;">{{ $t('index.banner.gdsc') }}</h1>
            <h1 style="font-size: 2.0rem;">{{ $t('index.banner.slogan') }}</h1>
            <h1 style="font-size: 1.5rem;">{{ $t('index.banner.type') }}</h1>
            <h1 style="font-size: 1.5rem;">Code for fun</h1>
        </div>
      </div>
      <div class="col-lg-6 main-banner-col">
        <div class="banner-img-box" data-aos="flip-down">
          <img src="/LOGO.png" class="img-fluid rounded mx-auto d-block" alt="國立雲林科技大學" >
            <button type="button" class="btn btn-primary" id="banner-button" to="/" >
              {{ $t('index.banner.school') }}
            </button>
        </div>
      </div>
    </div>
      <div class="row align-items-center justify-content-center">
        <div class="col-sm-12 downicon" style="align-items: center; text-align: center; height: 30vh;">
          <a id="button-to-about" v-on:click="scroll"><img :src="'/downicon.ico'" style="height: 10vh" alt /></a>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "MainBanner",
  methods:{
    scroll(){
      const viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
      window.scrollBy(0, viewportHeight);
    },
  }
}
</script>

<style scoped>
.main-banner{
  padding: 0px 10%;
}
#banner-container{
  padding-top: 8%;
  background: url("/index.png");
}
.banner-text-box{
  cursor: pointer;
  animation: text-jump 2s;
  animation-iteration-count: infinite;
  color: #ffffff;
  background-color: #bfbfbf;
  border-radius: 10%;
  padding: 10%;
}
.banner-img-box{
  position: relative;
  background-color: white;
  border-radius: 5%;
}
#banner-button{
  position: absolute;
  color:white;
  background-color: #4285F4;
  border-radius: 25px;
  border: solid  #4285F4 1px;
  padding: 2% ;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
.main-banner-col{
  padding: 3vw;
}

.downicon {
  cursor: pointer;
  animation: jump 2s;
  animation-iteration-count: infinite;
}
@keyframes jump {
  0% {
    transform: translate(0%, 0%);
  }

  50% {
    transform: translate(0%, 30%);
  }

  100% {
    transform: translate(0%, 0%);
  }
}
@keyframes text-jump {
  0% {
    transform: translate(0%, 0%);
  }

  50% {
    transform: translate(0%, 10%);
  }

  100% {
    transform: translate(0%, 0%);
  }
}
</style>
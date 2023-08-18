<template>
  <div class="container" id="banner-container">
    <div class="row align-items-center justify-content-center main-banner">
      <div class="col-md-9" data-aos="flip-down">
        <h1 style="font-size: 2.5rem;">{{ $t('index.school') }}</h1>
        <h1 style="font-size: 2.5rem;">{{ $t('index.gdsc') }}</h1>
        <h1 style="font-size: 2.5rem;">{{ $t('index.slogan') }}</h1>
        <h1 style="font-size: 1.5rem;">Code for fun</h1>
      </div>
      <div class="col-md-3 text-center" style="align-items: center;"  data-aos="flip-left">
        <img class="card-img-top" src="/main_banner.gif"
             alt="Card image cap" style="max-width: 50vw;">
      </div>
    </div>
    <div class="row align-items-center justify-content-center">
      <div class="col-sm-12 downicon" style="align-items: center; text-align: center; height: 30vh;">
        <a href="#intro-container"><img :src="'/downicon.ico'" style="height: 10vh" alt /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainBanner",
}
</script>

<style scoped>
.main-banner{
  padding: 0px 10%;
}
#banner-container{
  padding: 10% 0px;
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
</style>
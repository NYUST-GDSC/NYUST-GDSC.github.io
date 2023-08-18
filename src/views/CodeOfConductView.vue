<template>
  <div class="container-fluid" id="coc-container">
    <div class="card" id="coc-card">
      <div class="card-body" >
        <h5 class="card-title">{{$t("coc.title")}}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">{{ $t("coc.subtitle") }}</h6>
        <p class="card-text">{{$t("coc.description")}} Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CodeOfConductView"
}
</script>

<style scoped>
#coc-container{
  background: url("/about.jpeg");
  background-repeat: repeat;
  background-size: contain;
  padding: 5% 15%;
}
</style>
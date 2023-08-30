<template>
  <div class="container-fluid" id="coc-container">
    <div class="card" id="coc-card">
      <div class="card-body" >
        <h5 class="card-title">{{$t("coc.title")}}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">{{ $t("coc.subtitle") }}</h6>
        <br>
        <p class="card-text">{{$t("coc.description")}}</p>
        <br>
        <p class="card-text"> <strong>{{$t("coc.politeTitle")}}</strong> {{$t("coc.politeDescription")}}</p>
        <p class="card-text"> <strong>{{$t("coc.joinTitle")}}</strong> {{$t("coc.joinDescription")}}</p>
        <p class="card-text"> <strong>{{$t("coc.respectTitle")}}</strong> {{$t("coc.respectDescription")}}</p>
        <p class="card-text"> <strong>{{$t("coc.allowTitle")}}</strong> {{$t("coc.allowDescription")}}</p>
        <p class="card-text"> <strong>{{$t("coc.corporateTitle")}}</strong> {{$t("coc.corporateDescription")}}</p>
        <p class="card-text"> <strong>{{$t("coc.graceTitle")}}</strong> {{$t("coc.graceDescription")}}</p>

        <a href="#" class="card-link">{{$t("coc.linkName")}}</a>
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
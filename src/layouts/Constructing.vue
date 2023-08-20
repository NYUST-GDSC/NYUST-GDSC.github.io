<template>
  <section class="section section-shaped section-lg" style="height: fit-content; align-items: center;" id="notfound-container">
    <div class="page-header">
      <div class="container shape-container d-flex align-items-center py-lg" style="padding: 15px 0px !important; display: flex;
      justify-content: center;
      align-items: center;">
        <div class='col-lg-12'>
          <div class="row align-items-center justify-content-center">
            <div class="col-lg-6 text-center" style="align-items: center;">
              <img class="card-img-top" src="/dinosaur.gif"
                   alt="Card image cap" style="max-width: 50vw;">
            </div>
            <div class="col-lg-6 text-center">
              <h1 style="font-size: 5rem; color: #4285F4">{{$t("constructing.title")}}</h1>
              <h1 style="font-size: 2.5rem; color: #4285F4">{{$t("constructing.description")}}</h1>
              <div class="btn-wrapper mt-4">
                <a href="./" target="" class="btn btn-outline-primary btn-round">
                  <span class="btn-inner--text" style="font-size: 1.33333333em">{{$t("notfound.button")}}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  name: 'Constructing',
}
</script>

<style scoped>
@import 'animate.css/animate.min.css';
#notfound-container{
  padding: 10vh 0;
}
</style>

<template>
  <div class="row align-items-center justify-content-center">
    <div class="col-sm-12" style="text-align: center">
      <h1>{{ $t("events.subtitle") }}</h1>
    </div>
  </div>
  <div class="row align-items-center justify-content-center" >
      <div class="col-6 col-sm-3 col-xs-3 align-items-center" v-for="event in jsonProps" key="event">
        <div class="past-event-container">
          <img :src=event.picture.url class="img-thumbnail event-item-img" alt="" v-if="event.picture.url != undefined">
          <img :src=defaultImage class="img-thumbnail event-item-img" alt="" v-else>
          <p class="mt-2 text-center">{{ event.title }}</p>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  name: "PastEvents",
  props: {
    jsonProps: {
      type: Object,
      required: false
    },
  },
  data(){
    return{
      defaultImage:"https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/event_banners/gdev-eccosystems-bevy-chapters-thumbnail_vh82sQy.png"
    }
  },
}
</script>

<style scoped>
.event-item-container{
  border-radius: 25px;
  border: black solid 1pt;
  background-color: #d7d7d7;
}
.event-item-img{
  border-radius: 100%;
  box-sizing: border-box;
  border: #4285F4 solid 10px;
  overflow: hidden;
  object-fit: cover;
  aspect-ratio: 1/1;
}
.past-event-container{
  padding: 5%;
}
</style>
<template>
  <div class="row align-items-center justify-content-center">
    <div class="col-sm-12" style="text-align: center">
      <h1>{{ $t("events.subtitle") }}</h1>
    </div>
  </div>
  <div class="row event-item-container align-items-center justify-content-center" v-for="event in jsonProps" key="event">
    <div class="col-md-3">
      <img :src=event.picture.url class="img-thumbnail event-item-img" alt="" v-if="event.picture.url != undefined">
      <img :src=defaultImage class="img-thumbnail event-item-img" alt="" v-else>
    </div>
    <div class="col-md-9">
      <div class="badge bg-primary text-wrap" style="width: 6rem;">
        {{ event.venue_name }}
      </div>
      <div class="badge bg-warning text-wrap" style="width: 6rem;">
        {{ new Intl.DateTimeFormat('zh-TW').format(new Date(event.start_date)) }} ~ {{new Intl.DateTimeFormat('zh-TW').format(new Date(event.end_date))}}
      </div>
      <div class="fs-1">{{event.title}}</div>
      <br>
      <div class="fs-4"> {{event.description_short}}</div>
      <button type="button" class="btn btn-danger" >
        <a :href="event.url" target="_blank" style="text-decoration: none;color: white"> 馬上報名!</a>
      </button>
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
  background-color: #d7d7d7;
  margin: 5%;
  padding: 5%;
}
.event-item-img{
  border-radius: 100%;
  border: #4285F4 solid 1rem;
  overflow: hidden;
  object-fit: cover;
  aspect-ratio: 1/1;
}
</style>
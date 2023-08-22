<template>
  <div class="container-fluid " id="recent-events-container">
    <div class="row align-items-center justify-content-center">
      <p class="fs-1" style="text-align: center">{{ $t('index.recent.title') }}</p>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-12 card-group">
        <div class="card" v-for="event in events" data-aos="fade-down">
          <img :src="event.picture.url" class="card-img-top img-thumbnail img-fluid" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{event.title}}</h5>
            <p class="card-text">{{event.description_short}}</p>
            <hr>
            <a :href="event.url" target="_blank" class="btn btn-primary">馬上報名</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecentEvents",
  data(){
    return{
      events:[]
    }
  },
  beforeMount() {
    const NYUST_GDSC_ID = 3153;
    const url = `https://gdsc.community.dev/api/chapter/${NYUST_GDSC_ID}/event?fields=id,title,status,url,description_short,picture`;
    console.log(url)
    this.axios.get(url)
        .then((res)=>{
          this.events = res.data["results"].slice(0,3)
        })
        .catch((err)=>{
          console.log(err);
        })
  }
}
</script>

<style scoped>
#recent-events-container{
  background: url("/recent-events.jpg");
  background-size: cover;
  padding-top: 5%;
  background-position: center;
}
.card{
  margin: 5%;
}
.card img {
  object-fit: cover;
  aspect-ratio: 1/1;
}
</style>
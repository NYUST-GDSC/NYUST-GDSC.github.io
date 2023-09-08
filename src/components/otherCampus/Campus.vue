<template>
  <div class="container-fluid" id="campus-container">
    <div class="row justify-content-center align-items-center" id="count-container">
        <h1 class="count-text">{{$t("campus.prefixTitle")}} <span class="count-number-text"> {{campusCount}} </span> {{$t("campus.suffixTitle")}}</h1>
    </div>

    <MapLocate></MapLocate>

    <div class="row button-row">
      <div class="col-md-12" style="text-align: center">
          <button type="button" class="city-button" v-for="city in cityList" key="city" v-on:click="getChapter(city)">
              {{city}}
          </button>
      </div>
    </div>

    <div class="row chapter-row">
        <div class="col-6 col-xs-6 col-sm-3"  v-for="chapter in selectedChapter" key="chapter" data-aos-easing="2s" data-aos="fade-in">
          <div class="card">
            <img :src="chapter.logo" v-if='chapter.logo !== ""' class="img-thumbnail img-fluid chapter-img" alt="">
            <img :src="nullPhoto" v-if='chapter.logo === ""' class="img-thumbnail img-fluid chapter-img" alt="">
            <div class="card-body">
              <p class="card-text">{{chapter.title}}</p>
              <button type="button" class="btn btn-outline-success">
                <a :href="chapter.url" target="_blank" >
                  找到我們~
                </a>
              </button>
            </div>
          </div>
      </div>
    </div>
  </div>


</template>

<script>
import chapterNameMap from "../../utils/chapterName.js";
import schoolCountyMapping from "../../utils/shcoolCountyMapping.js";
import "leaflet/dist/leaflet.css";
import MapLocate from "./MapLocate.vue";

export default {
  name: "Campus",
  components: {
    MapLocate,
  },
  data(){
    return{
      nullPhoto:"https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/event_banners/gdev-eccosystems-bevy-chapters-thumbnail_x4z1EBy.png",
      campusCount : null,
      cityList:["臺北市","新北市","桃園市","新竹市","臺中市","彰化縣","南投縣","雲林縣","嘉義縣","臺南市","高雄市","宜蘭縣","花蓮縣"],
      results: [],
      selectedChapter:null,
    }
  },
  methods:{
    getChapter(city){
      let selected;
      selected=this.results.filter(result => result.city === city);
      this.selectedChapter = selected[0]["results"];
    },
  },
  async beforeMount() {
    let url = "https://gdsc.community.dev/api/search/chapter?q=(TW)";
    this.axios.get(url)
        .then((res) => {
          let categorized = [];
          this.campusCount = res.data["count"];
          res.data["results"].forEach((result) => {
            let title = result.title;
            result.title = chapterNameMap[title];
            result.city = schoolCountyMapping[result.title];
            let existingCategory = categorized.find(item => item.city === result.city);
            if (!this.cityList.includes(result.city)) {
              this.cityList.push(result.city)
            }
            if (!existingCategory) {
              existingCategory = {city: result.city, results: []};
              categorized.push(existingCategory);
            }
            existingCategory.results.push(result);
          });
          this.results = categorized;
        })
        .catch((err) => {
          console.log(err)
        })
  },
}
</script>

<style scoped>
#campus-container{
  background-image:  url("/index.png");
  background-position: center;
  background-size: cover;
}
#count-container{
  padding: 10vh;
  animation: text-jump 5s;
  animation-iteration-count: infinite;;
}
.count-text{
  color: black;
  /*background-color: #e0e0e0;*/
  text-align: center;
  width: auto;
  border-radius: 25px ;
}
span.count-number-text{
  color: red;
  font-weight: bolder;
}
.button-row{
  margin: 5% 0%;
}
button.city-button{
  border: 0px;
  padding: 1%;
  background-color: #baf1ba;
  margin: 5px;
  border-radius: 25%;
}
.chapter-row{
  padding: 0% 10%;
}
.chapter-img{
  border-radius: 50%;
}
.btn:hover{
  color: white;
}
button a {
  text-decoration: none ;
  color: green;
}
button a:hover {
  color: white;
}

@keyframes text-jump {
  0% {
    transform: translateX(0%);
  }
  50% {
    transform: translateX(5%);
  }
  100% {
    transform: translateX(0%);
  }
}
</style>
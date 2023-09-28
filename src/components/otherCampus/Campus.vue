<template>
  <div class="container-fluid" id="campus-container">
    <div class="row campus-header">
      <div class="d-inline col-md-2"></div>
      <h2 class="col-md-8 d-flex align-items-center justify-content-center">
        全台共有 &nbsp;
        <span class="count-number-text">
          {{ campusCount }}
        </span>
        &nbsp; 所學校加入 GDSC 計畫!
      </h2>
      <div class="city-select col-md-2">
        <select
          class="form-select form-select-xl"
          @change="(e) => getChapterByCity(e.target.value)"
        >
          <option selected>選擇縣市</option>
          <option v-for="city in cityList" :key="city" :value="city">
            {{ city }}
          </option>
        </select>
      </div>
    </div>
    <div class="position-relative">
      <MapLocate></MapLocate>
      <div class="chapter-section">
        <transition-group name="fade">
          <div
            class="card mb-3 d-inline-flex"
            v-for="chapter in selectedChapter"
            :key="chapter"
          >
            <img
              :src="chapter.logo === '' ? nullPhoto : chapter.logo"
              class="img-thumbnail img-fluid chapter-img"
              alt=""
            />
            <div class="card-body">
              <p class="card-text">{{ chapter.title }}</p>
              <a
                class="btn btn-outline-success"
                :href="chapter.url"
                target="_blank"
              >
                找到我們~
              </a>
            </div>
          </div>
        </transition-group>
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
  data() {
    return {
      nullPhoto: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/event_banners/gdev-eccosystems-bevy-chapters-thumbnail_x4z1EBy.png",
      campusCount: null,
      cityList: [
        "臺北市",
        "新北市",
        "桃園市",
        "新竹市",
        "臺中市",
        "彰化縣",
        "南投縣",
        "雲林縣",
        "嘉義縣",
        "臺南市",
        "高雄市",
        "宜蘭縣",
        "花蓮縣",
      ],
      results: [],
      selectedChapter: null,
    };
  },
  methods: {
    getChapterByCity(city) {
      const selected = this.results.filter((result) => result.city === city);
      this.selectedChapter = selected[0]["results"];
    },
  },
  async beforeMount() {
    let url = "https://gdsc.community.dev/api/search/chapter?q=(TW)";
    this.axios
      .get(url)
      .then((res) => {
        let categorized = [];
        this.campusCount = res.data["count"];
        res.data["results"].forEach((result) => {
          let title = result.title;
          result.title = chapterNameMap[title];
          result.city = schoolCountyMapping[result.title];
          let existingCategory = categorized.find(
            (item) => item.city === result.city
          );
          if (!this.cityList.includes(result.city)) {
            this.cityList.push(result.city);
          }
          if (!existingCategory) {
            existingCategory = { city: result.city, results: [] };
            categorized.push(existingCategory);
          }
          existingCategory.results.push(result);
        });
        this.results = categorized;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
h2 {
  font-size: 1.6rem;
  margin: 0;
  color: white;
}
.count-number-text {
  color: #ea4335;
}
.campus-header {
  background-color: #4285f4;
  padding: 0.6rem 0;
}
.city-select {
  max-width: 12rem;
  margin-left: auto;
}

#count-container{
  padding: 10vh;
  animation: text-jump 5s;
  animation-iteration-count: infinite;;
}

.chapter-section {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 80vh;
  position: absolute;
  right: 0;
  top: 10px;
  z-index: 999;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.chapter-section::-webkit-scrollbar {
  display: none;
}
.chapter-section .card {
  width: 15rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-in;
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

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(15rem);
}

.chapter-img {
  border-radius: 50%;
}

.btn {
  text-decoration: none;
  color: green;
}
.btn:hover {
  color: white;
}

.form-select {
  background-color: transparent;
  color: #fff;
  --bs-form-select-bg-img: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
}

@media (max-width: 768px) {
  h2 {
    font-size: 1.3rem;
    margin-bottom: 0.8rem;
  }

  .city-select {
    max-width: 390px;
  }

  .chapter-section {
    position: static;
    width: 100%;
    height: auto;
  }

  .chapter-section .card {
    width: 90%;
    margin: 10px auto 0;
  }

  .chapter-section .card img {
    margin: 0 16px;
  }
}
</style>
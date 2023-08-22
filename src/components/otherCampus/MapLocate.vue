<template>
  <div class="container" d="map-container">
    <div id="map">
    </div>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import chapterNameMap from "../../utils/chapterName.js";
import schoolCountyMapping from "../../utils/shcoolCountyMapping.js";


export default {
  name: 'MapLocate',
  data() {
    return {
      map: null,
      polygonCheck: null,
      polygonArr: [],
      nullPhoto:"https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/event_banners/gdev-eccosystems-bevy-chapters-thumbnail_x4z1EBy.png",
    }
  },
  methods: {
    initMap() {
      this.map = L.map("map",{
        center: [23.696219261603776, 120.53404333883611],
        zoom: 7
      });


      // this.map.on('click', this.onMapClick)
      // this.map.on('keypress', this.onKeypress)

      let pointList = [];
      let url = "https://gdsc.community.dev/api/search/chapter?q=(TW)";
      this.axios.get(url)
          .then((res)=>{
            res.data["results"].forEach((result) => {
              let title = result.title;
              let newTitle = chapterNameMap[title];
              let city = schoolCountyMapping[newTitle];
              if (title != "National Chiao Tung University") {
                if (title == "National Sun Yat-Sen University") {
                  newTitle = "國立中山大學";
                  city = "高雄市";
                }
                result.title = newTitle;
                result.city = city;
                let geoloc = result["_geoloc"]
                let lat;
                let lng;
                if(geoloc || newTitle == "國立雲林科技大學"){

                  if (newTitle == "國立雲林科技大學"){
                    lat = "23.696219261603776";
                    lng = "120.53404333883611";
                  }else{
                    lat = result["_geoloc"]["lat"];
                    lng = result["_geoloc"]["lng"];
                  }
                  if(result.logo == ""){
                    result.logo = this.nullPhoto
                  }
                  pointList.push({
                    lat:lat,
                    lng:lng,
                    name:newTitle,
                    icon: L.icon({
                      iconUrl:  result.logo,
                      iconSize: [50, 50],
                    })
                  })
                }
              }
            })
            pointList.forEach(point => {
              const marker = L.marker([point.lat, point.lng],{
                icon:point.icon,
                title:point.title,
                alt:point.title,
              }).addTo(this.map);
              marker.bindPopup(point.name).openPopup();
            });
          })
          .catch((err)=>{console.log(err)})

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 20,
            attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
          }
      ).addTo(this.map);
    },

    refreshPolygon() {
      // Remove a instância anterior (caso existente) e cria uma nova geometria para um polígono dentro do
      // mapa referente a área selecionada pelo usuário
      this.polygonCheck != null ? this.map.removeLayer(this.polygonCheck) : '',
          this.polygonCheck = L.polygon(this.polygonArr).addTo(this.map),
          this.map.addLayer(this.polygonCheck)
    },
    onMapClick(e) {
      // Cria um novo ponto nas coordenadas do clique e o integra ao polígono
      this.polygonArr.push([e.latlng.lat, e.latlng.lng]),
          this.refreshPolygon()
    },
    onKeypress(e) {
      // Isola a tecla pressionada e transforma a geometria de nosso polígono
      e.originalEvent.key == 'z' ? this.polygonArr.pop() :
          e.originalEvent.key == 'r' ? this.polygonArr = [] : '',
          this.refreshPolygon()
    },

  },
  mounted() {
    this.initMap();
  },
}
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#map {
  width: 100%;
  height: 50vh;
  /*aspect-ratio: 1 / 1;*/
  border-radius: 12px;
}
</style>
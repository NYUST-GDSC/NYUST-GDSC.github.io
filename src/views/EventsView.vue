<template>
  <div class="container-fluid" id="events-container">
    <FutureEvents :jsonProps="future_events"></FutureEvents>
    <!--Past Event-->
    <PastEvents :jsonProps="past_events.slice(0,8)"></PastEvents>
    <CalendarEvents :jsonProps="all_events"></CalendarEvents>
  </div>
</template>

<script>
import FutureEvents from "../components/events/FutureEvents.vue";
import PastEvents from "../components/events/PastEvents.vue";
import CalendarEvents from "../components/events/CalendarEvents.vue";
export default {
  name: "EventsView",
  components: {CalendarEvents, FutureEvents,PastEvents},

  data(){
    return{
      future_events:[],
      past_events:[],
      all_events:[],
    }
  },
  methods:{
    convertDate(date){
      date = new Date(date)
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      return `${year}-${month}-${day} ${hours}:${minutes}`
    },
    convertEventToCalendar(event){
      event["time"] = {
        start:this.convertDate(event["start_date"]),
        end:this.convertDate(event["end_date"])
      }
      event["description"] = event["description_short"];
      event["isEditable"] = true;
      event["location"] = event["venue_name"];
      return event
    },
  },
  beforeMount() {
    const NYUST_GDSC_ID = 3153;
    const now = new Date().toLocaleString("zh-TW");
    const url = `https://gdsc.community.dev/api/chapter/${NYUST_GDSC_ID}/event?fields=id,title,status,url,description_short,picture,venue_name,start_date,end_date`;
    console.log(url)
    this.axios.get(url)
        .then((res)=>{
          res.data["results"].forEach(event => {
            const startDate = new Date(event.start_date).toLocaleString("zh-TW");
            if (startDate < now) {
              this.past_events.push(event);
            } else {
              this.future_events.push(event);
            }
            // for calendar
            event = this.convertEventToCalendar(event);
            this.all_events.push(event)
          });
        })
        .catch((err)=>{
          console.log(err);
        })
  }
}
</script>

<style scoped>
#events-container {
  min-height: 50vh;
  background-size: cover;
  padding-top: 5%;
  padding-left: 10%;
  padding-right: 10%;
  background: url("/logo-chinese-background.png") white 0% 0% / 30vh 30vh repeat;
}
.event-item-container{
  border-radius: 25px;
  background-color: #aaa;
  margin: 5%;
  padding: 5%;
}
.event-item-img{
  border-radius: 100%;
  border: #4285F4 solid 1rem;
}
</style>
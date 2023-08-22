<template>
  <div class="row align-items-center justify-content-center">
    <div class="col-sm-12" style="text-align: center">
      <h1>{{ $t("events.calendarTitle") }}</h1>
    </div>
  </div>
  <div class="row align-items-center justify-content-center" id="calendar-container">
    <Qalendar
        :selected-date="new Date()"
        :events="jsonProps"
        :config="config"
    />
  </div>
</template>

<script>
import "qalendar/dist/style.css";
import { Qalendar } from "qalendar";
export default {
  name: "CalendarEvents",
  props: {
    jsonProps: {
      type: Object,
      required: false
    },
  },
  components:{
    Qalendar,
  },
  data(){
    return{
      config:{
        locale: "zh-TW",
        defaultMode: "month",
        disableModes:["day"],
        style: {
          colorSchemes: {
            meetings: {
              color: "#fff",
              backgroundColor: "#131313",
            },
            sports: {
              color: "#fff",
              backgroundColor: "#ff4081",
            },
          },
        },
        isSilent: false,
        showCurrentTime: true,
        isSmall: false,
        month:{
          showTrailingAndLeadingDates: true,
          showEventsOnMobileView: true,
        }
      },

    }
  }

}
</script>

<style scoped>
#calendar-container{
  padding: 5%;
}
</style>
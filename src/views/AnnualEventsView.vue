<template>
  <div class="container-fluid" id="annual-container">
    <div class="row align-items-center justify-content-center">
      <div class="col-sm-12" style="text-align: center">
        <h1>{{ $t("annual.title") }}</h1>
      </div>
    </div>
    <div class="row annual-item-container" v-for="event in events" key="event">
      <div class="col-md-3 d-flex justify-content-center align-items-center">
        <img :src=event.picture class="img-thumbnail event-item-img" alt="">
      </div>
      <div class="col-md-9">
        <div class="badge bg-primary text-wrap" style="width: 6rem;">
          {{ event.date}}
        </div>
        <div class="fs-1">活動名稱: {{event.title}}</div>
        <br>
        <div class="fs-4"> {{event.description}}</div>
        <button type="button" class="btn btn-danger" >
          <a :href="event.event_url" target="_blank" style="text-decoration: none;color: white"> 了解更多!</a>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import solutionChallengePhoto from "/solution challenge.gif";
import internationalWomenDayPhoto from "/IWD.png";
import googleIO from "/io-extended-header.png";
import summerOfCode from '/GSoC-Horizontal.png';
import leadsSummit from '/google_lead.gif';
import devfest from '/devfest.png'


export default {
  name: "AnnualEventsView",
  data(){
    return{
      events:[
        {
          picture:solutionChallengePhoto,
          title:"Solution Challenge",
          date:"1 ~ 2月",
          description:"Solution Challenge 是由 Google 面向全球大學生舉辦的年度比賽，旨在鼓勵學生利用 Google 的產品或平台，解決當地或全球社區面臨的問題，並為未來的職業發展提供實踐機會。比賽的主題涵蓋多個領域，例如教育、健康、環保、社會公益等，參賽者可根據自己的興趣和專業背景選擇相應的主題進行解決方案開發。比賽過程中，Google 提供了一系列的線上資源和技術支援，以幫助參賽者成功實現他們的解決方案。比賽分為初賽和決賽兩個階段，初賽中，參賽者需要提交一份概念書，經過評審後，獲選的隊伍將獲得 Google 的支援，繼續進行解決方案的開發。在決賽中，參賽者需要提交一份完整的解決方案和演示視頻，最終評審委員會將選出優勝隊伍。",
          event_url:"https://developers.google.com/community/gdsc-solution-challenge?hl=zh-tw"
        },
        {
          picture:internationalWomenDayPhoto,
          title:"International Women's Day",
          date:"3月",
          description:"國際婦女節 (IWD) 是 Women Techmakers 最大的年度活動，大使們在 3 月和 4 月期間在世界各地舉辦活動以慶祝這一時刻。 從大型峰會到小型私密聚會， IWD 也是我們支持我們的使命的一種方式，即建設一個所有女性都能在科技領域茁壯成長的世界。 GDG 和 GDSC 社區也可以參與 IWD 活動。",
          event_url:"https://developers.google.com/womentechmakers/initiatives/iwd"
        },
        {
          picture:googleIO,
          title:"Google I/O Extended",
          date:"5月",
          description:"Google I/O 將來自世界各地的開發人員聯繫在一起，進行深思熟慮的討論，與 Google 專家進行實踐學習，並搶先了解 Google 的最新開發人員產品。 I/O 的魔力並沒有在主賽事之後結束。 本地開發人員齊聚一堂參加 I/O Extended 活動，討論最新的新技術、總結內容、主持問答環節並會見其他技術愛好者。",
          event_url:"https://gdg.community.dev/ioextended/"
        },
        {
          picture:summerOfCode,
          title:"Summer Of Code",
          date:"8月",
          description:"Google Summer of Code 是一個全球性的在線計劃，專注於將新的貢獻者引入開源軟件開發。 GSoC 貢獻者在導師的指導下與開源組織合作進行為期 12 週以上的編程項目。",
          event_url:"https://summerofcode.withgoogle.com/"
        },
        {
          picture:leadsSummit,
          title:"GDSC Leads Summit",
          date:"8 ~ 9月",
          description:"GDSC Leads Summit 是 Google Developer Student Clubs（GDSC）每年舉辦的研討會，旨在為全球 GDSC 社群的學生領袖們提供一個交流和學習的平台。該研討會主要針對 GDSC 的社群管理、技術培訓、活動策劃、專案管理等方面進行探討和分享。參加研討會的 GDSC Leads 不僅能夠與來自世界各地的學生領袖交流，還能參加由 Google 工程師和產品經理提供的技術培訓和知識分享。",
          event_url:""
        },
        {
          picture:devfest,
          title:"Google DevFest",
          date:"10 ~ 12月",
          description:"DevFest 大會是地方性技術會議，由世界各地的 Google Developer Group (GDG) 所舉辦。每一場 DevFest 大會活動均由當地主辦人策劃，並會配合當地開發人員社群的需求與興趣。不論是透過實作式的學習體驗，還是由專家以當地語言提供演說，抑或只是單純結識其他當地開發人員，DevFest 大會的參加者都能一起學習如何使用 Google 的開發人員工具進行建構及創新。\n" +
              "瞭解詳情",
          event_url:"https://developers.google.com/community/devfest?hl=zh-tw"
        },
      ],
    }
  }
}
</script>

<style scoped>
#annual-container {
  min-height: 50vh;
  background-size: cover;
  padding-top: 5%;
  padding-left: 10%;
  padding-right: 10%;
  background: url("/logo-chinese-background.png") white 0% 0% / 30vh 30vh repeat;
}
.annual-item-container{
  border-radius: 25px;
  background-color: #d7d7d7;
  margin: 5%;
  padding: 5%;
}
</style>
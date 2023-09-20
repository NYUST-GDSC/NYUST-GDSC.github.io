<template>
  <footer class="footer">
    <div class="container">
      <div class="row row-grid align-items-center mb-5">
        <div class="col-lg-6">
          <h3 class="font-weight-light mb-2" style="color: #4285F4;"><br>{{ $t('footer.title') }}</h3>
          <p>{{ $t('footer.description') }}<a
              href="https://gdsc.community.dev/national-yunlin-university-of-science-and-technology/" target="_blank"
              style="color: #4285F4;">{{ $t('footer.shortName') }}</a>
            {{$t("footer.and")}}
            <a href="https://developers.google.com/community/gdsc?hl=zh-tw">
              {{$t("footer.program")}}
            </a>
          </p>
        </div>
        <div class="col-lg-6 text-lg-left btn-wrapper" id="social_media_list">
          <h3 style="color: #4285F4;">{{ $t('footer.contact') }}</h3>
          <button v-for="media in mediaList" :key="media" class="btn ">
            <a :href="media.link" style="text-decoration: none">
              <i :class="`mdi ${media.icon}`" ></i> {{media.name}}
            </a>
          </button>
        </div>
      </div>
      <div class="row align-items-center justify-content-md-between">
        <div class="col-md-6">
          <div class="copyright" style="margin-bottom: 2rem; border-bottom: 2rem">
            &copy;
            {{ new Date().getFullYear() }}
            <router-link to="/" style="color: #4285F4;">{{ $t('footer.shortName') }}</router-link>•
            <router-link to="/code_of_conduct/" style="color: #4285F4;">{{ $t('footer.coc') }}</router-link>
          </div>

        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data(){
    return{
      mediaList:[
        {
          "name":"Instagram",
          "link":"https://www.instagram.com/gdsc_nyust/",
          "icon":"mdi-instagram"
        },
        {
          "name":"Discord",
          "link":"https://discord.gg/2k7SbzeByJ",
          "icon":"mdi-discord"
        },
        {
          'name':"Bevy",
          "link":"https://gdsc.community.dev/national-yunlin-university-of-science-and-technology/",
          "icon":"mdi-search-web"
        },
        {
          'name':"GitHub",
          "link":"https://github.com/NYUST-GDSC",
          "icon":"mdi-github"
        },
        {
          'name':"Email",
          "link":"mailto://-gdsc_nyust@googlegroups.com",
          "icon":"mdi-email"
        },
        {
          'name':"Flickr",
          "link":"https://www.flickr.com/photos/199036014@N06/",
          "icon":"mdi-flickr"
        },
        {
          'name':"Linktree",
          "link":"https://linktr.ee/gdsc_nyust",
          "icon":"mdi-linktree"
        },
      ]

    }
  }
}
</script>

<style scoped>
.footer{
  background-color: #F4F5F7;
}
</style>
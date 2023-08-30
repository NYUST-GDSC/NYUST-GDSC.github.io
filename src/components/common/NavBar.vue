<template>
  <div class="logo navbarsection">
    <img :src="'/gdsc-nyust.png'" id="logo-size" alt />
    <router-link to="/" class="nav-link active btn navbarbtnred" aria-current="page">{{$t("nav.home")}}</router-link>
    <router-link to="/events" class="nav-link active btn navbarbtnblue" aria-current="page">{{$t("nav.events")}}</router-link>
    <router-link to="/annual" class="nav-link active btn navbarbtngreen" aria-current="page">{{$t("nav.annual")}}</router-link>
    <router-link to="/other-campus" class="nav-link active btn navbarbtnyellow" aria-current="page">{{$t("nav.other")}}</router-link>
    <select v-model="selected" @change="setLocale">
      <option v-for="option in options" :value="option.value" :key="option.value"> 
        {{ option.text }}
      </option>
    </select>
  </div>
<!--  <nav class="navbar bg-body-tertiary">-->
<!--    <div class="container-fluid">-->
<!--      <a class="navbar-brand" href="#">-->
<!--        <img src="../../assets/gdsc-nyust.png" alt="Logo" height="24" class="d-inline-block align-text-top">-->
<!--      </a>-->
<!--      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">-->
<!--        <span class="navbar-toggler-icon"></span>-->
<!--      </button>-->
<!--      <div class="collapse navbar-collapse" id="navbarNav">-->
<!--        <ul class="navbar-nav">-->
<!--          <li class="nav-item">-->
<!--            <router-link to="/" class="nav-link active" aria-current="page">Home</router-link>-->
<!--          </li>-->
<!--          <li class="nav-item">-->
<!--            <router-link to="/events" class="nav-link active" aria-current="page">Events</router-link>-->
<!--          </li>-->
<!--          <li class="nav-item">-->
<!--            <router-link to="/annual-events" class="nav-link active" aria-current="page">Annual Events</router-link>-->
<!--          </li>-->
<!--          <li class="nav-item">-->
<!--            <router-link to="/other-campus" class="nav-link active" aria-current="page">Other Campus</router-link>-->
<!--          </li>-->
<!--          <li class="nav-item">-->
<!--            <select v-model="selected" @change="setLocale">-->
<!--              <option v-for="option in options" v-bind:value="option.value"> {{ option.text }}</option>-->
<!--            </select>-->
<!--          </li>-->
<!--        </ul>-->
<!--      </div>-->
<!--    </div>-->
<!--  </nav>-->
</template>

<script>
import {ref} from 'vue'
import i18n from "../../plugins/i18n.js";
export default {
  name: "Nav",
  setup() {
    let lang = i18n.global.locale
    let selected = ref(lang)
    const options = ref([
      { text: 'English', value: 'en' },
      { text: '中文', value: 'zh' },
    ])

    const setLocale = (e) => {
      let newVal = e.target.value
      i18n.global.locale = newVal
    }

    return {
      setLocale, selected, options
    }
  }
}
</script>

<style scoped>
/* navbar */
.navbarsection {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  gap: 2.5%;
  background-color: transparent;
}

.navbarsection.scrolled {
  background-color: #333;
}

.navbar-item {
  cursor: pointer;
  color: #ffffff;
}

.logo {
  margin: 0 2.5% 0 2.5%;
  cursor: pointer;
}
#logo-size{
  max-width: 20vw;
}
.navbarbtnred {
  color: #ea4335;
  transition: 0.5s;
  letter-spacing: 4px;
  cursor: pointer;
}

.navbarbtnblue {
  color: #4285F4;
  transition: 0.5s;
  letter-spacing: 4px;
  cursor: pointer;
}
.navbarbtngreen {
  color: #77B55A;
  transition: 0.5s;
  letter-spacing: 4px;
  cursor: pointer;
}


.navbarbtnyellow {
  color: #FBBC04;
  transition: 0.5s;
  letter-spacing: 4px;
  cursor: pointer;
}

</style>
import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import './style.css'
import App from './App.vue'
import router from './router'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faEnvelope,
  faArrowUpRightFromSquare,
  faChevronRight,
  faBars,
  faXmark
} from '@fortawesome/free-solid-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'

// Add icons to library
library.add(faEnvelope, faArrowUpRightFromSquare, faChevronRight, faBars, faXmark, faDiscord)

const app = createApp(App)

app.use(router)
app.use(MotionPlugin)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')

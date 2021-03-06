import Vue from 'vue'
import {
  library,
  config
} from '@fortawesome/fontawesome-svg-core'
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'
import {
  faChevronRight,
  faPaperPlane,
  faEnvelope,
  faEnvelopeSquare
} from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faLinkedinIn,
  faFacebookSquare,
  faFacebookMessenger,
  faTwitterSquare
} from '@fortawesome/free-brands-svg-icons'
import {
  faWindowAlt,
  faCloud,
  faSparkles,
  faCommentSmile,
  faPrint,
  faArrowLeft
} from '@fortawesome/pro-regular-svg-icons'

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add([
  faChevronRight,
  faWindowAlt,
  faCloud,
  faSparkles,
  faCommentSmile,
  faGithub,
  faLinkedinIn,
  faPaperPlane,
  faFacebookSquare,
  faFacebookMessenger,
  faTwitterSquare,
  faEnvelope,
  faEnvelopeSquare,
  faPrint,
  faArrowLeft
])

// Register the component globally
Vue.component('fa', FontAwesomeIcon)

import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

Vue.directive('blur', {
  inserted: function (el) {
    el.onfocus = (ev) => ev.target.blur()
  }
})

export default new Vuetify({
  //  V directive('blur', {
  //       inserted: function (el) {
  //         el.onfocus = (ev) => ev.target.blur()
  //       }
  //     });
})

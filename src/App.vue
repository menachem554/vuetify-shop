<template>
  <v-app>
    <TopNav />
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-snackbar
      v-model="snackbar.show"
      :multi-line="true"
      :right="true"
      :top="true"
      :timeout="6000"
      :color="snackbar.variant"
    >
      {{ snackbar.message }}
      <v-btn
        dark
        text
        @click="updateSnackbar({show: false})"
      >
        Close
      </v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import TopNav from './components/TopNav.vue'

export default {
  name: 'app',
  components: {
    TopNav
  },
  computed: {
    ...mapState(['snackbar'])
  },
  methods: {
    ...mapMutations(['updateSnackbar'])
  }
}
</script>

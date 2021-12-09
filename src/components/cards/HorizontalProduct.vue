<template>
  <v-card
    outlined
    min-width="100%"
    class="mb-5 pa-4"
  >
    <div class="d-flex">
      <div>
        <v-img
          :src="product.image"
          width="120px"
          height="120px"
        />
      </div>

      <!-- <v-spacer></v-spacer> -->

      <div class="d-flex flex-column justify-center">
        <v-card-title class="pt-0">
          {{ product.bookName }}
        </v-card-title>

        <v-card-text>
          ${{ product.bookID }}
        </v-card-text>

        <v-card-text>
          ${{ product.category }}
        </v-card-text>

         <v-card-text>
          ${{ product.author }}
        </v-card-text>

        <v-btn
          v-if="btnAction === 'remove'"
          color="error"
          class="ml-4"
          outlined
          small
          @click="updateCart(i)"
        >
          <v-icon small>mdi-minus</v-icon>
          Remove from Cart
        </v-btn>
        <v-btn
          v-else
          color="success"
          small
          outlined
          @click="updateCart(i)"
        >
          <v-icon small>mdi-plus</v-icon>
          Add to Cart
        </v-btn>
      </div>
    </div>
  </v-card>
</template>

<script>
import VueTypes from 'vue-types'

export default {
  props: {
    product: VueTypes.shape({
      image: VueTypes.string.isRequired,
      bookID: VueTypes.string.isRequired,
      bookName: VueTypes.string.isRequired,
      category: VueTypes.string.isRequired,
      author: VueTypes.string.isRequired
    }),
    updateCart: VueTypes.func.isRequired,
    btnAction: VueTypes.string.isRequired,
    i: VueTypes.integer.isRequired
  }
}
</script>

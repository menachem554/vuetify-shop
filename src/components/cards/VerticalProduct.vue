<template>
  <v-card outlined>
    <v-icon class="pa-9">mdi-file-image</v-icon>

    <v-card-title class="pa-1 ">
      {{ product.bookName }}
    </v-card-title>

    <v-card-text class="pa-1">
    book id: {{ product.bookID }}
    </v-card-text>

     <v-card-text class="pa-1">
    category: {{ product.category }}
    </v-card-text>

      <v-card-text class="pa-1">
    author: {{ product.author }}
    </v-card-text>

    <v-card-actions class="pa-1">
      <v-btn
        color="success"
        outlined
        @click="addToCart(i)"
      >
        <v-icon>mdi-plus</v-icon>
        Add to Cart
      </v-btn>
    </v-card-actions>
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
    addToCart: VueTypes.func.isRequired,
    i: VueTypes.integer.isRequired
  }
}
</script>

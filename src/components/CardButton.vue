<template>
    <v-card  @click="onCardClick()" class="mx-auto my-3">
    <v-container>
      <v-row justify="space-between">

        <v-col
          cols="auto"
          class="text-center pl-0"
        >
          <v-row
            class="flex-column ma-0 fill-height"
            justify="center"
          >
          <v-col class="px-4" pointer tag='button'>
                <v-icon class="mt-n3" large >{{data.icon}}</v-icon>
                 <span class="display-1 font-weight-medium grey--text text--darken-1"
                 >
                 {{data.name}}
                 </span>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
export default {
  props: {
    data: Object,
  },
  methods: {
    onCardClick() {
      this.$router.push(this.data.path);
    },
  },
};
</script>

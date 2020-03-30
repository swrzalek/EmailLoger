<template>
    <v-alert
      v-model="open"
      class="mt-2 ml-4"
      color="green"
      dark
      dense
      icon="mdi-check"
      transition="scale-transition"
    >
    Adres e-mail został poprawnie zapisany
    </v-alert>
</template>
<script>
export default {
  props: {
    open: Boolean,
  },
};
</script>

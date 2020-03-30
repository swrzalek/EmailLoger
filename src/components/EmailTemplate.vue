<template>
    <v-dialog v-model="open" max-width="500px" @click:outside="$emit('close')">
            <v-card>
              <v-card-title>
                <span class="headline">Link do oferty</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                      <v-text-field id="textfield"
                      required
                      outlined rounded dense v-model="link"></v-text-field>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" @click="$emit('close')">Zamknij</v-btn>
                <v-btn color="blue darken-1" @click="copyToClipboard()" text >Kupiuj link</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
</template>
<script>
import { APP_URL } from '../utils/config';

export default {
  props: {
    open: Boolean,
    hash: String,
  },
  computed: {
    link() {
      return `${APP_URL}/id=${this.hash}`;
    },
  },
  methods: {
    copyToClipboard() {
      const input = document.getElementById('textfield');
      input.select();
      document.execCommand('copy');
    },
  },
};
</script>

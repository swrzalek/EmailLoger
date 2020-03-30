<template>
  <v-data-table
      :headers="headers"
      :items="logs"
      class="elevation-1"
    >


      <template v-slot:top>
        <v-toolbar flat color="white">
           <v-btn dark class="mb-2" @click="refresh">Odśwież</v-btn>
           <alert-dialog :open="alertDialog"></alert-dialog>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark class="mb-2" v-on="on">Generuj nowy</v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">Utwórz link do śledzenia</span>
              </v-card-title>

                <v-form
                v-model="valid"
                ref="form"
                >
                  <v-container>
                    <v-text-field :rules="emailRules"
                    required
                    outlined
                    v-model="email" label="Email nadawcy"></v-text-field>
                </v-container>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" @click="dialog =! dialog" text>Anuluj</v-btn>
                <v-btn color="blue darken-1"
                 :disabled="!valid"
                 @click="validate()"
                 text >Zapisz</v-btn>
              </v-card-actions>
                </v-form>
            </v-card>
          </v-dialog>
          <html-dialog :open="templateDialog"
          :hash="content" @close="templateDialog = false"></html-dialog>
        </v-toolbar>
      </template>
                 <template v-slot:item.open="{ item }">
            <v-simple-checkbox v-model="item.open" disabled></v-simple-checkbox>
          </template>
          <template v-slot:item.actions="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="setTemplate(item)"
        >
          mdi-eye
        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
</template>
<script>
import { fbsSaveEmailRecipient } from '../utils/firebase.service';
import store from '../store';
import { FETCH_LOGS } from '../store/actions.type';

export default {
  components: {
    htmlDialog: () => import('./EmailTemplate.vue'),
    alertDialog: () => import('./Alert.vue'),
  },
  data: () => ({
    valid: false,
    emailRules: [
      (v) => !!v || 'E-mail jest wymagany',
      (v) => /.+@.+\..+/.test(v) || 'E-mail musi być poprawny',
    ],
    email: '',
    content: 'Hello',
    dialog: false,
    alertDialog: false,
    templateDialog: false,
    headers: [
      { text: 'Email', value: 'email' },
      { text: 'Otwarto', value: 'open' },
      { text: 'Akcje', value: 'actions', sortable: false },
    ],
  }),
  props: {
    logs: Array,
  },
  methods: {
    setTemplate(item) {
      this.templateDialog = true;
      this.content = item.id ? item.id : '';
    },
    saveRecipent() {
      fbsSaveEmailRecipient(this.email).then((x) => {
        this.dialog = false;
        this.email = '';
        this.alertDialog = true;
        setTimeout(() => { this.alertDialog = false; }, 4000);
        return x;
      });
    },
    refresh() {
      store.dispatch(FETCH_LOGS);
    },
    validate() {
      if (this.$refs.form.validate()) {
        this.saveRecipent();
      } else {
        throw new Error('Validation error');
      }
    },
  },
};
</script>

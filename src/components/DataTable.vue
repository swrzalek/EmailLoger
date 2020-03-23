<template>
     <v-simple-table fixed-header height="600px">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Email</th>
          <th class="text-left">Otwarto</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in logs" :key="item.email">
          <td>{{ item.email }}</td>
          <td>{{ item.open ? 'tak' : 'nie' }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
<script>
export default {
  props: {
    logs: Array,
  },
};
</script>

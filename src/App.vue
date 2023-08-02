<template>
  <v-container>
    <v-row>
      <v-column :xs="5" :sm="2" :md="6">
        <p>Content</p>
      </v-column>
      <v-column :sm="6" :md="4" :xl="7">
        <p>Content</p>
      </v-column>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import VRow from '@/components/VRow/index.vue';
import VContainer from '@/components/VContainer/index.vue';
import VColumn from '@/components/VColumn/index.vue';

export default {
  name: 'App',
  components: {
    VRow,
    VContainer,
    VColumn,
  },
};
</script>
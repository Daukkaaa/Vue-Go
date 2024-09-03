<template>
  <v-card width="40%" class="ml-15">
    <v-tabs
      v-model="tab"
      bg-color="primary"
    >
      <v-tab value="one">Item One</v-tab>
      <v-tab value="two">Item Two</v-tab>
      <v-tab value="three">Item Three</v-tab>
    </v-tabs>

    <v-card-text>
      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="one">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam sequi dolore ab voluptate iusto similique voluptates, expedita nemo animi voluptatum, libero necessitatibus? Repellat perferendis corporis eligendi cum facere, accusantium quidem.
        </v-tabs-window-item>

        <v-tabs-window-item value="two">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta modi numquam aliquam, saepe vero sunt dignissimos facere ipsa reiciendis soluta, cupiditate repellat deserunt, veniam voluptatum doloribus magni perferendis. Modi, voluptas!
        </v-tabs-window-item>

        <v-tabs-window-item value="three">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus deserunt maxime sunt cum temporibus! Distinctio expedita quam quisquam consequuntur ipsum esse voluptatum? Enim possimus tempora natus et sunt pariatur iste!
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card-text>
  </v-card>
</template>

<script setup>
  import { ref } from 'vue';
  const tab = ref('one')
</script>

<style scoped>
.v-card-text {
  font-size: 16px;
  color: black;
}
</style>
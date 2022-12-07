<template>
  <!-- <div> -->


    <div class="text-center ma-2">
      <v-btn
        dark
        @click="snackbar = true"
      >
        Open Snackbar
      </v-btn>
      <v-snackbar
        v-model="snackbar"
        :timeout="3000"
      >
        {{ text }}

        <template v-slot:action="{ attrs }">
          <v-btn
            color="pink"
            text
            v-bind="attrs"
            @click="snackbar = false"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>

    <!-- <v-alert
      v-model="alert"
      color="blue"
      dense
      type="info"
    >hello ITZone</v-alert>


    <v-btn
      color="primary"
      elevation="2"
      @click="handlealert"
    >click</v-btn> -->

  <!-- </div> -->
</template>
<script>

export default {
  name: "Home",
  data:()=>({
      alert:false,
      snackbar:false,
      text: 'hello'
  }),


  methods:{
    handlealert(){
      this.alert = true;
    }
  }
};
</script>
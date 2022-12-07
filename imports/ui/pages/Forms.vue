<template>
    <div class="text-center ma-2">
      <v-row>
        <v-col cols="6" md="6">
          <v-card
            elevation="10"
            outlined>
            <v-card-title>form Demo</v-card-title>
            <!-- form -->
            <v-form v-model="valid">
              <v-container>
                <v-row>

                  <v-col
                    cols="6"
                    md="6">
                    <v-text-field
                      v-model="form.firstname"
                      :rules="nameRules"
                      label="name"
                      :counter="10"
                      required>
                    </v-text-field>
                  </v-col>

                  <v-col
                    cols="6"
                    md="6">
                    <v-select
                      v-model="form.select"
                      :items="items"
                      :rules="[v => !!v || 'Item is required']"
                      label="Item"
                      required>
                    </v-select>
                  </v-col>

                </v-row>

                <v-row>
                  
                  <v-col
                    cole="6"
                    md="6">
                    <v-text-field
                      v-model="form.email"
                      :rules="emailRules"
                      label="E-mail"
                      required>
                    </v-text-field>
                  </v-col>
                  
                </v-row>

              </v-container>
            </v-form>
            <!-- /form -->
            <!-- btn actions  -->
            <v-card-actions>
              <v-btn
                color="primary"
                outlined
                tile
                @click="handleGetData">
                Save
              </v-btn>
            </v-card-actions>
            <!--/btn actions  -->
            <br />
          </v-card>
        </v-col>
      </v-row>
      
    </div>
</template>
<script>

export default {
  name: "FROM",
  data:()=>({
      valid: false,
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      form:{
        firstname : '',
        select : null,
        email : ''
      }
  }),


  methods:{
    handleGetData(){
      console.log(this.form);
    }
  }
};
</script>
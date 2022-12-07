<template>
  <div>
    <!-- Start  -->
    <v-navigation-drawer v-model="drawer" app clipped>
      <!-- Start Menu list -->
      <v-list dense>
        <template v-for="item in items">

          <!-- subheader block -->
          <v-row v-if="item.heading" :key="item.heading" align="center">
            <v-col cols="6">
              <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
            </v-col>
            <v-col cols="6" class="text-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-col>
          </v-row>
          <!-- end subheader block -->

          <v-list-group
            v-else-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon>
            
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="(child, i) in item.children" :key="i" link :to="child.to">
              <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{ child.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>

          <v-list-item v-else :key="item.text" link :to="item.to">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          
        </template>
      </v-list>
      <!-- End Menu list -->
    </v-navigation-drawer>
    <!-- End -->

    <!-- Start -->
    <v-app-bar 
      app 
      clipped-left
      color="primary"
      dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Application</v-toolbar-title>
      <v-divider class="mx-4" inset vertical></v-divider>
      <!-- <span class="subheading">ទីតាំង</span>
      <v-divider class="mx-4" inset vertical></v-divider>
      <span class="subheading">{{routerName}}</span> -->
    </v-app-bar>
    <!-- End -->
  </div>
</template>
<script>
export default {
  name: "AppMenu",
  
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    items: [
      { icon: "mdi-home", text: "Home", to: "/" },
      { icon: "mdi-file-document", text: "Forms", to: "/form" },
      { icon: "mdi-table", text: "Tables", to: "/table" },
      { icon: "mdi-widgets", text: "Service/Product", to: "/ser_pro" },
      { icon: "mdi-account", text: "Customer", to: "/customer" },
      { icon: "mdi-file-document", text: "Contract", to: "/contract" },
      {
        icon: "mdi-chevron-up",
        "icon-alt": "mdi-chevron-down",
        text: "Report",
        model: false,
        children: [
          {
            icon: "mdi-file-document",
            text: "Daily Report",
            to: "/report"
          },
          { 
            icon: "mdi-file-document", 
            text: "EOD Month Report", 
            to: "/report_eod" 
          },
          {
            icon: "mdi-file-document",
            text: "EOY Year Report",
            to: "/report_eoy"
          }
        ]
      },
      // {
      //   icon: "mdi-chevron-up",
      //   "icon-alt": "mdi-chevron-down",
      //   text: "User Settings",
      //   model: false,
      //   children: [
      //     {
      //       icon: "mdi-account-multiple-plus",
      //       text: "Create User",
      //       to: "/user"
      //     },
      //     { 
      //       icon: "mdi-account-cog", 
      //       text: "User Role", 
      //       to: "/user_role" 
      //     },
      //     {
      //       icon: "mdi-account-cog",
      //       text: "User Permission",
      //       to: "/user_permission"
      //     }
      //   ]
      // },
      // { 
      //   icon: "mdi-chevron-up",
      //   "icon-alt": "mdi-chevron-down", 
      //   text: "Settings", 
      //   model: false,
      //   children: [
      //     {
      //       icon: "mdi-application",
      //       text: "Setting Storage",
      //       to: "/sett_storage"
      //     },
      //   ]
      // }
    ]
  })
};
</script>
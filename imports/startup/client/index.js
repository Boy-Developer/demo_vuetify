//lib
import { Meteor } from 'meteor/meteor';
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';              //import style CSS of Vuetify 
import '@mdi/font/css/materialdesignicons.min.css'; //import CSS icon font from https://materialdesignicons.com/
//routes
import router from '../../ui/routes/index'; 
//main app
//import '../../../client/main.html';
import App from '../../ui/App.vue';


Vue.use(Vuetify); // use Vue Framwork Vuetify => https://vuetifyjs.com/

const opts = {
  icons: {
    iconfont: 'mdi', // add opt icon to object Vuetify
  },
}

const vuetify =  new Vuetify(opts); // create new object from Vuetify

//start up meteor client
Meteor.startup(() => {
  const app = new Vue({
    router,                 //use Vue router
    vuetify,                //use Vuetify on client              
    render: h => h(App),    //render app
  }).$mount('App');         //mount app to min.html client page
});
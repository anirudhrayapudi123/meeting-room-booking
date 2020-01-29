import Vue from "vue";
import VueRouter from "vue-router";
import login from "../components/login.vue";
import create from "../components/create.vue";
import home from "../views/Home.vue";
import mymeetings from "../components/Mymeetings.vue";
import bookedslots from "../components/booked-slots.vue";
import bookMeeting from "../components/bookMeeting.vue";
Vue.use(VueRouter);

const routes = [
      {
        path:"/",
        name:"login",
        component:login
      },
      {
        path:"/create",
        name:"create",
        component:create
      },
      {
        path:"/home",
        name:"home",
        component:home
      },
      {
        path:"/mymeetings",
        name:"mymeetings",
        component:mymeetings
      },
      {
        path:"/booked-slots",
        name:"booked-slots",
        component:bookedslots
      },
      {
        path:"/bookMeeting",
        name:"TextFields",
        component:bookMeeting
      }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

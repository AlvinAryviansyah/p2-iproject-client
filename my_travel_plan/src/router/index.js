import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../views/Login.vue";
import Register from "../views/Register.vue"
import Favourites from "../views/Favourites.vue"
import Places from "../views/Places.vue"
import Hotels from "../views/Hotels.vue"
import Restaurants from "../views/Restaurants.vue"
import Attractions from "../views/Attractions.vue"
import Detail from "../views/Detail.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'favourites',
        name: "favourites",
        component: Favourites
      },
      {
        path: '',
        component: Places
      },
      {
        path: 'Places',
        name: "Places",
        component: Places
      },
      {
        path: 'hotels',
        name: "Hotels",
        component: Hotels
      },
      {
        path: 'restaurants',
        name: "Restaurants",
        component: Restaurants
      },
      {
        path: 'attractions',
        name: "Attractions",
        component: Attractions
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: '/detail',
    name: "Detail",
    component: Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

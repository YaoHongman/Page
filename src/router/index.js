import Vue from 'vue'
import Router from 'vue-router'
import Search from './search/index.js'
// import Search from "../components/search"
import Home from "../views/home"
import Classfition from "./classfition"
import Booking from "./booking"
import Shoppingcar from "./shoppingcar"
import Mine from "./mine"
import Goodstitle from "./goodstitle"

Vue.use(Router)

export default new Router({
  routes:[
   {
     path:"/",
     component:Home,
     name:"home"
   },
   {
    path:"/home",
    component:Home,
    name:"home"
  },
   Search,
   Classfition,
   Booking,
   Shoppingcar,
   Mine,
   Goodstitle
  ]
})

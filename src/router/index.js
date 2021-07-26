import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    
    routes: [
        {
          path: "/characters",
          name: "characters",
          component: () => import("../views/Characters.vue")
        },
        {
          path: "/episodes",
          name: "episodes",
          component: () => import("../views/Episodes.vue")
        },
      ],

})
  
export default router
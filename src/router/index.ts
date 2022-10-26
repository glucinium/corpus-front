import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArtworksView from '@/views/ArtworksView.vue'
import ArtworkDetails from '@/views/ArtworkDetails.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/artworks',
    name: 'artworks',
    component: ArtworksView
  },
  {
    path: "/artwork-add",
    name: "AddArtwork",
    component: () => import("../components/AddArtwork.vue")
  },
  {
    path: '/artworks/:id',
    name: 'ArtworkDetails',
    component: ArtworkDetails,
    props: true
  },
  {
    path: "/",
    alias: "/tutorials",
    name: "tutorials",
    component: () => import("../components/TutorialsList.vue")
  },
  {
    path: "/tutorials/:id",
    name: "tutorial-details",
    component: () => import("../components/TutorialDetails.vue")
  },
  {
    path: "/add",
    name: "add",
    component: () => import("../components/AddTutorial.vue")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

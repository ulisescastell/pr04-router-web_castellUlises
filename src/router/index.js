import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DestinationDetail from '@/components/DestinationDetail.vue'
import ExperienceDetails from '@/components/ExperienceDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/destination/:id',
      name: 'destination',
      component: DestinationDetail,
      children: [
        {
          path: 'experience/:slug',
          name: 'experience',
          component: ExperienceDetails,
        },
      ]
    },

    { path: '/dashboard', name: 'Dashboard'},
    { path: '/itb', name: 'ITB'}



  ],
})

export default router

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
      props: route => ({ id: parseInt(route.params.id, 10) }),
      children: [
        {
          path: 'experience/:slug',
          name: 'experience',
          component: ExperienceDetails,
          props: route => ({ slug: route.params.slug.toLowerCase() }),
        },
      ],
    },

  ],
})

export default router

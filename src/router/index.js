import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/foods/categories',
      name: 'Categories',
      component: () => import('../views/foods/Categories.vue')
    },
    {
      path: '/foods/CategoryCreate',
      name: 'CategoryCreate',
      component: ()=> import('../views/foods/CategoryCreate.vue')
    },
    {
      path: '/foods/categories/:id/edit',
      name: 'CategoryEdit',
      component: () => import('../views/foods/CategoryEdit.vue'),
      props: true,
    },
    {
      path: '/foods',
      name: 'FoodList',
      component: () => import('../views/foods/FoodList.vue')
    },
    {
      path: '/foods/create',
      name: 'FoodCreate',
      component: () => import('../views/foods/FoodCreate.vue')
    },
    {
      path: '/foods/FoodList/:id/edit',
      name: 'FoodEdit',
      component: () => import('../views/foods/FoodEdit.vue'),
      props: true
    }
  ]
})

export default router

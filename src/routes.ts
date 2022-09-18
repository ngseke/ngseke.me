const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('./views/Index.vue'),
  },
  {
    path: '/project',
    name: 'projects',
    component: () => import('./views/Projects.vue'),
  },
]

export default routes

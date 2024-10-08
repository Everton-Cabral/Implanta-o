const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'info', component: () => import('pages/InfoPage.vue') },
      { path: 'PmSC', component: () => import('pages/PmSC.vue') },
      { path: 'CasaCivil', component: () => import('pages/CasaCivil.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes

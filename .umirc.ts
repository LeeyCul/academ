import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/publicity' },
    { path: '/serve', component: '@/pages/serve' },
    { path: '/science', component: '@/pages/science' },
    { path: '/translation', component: '@/pages/translation' },
    { path: '/produce', component: '@/pages/produce' },
  ],
  fastRefresh: {},
});

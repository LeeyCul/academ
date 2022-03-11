import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/publicity' },
    { path: '/serve', component: '@/pages/serve' },
  ],
  fastRefresh: {},
});

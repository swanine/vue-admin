/**
 * 环境配置封装
 * 2021-8.21
 */
const env = import.meta.env.MODE || 'prod'
const EnvConfig = {
  dev: {
    baseApi: '/',
    mockApi: ''
  },
  test: {
    baseApi: '/test.swanine.xyz/api',
    mockApi: ''
  },
  prod: {
    baseApi: '/swanine.xyz/api',
    mockApi: ''
  }
}
export default {
  env,
  mock: true,
  namespace: 'manager',
  ...EnvConfig[env]
}
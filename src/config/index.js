/**
 * 环境配置封装
 * 2021-8.21
 */
const env = import.meta.env.MODE || 'prod'
const EnvConfig = {
  dev: {
    baseApi: '/api',
    mockApi: 'https://www.fastmock.site/mock/db64df65e60df0032ed6536135a79b7d/api'
  },
  test: {
    baseApi: '/',
    mockApi: 'https://www.fastmock.site/mock/db64df65e60df0032ed6536135a79b7d/api'
  },
  prod: {
    baseApi: '/',
    mockApi: 'https://www.fastmock.site/mock/db64df65e60df0032ed6536135a79b7d/api'
  }
}
export default {
  env,
  mock: true,
  namespace: 'manager',
  ...EnvConfig[env]
}
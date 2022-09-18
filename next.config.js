/** @type {import('next').NextConfig} */
const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants')


const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

module.exports = (phase) => {
  // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  // when `next build` or `npm run build` is used
  const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1'
  // when `next build` or `npm run build` is used
  const isStaging =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1'

 

  const env = {

    REST_API: (() => {
      if (isDev) return 'http://localhost:8080/'
      if (isProd) {
        return 'http://localhost:8080/'
      }
      if (isStaging) return 'http://localhost:8080/'
      return 'REST_API:not (isDev,isProd && !isStaging,isProd && isStaging)'
    })(),

    reactStrictMode: true,
    swcMinify: true,
  }

  return {
    env,
  }


}

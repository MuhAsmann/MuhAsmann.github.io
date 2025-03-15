/** @type {import('next').NextConfig} */

const isDev = process.env.ENVIRONMENT === 'dev';

const nextConfig = {
    output: isDev ? undefined : 'export',
    images: {
        unoptimized: true,
    },
    basePath: isDev ? '' : '/infomee',
    assetPrefix: isDev ? '' : '/infomee',
}

module.exports = nextConfig

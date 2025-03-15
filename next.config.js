/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: '/infomee',
    assetPrefix: '/infomee',
}

module.exports = nextConfig

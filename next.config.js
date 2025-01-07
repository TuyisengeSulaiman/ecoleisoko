const { withNextVideo } = require('next-video/process')

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['lh3.googleusercontent.com', 'www.bing.com'],
     },
}

module.exports = withNextVideo(nextConfig)

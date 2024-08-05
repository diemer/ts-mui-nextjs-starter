/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    rewrites: async () => {
        return [
            {
                source: '/:slug-privacy-policy',
                destination: '/html/:slug-privacy-policy.html',
            },
        ];
    }

};

module.exports = nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
            protocol: 'https',
            hostname: 'flagsapi.com',
            pathname: '/**',
            },
            {
            protocol: 'https',
            hostname: 'andryblogresume.wordpress.com',
            pathname: '/**',
            },            
        ],
    },
};

export default nextConfig;

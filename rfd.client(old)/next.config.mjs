/** @type {import('next').NextConfig} */
import { env } from 'process';

const target = env.ASPNETCORE_HTTPS_PORT ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}` :
    env.ASPNETCORE_URLS ? env.ASPNETCORE_URLS.split(';')[0] : 'https://localhost:7127';

const nextConfig = {
    distDir: './dist', // Changes the build output directory to `./dist/`.
    //output: 'export',
    rewrites: () => [
        {
            source: '/weatherforecast',
            destination: target
        },
    ]
}

export default nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  i18n: {
    locales: ['fi', 'en'],
    defaultLocale: 'fi',
  }
};

export default nextConfig;

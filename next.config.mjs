/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    // Allow all local static images from the /public directory
    // without requiring explicit domain configuration.
    // Set to true during development; switch to false in production
    // once you have a CDN or image optimization service configured.
    unoptimized: true,
  },
};

export default nextConfig;

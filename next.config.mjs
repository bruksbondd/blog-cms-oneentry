/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
      remotePatterns: [
          {
              hostname:"blogapp.oneentry.cloud"
          }
      ]
  }
};


export default nextConfig;

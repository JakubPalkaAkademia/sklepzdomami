import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/pracownia", destination: "/o-nas", permanent: true }];
  },
};

export default nextConfig;

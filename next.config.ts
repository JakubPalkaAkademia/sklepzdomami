import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        has: [{ type: "host", value: "www.sklepzdomami.com" }],
        destination: "https://sklepzdomami.com/",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.sklepzdomami.com" }],
        destination: "https://sklepzdomami.com/:path*",
        permanent: true,
      },
      { source: "/pracownia", destination: "/o-nas", permanent: true },
      { source: "/:locale(en|de)/pracownia", destination: "/:locale/o-nas", permanent: true },
    ];
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // Tambahkan baris ini
  images: {
    unoptimized: true, // Opsional jika Anda tidak ingin setup library image optimization di Docker
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      { pathname: "/**", search: "" },
      { pathname: "/api/blogs/*/image" },
      { pathname: "/api/admin/blogs/*/image" },
    ],
  },
  async headers() {
    const headers = [
      { key: "X-Frame-Options", value: "DENY" },
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "same-origin" },
      { key: "Content-Security-Policy", value: "frame-ancestors 'none'; form-action 'self'; base-uri 'self'; object-src 'none'" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
      { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" },
    ];
    return [{ source: "/admin/:path*", headers }, { source: "/api/admin/:path*", headers }];
  },
  cacheComponents: true,
  partialPrefetching: true,
  experimental: { serverActions: { bodySizeLimit: "2mb" } },
  webpack(config) {
    function addTailwind(rules: typeof config.module.rules) {
      for (const rule of rules) {
        if (!rule || typeof rule !== "object") continue;
        if (Array.isArray(rule.oneOf)) addTailwind(rule.oneOf);
        if (Array.isArray(rule.rules)) addTailwind(rule.rules);
        if (Array.isArray(rule.use) && rule.use.some((entry: { loader?: string } | string) => typeof entry === "object" && entry.loader?.includes("postcss-loader"))) {
          rule.use.push({ loader: "@tailwindcss/turbopack" });
        }
      }
    }
    addTailwind(config.module.rules);
    return config;
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

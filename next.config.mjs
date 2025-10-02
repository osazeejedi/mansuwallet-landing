/** @type {import('next').NextConfig} */
const nextConfig = {
  // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  //   // Add fallback configuration
  //   config.resolve = config.resolve || {};
  //   config.resolve.fallback = {
  //     ...config.resolve.fallback,
  //     child_process: false,
  //     // Add other packages that are not found here
  //   };
  //   // Provide an empty module for child_process
  //   config.plugins.push(
  //     new webpack.NormalModuleReplacementPlugin(
  //       /^child_process$/,
  //       "node-libs-browser/mock/empty.js"
  //     )
  //   );
  //   return config;
  // },
  // images: {
  //   unoptimized: false,
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "*",
  //       port: "",
  //       pathname: "/**",
  //     },
  //     {
  //       protocol: "http",
  //       hostname: "*",
  //       port: "",
  //       pathname: "/**",
  //     },
  //   ],
  // },
  // staticPageGenerationTimeout: 1000,
};

export default nextConfig;

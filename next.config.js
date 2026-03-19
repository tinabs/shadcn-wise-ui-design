const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    // Always use this project directory as root (parent has a lockfile that confuses Next.js)
    root: __dirname,
  },
  // Ensure bundling and resolution use this project, not the parent
  outputFileTracingRoot: __dirname,
};

module.exports = nextConfig;

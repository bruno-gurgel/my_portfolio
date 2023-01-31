const nextTranslate = require("next-translate");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

module.exports = nextTranslate(nextConfig);

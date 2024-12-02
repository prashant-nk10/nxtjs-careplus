const { withSentryConfig } = require("@sentry/nextjs");

/** @type {import('next').NextConfig} */
const config = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // ... rest of your config
};

const sentryWebpackPluginOptions = {
  org: "js-mastery-ec",
  project: "javascript-nextjs",
  silent: true,
};

module.exports = withSentryConfig(config, sentryWebpackPluginOptions);

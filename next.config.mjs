const { withSentryConfig } = require("@sentry/nextjs");

const config = {
  // your existing next config
};

const sentryWebpackPluginOptions = {
  org: "js-mastery-ec",
  project: "javascript-nextjs", // Add this line
  // other sentry options...
};

module.exports = withSentryConfig(config, sentryWebpackPluginOptions);

import { withSentryConfig } from ("@sentry/nextjs");

const config = {
  // your existing next config
};

const sentryWebpackPluginOptions = {
  org: "js-mastery-ec",
  project: "javascript-nextjs", // Add this line
  // other sentry options...
  silent: true,
};

export default withSentryConfig(config, sentryWebpackPluginOptions);

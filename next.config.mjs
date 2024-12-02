// next.config.mjs
import { withSentryConfig } from "@sentry/nextjs";

const config = {
  // your existing next config
  reactStrictMode: true,
  swcMinify: true,
};

const sentryWebpackPluginOptions = {
  org: "js-mastery-ec",
  project: "javascript-nextjs",
  silent: true,
};

export default withSentryConfig(config, sentryWebpackPluginOptions);

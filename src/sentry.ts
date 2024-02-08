import * as Sentry from '@sentry/node-experimental';


// Refer to the documentation for more information: https://docs.sentry.io/platforms/node/configuration/options/
Sentry.init({
  dsn: process.env.SENTRY_DNS,
  // Transaction with profiling cost 1.3 instead of 1.0,
  // you can add more profiling here for example Prisma or postgresql
  integrations: [],
  // Performance Monitoring
  tracesSampleRate: 1,
  // Set sampling rate for profiling - this is relative to tracesSampleRate
  profilesSampleRate: 1.0,

  // Set the environment & release version
  environment: process.env.NODE_ENV,
  release: `${process.env.npm_package_name}@${process.env.npm_package_version}`,

  // Disable transport in development, transaction are still captured in debug mode
  enabled: true, //process.env.NODE_ENV !== 'development',
  enableTracing: true, //process.env.NODE_ENV !== 'development',

  // Enable debug mode to log event submission
  debug: true, // process.env.NODE_ENV === 'development',

  // Called for message and error events
  beforeSend(event) {
    // Modify or drop the event here
    // process.env.NODE_ENV === 'development' && console.log(event);
    return event;
  },

  // Called for transaction events, you can further debug your transactions here
  beforeSendTransaction(event) {
    // Modify or drop the event here
    // process.env.NODE_ENV === 'development' && console.log(event);
    return event;
  },
});

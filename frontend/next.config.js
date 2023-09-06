module.exports = {
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: "secret",
    secondSecret: process.env.SECOND_SECRET, // Pass through env variables
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: "/static",
    PRODUCTION: "http://localhost:8000/api",
    DOMAIN_PRODUCTION: "https://localhost:3000/",
    DOMAIN_DEVELOPMENT: "https://localhost:3000/",
    FB_APP_ID: "fbId",
    DISQUS_SHORTNAME: "dId",
    GOOGLE_CLIENT_ID: "gId",
    APP_NAME: "MyApp",
  },
  headers: [
    {
      source: "/(.*)",
      headers: [
        { key: "Access-Control-Allow-Credentials", value: "true" },
        {
          key: "Access-Control-Allow-Origin",
          value: "http://localhost:3000/",
        },
      ],
    },
  ],
};

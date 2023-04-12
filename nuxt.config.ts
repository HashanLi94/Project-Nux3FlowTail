// https://nuxt.com/docs/api/configuration/nuxt-config
// https://github.com/themesberg/tailwind-nuxt-starter
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  app: {
    head: {
      title: "Flow bite Fresh project",
      //   https://nuxt.com/docs/migration/meta
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "my website description",
        },
      ],
      script: [
        // <script src="https://myawesome-lib.js"></script>
        { src: "https://awesome-lib.js" },
      ],
      link: [
        // Favicon : https://roga.hashnode.dev/adding-your-favicon-to-nuxt-3
        // https://stackoverflow.com/questions/19029342/favicons-best-practices
        // favicon generator: https://realfavicongenerator.net/
        // web
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon-32x32.png",
        },
        // android-chrome
        {
          rel: "shortcut icon",
          sizes: "192x192",
          href: "/android-chrome.png",
        },
        // apple-touch-icon
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },

        // <link rel="stylesheet" href="https://myawesome-lib.css">
        { rel: "stylesheet", href: "https://awesome-lib.css" },
      ],
      // please note that this is an area that is likely to change
      style: [
        // <style type="text/css">:root { color: red }</style>
        { children: ":root { color: red }", type: "text/css" },
      ],
      noscript: [
        // <noscript>JavaScript is required</noscript>
        { children: "JavaScript is required" },
      ],
    },
  },
  keepalive: true,

  css: [
    // CSS file in the project
    "@/assets/css/main.css",
  ],

  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: "",
    // Keys within public are also exposed client-side
    public: {
      apiBase: "/api",
    },
  },
});

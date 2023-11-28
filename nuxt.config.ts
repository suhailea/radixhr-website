// https://nuxt.com/docs/api/configuration/nuxt-config

import { resolve } from "path";
export default defineNuxtConfig({
  // css: ["~/assets/main.css"],
  // postcss: {
  //   plugins: {
  //     tailwindcss: {},
  //     autoprefixer: {},
  //   },
  // },
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
});

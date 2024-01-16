import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import astroI18next from "astro-i18next";
import dotenv from "dotenv";
import react from "@astrojs/react";
dotenv.config();


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), astroI18next()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
    routing: {
      prefixDefaultLocale: false
    }
  },
});
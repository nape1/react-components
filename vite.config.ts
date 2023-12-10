import { defineConfig } from "vite"
import React from "@vitejs/plugin-react"

import UnoCss from "unocss/vite"
import presetAttributify from "unocss/preset-attributify"
import presetIcons from "unocss/preset-icons"
import presetUno from "unocss/preset-uno"
// import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx'
//ts error in this transform https://github.com/unocss/unocss/issues/2429
import transformerAttributifyJsx from "@unocss/transformer-attributify-jsx-babel"

import unoStyle from "./src/styles/unoStyle"
import transformerCompileClass from "@unocss/transformer-compile-class"

import path from "path"
export default defineConfig({
  plugins: [
    UnoCss({
      presets: [
        presetUno(),
        presetAttributify({
          prefix: "uno-",
          // prefixedOnly:true // strict prefix toogler
        }),
        presetIcons({
          extraProperties: {
            display: "inline-block",
            "vertical-align": "middle",
          },
        }),
      ],
      shortcuts: [
        {
          ...unoStyle,
          "n-action": "pointer-events-none",
        },
      ],
      transformers: [
        //@ts-ignore
        transformerCompileClass(),
        transformerAttributifyJsx(), // <--
      ],
    }),
    React(), // order matters when we use presetAttributify with React
    /** 
     * If you're using @unocss/preset-attributify you should remove tsc from the build script.
    If you are using @vitejs/plugin-react with @unocss/preset-attributify, 
    you must add the plugin 'UnoCss' before @vitejs/plugin-react 'React'.
     * */
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@styles": path.resolve(__dirname, "src/styles"),
    },
  },
})
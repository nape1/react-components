## Notes to remember
### Vite Config


#### uno CSS
- If you're using `@unocss/preset-attributify` you should remove tsc from the build script.
- If you are using `@vitejs/plugin-react` with `@unocss/preset-attributify`, you must add the plugin **'UnoCss'** before **@vitejs/plugin-react 'React'**.
  ```javascript
  export default defineConfig({
  plugins: [
    UnoCss({
      presets: [
        presetUno(),
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
  ],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@styles": path.resolve(__dirname, "src/styles"),
    },
  },
})
  ```


#### path alias
```javascript
// https://vitejs.dev/config/
// type - 1
import { resolve } from "node:path";
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "./src") }],
  },
});

// type -2
import path from "path";
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "./src") }],
  },
});

// type 3
export default defineConfig({
  plugins: [
    React()
  ],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      // key "@component" must be in-sync with tsconfig paths "@components/*"
      // eg "@/components" ==> tsconfig -  "@/components/*, its baed on 'baseurl'
      // if not same ts will show error but app will render
      "@pages": path.resolve(__dirname, "src/pages"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@styles": path.resolve(__dirname, "src/styles"),
    },
  },
})

```
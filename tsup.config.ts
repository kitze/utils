import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["index.ts", "hooks/index.ts", "fns/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  treeshake: true,
  external: [
    "react",
    "@radix-ui/react-tooltip",
    "clsx",
    "is-url",
    "react-twc",
    "tailwind-merge",
    "tailwindcss",
  ],
  outExtension({ format }) {
    return {
      js: `.${format}.js`,
      css: ".css",
    };
  },
  loader: {
    ".css": "css",
  },
});

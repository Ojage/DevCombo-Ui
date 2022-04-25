import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
// import package.json as a js variable, so that we can refer it to some of the different properties in our
// package.json
const packageJson = require("./package.json");
// Export an array of configuration objects
export default [
  {
    input: "src/index.ts", //The entry point
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts", //Input for our type files
    output: [{ file: "dist/index.d.ts", format: "esm" }], //Output is going to end up in the dist folder
    plugins: [dts()],
  },
];

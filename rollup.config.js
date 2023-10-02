// rollup.config.js
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

export default {
  // ... other configuration options ...
  plugins: [
    resolve(), // Helps Rollup resolve node_modules dependencies
    commonjs(), // Helps Rollup handle CommonJS modules
    // ... other plugins ...
  ],
};

import { defineConfig } from "vite";
import { ViteFontsConverterPlugin } from 'vite-plugin-fonts-converter';

export default defineConfig({
    plugins: [ViteFontsConverterPlugin()],
});
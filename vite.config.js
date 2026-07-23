import { defineConfig } from "vite";

export default defineConfig({

    build: {

        rollupOptions: {

            input: [
                "index.html",
                "login.html"
            ]

        }

    }

});

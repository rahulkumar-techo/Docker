
### DOCKER CONFIG

`Dockerfile.dev`
```Dockerfile.dev

FROM node:18-slim As development

WORKDIR /react-project

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm","run",'dev' ]

//or
//CMD [ "npm","run",'dev','0.0.0.0' ]

 
```


`docker-compose.dev.yml`
```docker-compose.yml
version: '3'
services:
  react-project-dev:
    container_name: react-project-container_name
    image: react-project-dev-image
    build:
      context: .
      dockerfile: Dockerfile.dev
    ports:
      - "8080:8080"
    volumes:
      - .:/react-project
      - /react-project/node_modules
    command: npm run dev
// npm run dev --host 0.0.0.0


```
`.dockerignore `
```.dockerignore
node_modules
node_modules/*
npm-debug.log
logs/
*.md
.cache
.gitignore
README.md


```

`vite.config.js`
```js

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    // host:true,
    // strictPort:true,
    port: 8080,
    watch: {
      usePolling: true,
    },
  },
});

```
`package.json`
```package.json
  "scripts": {
    "dev": "vite --host 0.0.0.0",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },

```
more way to solve vite network 

 ```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
     host:true,
     strictPort:true,
    port: 8080,
    watch: {
      usePolling: true,
    },
  },
});
   ```







### DOCKER CONFIG


[click here to see all node hub versions](https://hub.docker.com/_/node/tags)


`Dockerfile.dev`
```Dockerfile.dev

# Use the official Node.js 18 slim image as the base image for development
FROM node:18-slim AS development

# Set the working directory inside the container to /react-project
WORKDIR /react-project

# Copy the package.json file from the local machine to the container's working directory
COPY package.json .

# Run npm install to install the dependencies specified in package.json
RUN npm install

# Copy the entire local project directory to the container's working directory
COPY . .

# Expose port 8080 for the application to listen on
EXPOSE 8080

# Define the default command to run when the container starts
CMD ["npm", "run", "dev"]

//or
//CMD [ "npm","run",'dev','0.0.0.0' ]

 
```


`docker-compose.dev.yml`
```docker-compose.yml
version: '3'

services:
  # Define a service for the React project in development
  react-project-dev:
    # Set the custom container name
    container_name: react-project-container_name
    
    # Specify the custom image name for the development environment
    image: react-project-dev-image
    
    # Build the Docker image using the specified Dockerfile.dev
    build:
      context: .
      dockerfile: Dockerfile.dev
    
    # Map port 8080 from the container to port 8080 on the host
    ports:
      - "8080:8080"
    
    # Mount volumes to enable live code updates and prevent reinstallation of dependencies
    volumes:
      # Mount the entire local project directory to /react-project in the container
      - .:/react-project
      # Mount the node_modules directory as a separate volume to improve performance
      - /react-project/node_modules
    
    # Specify the default command to run when the container starts
    command: npm run dev

// npm run dev --host 0.0.0.0

```



- version: '3': Specifies the version of the Docker Compose file format being used.

- services: Defines a list of services in the Docker Compose file.

- react-project-dev: Describes the configuration for the service named "react-project-dev."

- container_name: react-project-container_name: Assigns a custom name to the Docker container for easier identification.

- image: react-project-dev-image: Specifies the custom image name for the development environment.

- build: Configures the build process for the Docker image.

- context: .: Specifies the build context as the current directory.
- dockerfile: Dockerfile.dev: Specifies the Dockerfile to use for building the image.
ports:

Maps port 8080 from the container to port 8080 on the host machine.
volumes:

- - -- .:/react-project: Mounts the entire local project directory to the "/react-project" directory in the container. This enables live code updates.
- - -- /react-project/node_modules: Mounts the "node_modules" directory as a separate volume to improve performance and avoid reinstallation of dependencies.
command: npm run dev: Specifies the default command to run when the container starts. In this case, it runs the "dev" script defined in the npm package.json file.










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




- "dev": "vite --host 0.0.0.0": This npm script defines the "dev" command, which uses Vite to start the development server. The --host 0.0.0.0 option specifies that the server should be accessible from any IP address, allowing it to be reachable from outside the container.





```
more way to solve vite network 

 ```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Plugins configuration, including the Vite React plugin
  plugins: [react()],
  
  // Server configuration
  server: {
    // Enable the host option, allowing the server to be accessed from any IP address
    host: true,
    
    // Enable strict port checking, ensuring that the specified port is used
    strictPort: true,
    
    // Specify the port on which the development server should run
    port: 8080,
    
    // Watch configuration
    watch: {
      // Enable file watching using polling (useful in certain environments)
      usePolling: true,
    },
  },
});

   ```
- server: { ... }: Configures the development server settings.

- host: true,: Enables the host option, allowing the server to be accessed from any IP address. This is useful when running the server inside a Docker container.

- strictPort: true,: Enables strict port checking, ensuring that the specified port is used. In this case, it ensures that port 8080 is used.

- port: 8080,: Specifies the port on which the development server should run. This is set to 8080.

- watch: { usePolling: true },: Configures file watching options. usePolling: true enables file watching using polling, which can be useful in certain environments where regular file system events may not be supported.

`You could Face this problem  while tailwind configuration...`
```js
The error is occurring because your postcss.config.js file is being treated as an ECMAScript module (ES module) due to the "type": "module" setting in your package.json. However, the contents of the postcss.config.js file are written in CommonJS syntax, which is causing the require statement to fail.
``


```js
// postcss.config.js Tailwind css 

import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    tailwindcss,
    autoprefixer,
  ],
};

```

```CMD
 docker compose -f docker-compose.dev.yml -d
```
```CMD
 docker compose -f docker-compose.dev.yml start
```
```CMD
 docker compose -f docker-compose.dev.yml stop
```
```CMD
 docker compose -f docker-compose.dev.yml ps
```


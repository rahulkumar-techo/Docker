# DOCKER

#### TOPICS -1

- Problem statement
- Installation of Docker CLI and Desktop
- Understanding images v/s containers
- Running Ubuntu images in container
- multiple Container
- port maping
- Enviroment variable
- Dockerization of Node.js Application

  - Docker file
  - Caching Layers
  - publishing to hub

- Docker Compose

  - Service
  - port maping
  - Env varible

### Topics-2

- Docker Networking

  - Bridge
  - Host
  - IPvLan
  - MacvLan
  - none

- Volume mounting
- Docker multi-Stage Builds

### Amazon Elastic Container Service and ECR

# 1. Problem statment

- ## Dependency Management:

  Problem : Conflicting dependencies make consistent deployment difficult.Docker

  Solution: Containers encapsulate dependencies, ensuring consistent application performance across environments.

- ## Environment Consistency:

  Problem: Differing development and production environments cause issues.

  Docker Solution: Provides a consistent environment, reducing "it works on my machine" problems.

- ## Isolation:

  Problem: Application interference and conflicts occur.
  Docker Solution: Containers isolate applications, preventing conflicts and enabling independent execution.

- ## Portability:

  Problem: Applications struggle to run across various environments.
  Docker Solution: Encapsulates applications and dependencies for easy transfer and deployment across different environments

- ## Resource Efficiency:

  Problem: Traditional virtualization is resource-intensive.
  Docker Solution: Lightweight containerization improves resource efficiency and accelerates application deployment.

- ## Scaling and Orchestration:

  Problem: Scaling and managing multiple instances is complex.
  Docker Solution: Easily scales with container instances; orchestration tools like Kubernetes automate management.

- ## Rapid Deployment:

  Problem: Slow and error-prone deployment processes.
  Docker Solution: Enables quick and consistent deployment, reducing time and minimizing errors.
  Microservices Architecture:

  Problem: Monolithic applications are hard to maintain.
  Docker Solution: Supports microservices architecture, breaking applications into manageable services in individual containers.

#### docker container

---

In Docker, a container is a `portable` and `lightweight` package that includes everything needed `to run an application—code`, `dependencies`, and `system tools`. Containers provide consistency, `isolation`, and `portability`, `ensuring applications` run consistently across different environments. They are lightweight, share the host `OS kernel`, and offer `flexibility in deployment and scaling`. Docker containers are widely used in modern software development for efficient and consistent application deployment

### installation Process

- Docker GUI \_`desktop , include GUI and CLI both`

  [download docker desktop](https://www.docker.com/products/docker-desktop/)

docker demon - `tool actual docker , doing all work`
docker GUI - `is for visulise`

- set all the configurations

commands

// to check setups
`docker`

// version
`docker -v`

// run ubuntu it-> intractive mode
// it check is ubuntu exist
// if not exist then it `download ubuntu os and create Image ` if `exist then it create a new ubuntu Image` it download from hub.docker.com

`docker run -it ubuntu`

// ls to see all files inside ununtu

`ls`

// whoami give you root

`whoami`

to stop docker

`ctrl d `

`mkdir`

---

`root@cd1a78c924da:/#` container root

like this command is running inside the container of ubuntu

---

Containers are separately works and it doesn't affect other container.

In a container may have configurations like `ubuntu ,nodejs,mongodb,redis etc` but ubuntu should only run inside the container .

```html
<!-- commands -->
docker run -it
<ubuntu or images>
  <!--  it will work on local machine not root means server -->
  <!-- it will benificial for without GUI desktop -->
  docker container ls

  <!-- -a  show all the container -->
  docker container ls -a

  <!-- if any container is closed  -->

  docker start container_name

  <!-- if want to stop to run container -->
  docker stop container_name

  <!-- it will give you the list of inside the container or specific container execute  -->

  docker exec
  <containerName>
    ls

    <!-- attach container with terminal that never disconnect  -->
    docker exec -it
    <containerName>
      bash

      <!-- after that you can use basic operations with files  -->

      ls , mkdir , cd / , cd ../ , etc..

      <!--  -->
      docker run -it
      <image_name>
        <!-- docker images  to get Images in local not inside container -->
        docker images

        <!--  -->
        docker exec
        <container_name>
          <command>
            <!-- -it  -->

            <!--  cat app.js run when you inside the container -->
            cat app.js copied file
          </command></container_name
        ></image_name
      ></containerName
    ></containerName
  ></ubuntu
>
```

## PORT MAPING

Basically node port are running inside the Container
so, that we want to run in our local machine use `docker run -it -p port:port <image_name>`

port(`outside the container to local system , eg:- mapped 6000`):port (`Inside container port eg :- running on port 9000 `)

in this case 9000 port mapped with 6000 port , After configurate it will run on port 6000 .

-p = port

AND FOR MULTIPLE PORT

```html
docker pull <docker_container></docker_container>
```

```html
docker run -d -p 2000:2000 -p 1010:1010 <docker_container> </docker_container>
```

# ENV in docker's container

```html
<!-- add additional data  -->
docker run -it 1000:1000 -e key=value <Container_name> </Container_name>
```

```Dockerfile

# set Env file to container

docker run -it -e PORT=4000 -p 4000:4000 <Image_name or id>


```

```npm
 docker run -it -e PORT=4000 -p 4000:4000 268b78ee3b3a
```

# Dockerization of Node.js Application

```Dockerfile
# Base Image created
 FROM node
# We can use FROM node that we don't need to update or install the configurations
FROM ubuntu

#To get this version, you can use the apt package manager. Refresh your local package index first:

 RUN apt update

# Inatall node js over ubuntu os curl is a tool
RUN apt-get install -y curl


 RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -

# RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get install -y nodejs


# copy source -> destination
# can change name inside the image

COPY package.json package.json
COPY package-lock.json package-lock.json
COPY app.js app.js

RUN npm install

ENTRYPOINT [ "node","app.js" ]

# After setting all the essiential configurations create image of it




```

```Dockerfile
# <!-- Creating in terminal  -->

# docker build -t <create_image_name> -t = tag
# . is a path

docker build -t dockernodejs .

# docker run -it -p 6000:6000 dockernodejs

```

























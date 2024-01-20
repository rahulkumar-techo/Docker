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

// run ubuntu  it-> intractive mode
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

In a container  may have configurations like `ubuntu ,nodejs,mongodb,redis etc` but ubuntu should only run inside the container .




```html

<!-- commands -->
docker run -it <ubuntu or images>

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

docker exec <containerName> ls

<!-- attach container with terminal that never disconnect  -->
docker exec -it <containerName> bash

<!-- after that you can use basic operations with files  -->

ls , mkdir , cd / , cd ../ , etc..

<!--  -->
docker run -it <image_name>

  <!-- docker images  to get Images in local not inside container -->
  docker images

<!--  -->
docker exec <container_name> <command>
  <!-- -it  -->

```

## PORT MAPING 

Basically node port are running inside the Container 
so, that we want to run in our local machine use `docker run -it -p port:port <image_name>`

port (`Inside container port `):port(`outside the container to local system`)

-p = port


















<!-- Generate tests using CodiumAI: -->

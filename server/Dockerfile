# Base Image created
FROM ubuntu 



 RUN apt update

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
COPY  .env .env

RUN npm install

ENTRYPOINT [ "node","app.js" ]





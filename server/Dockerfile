# Base Image created
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
COPY  .env .env

RUN npm install

ENTRYPOINT [ "node","app.js" ]

# After setting all the essiential configurations create image of it 



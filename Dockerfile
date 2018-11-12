FROM node:10.13.0

RUN mkdir -p /usr/src/app/swagger
WORKDIR /usr/src/app

# copy package.json to instal deps inside a container
COPY ./package.json /usr/src/app/
COPY ./package-lock.json /usr/src/app/
RUN npm install --production

# copy prodctiuon build
COPY ./build/index.js /usr/src/app/

# copy documentation
COPY ./swagger/openapi.yaml /usr/src/app/swagger

# expose container port
EXPOSE 3000

CMD ["node", "index.js"]
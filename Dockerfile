# pull official base image
FROM node:16

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
COPY .env ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY ./public ./public
COPY ./src ./src


CMD ["npm", "run", "start"]
# Production build does not work :(
# RUN npm run build
# RUN npm install -g serve

# # start app
# CMD ["serve", "-s", "build"]
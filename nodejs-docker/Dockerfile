FROM node:alpine

# Set app directory
WORKDIR /usr/app

# Install app dependencies
COPY ./package.json ./
RUN npm install
COPY ./ ./



# Default command
CMD [ "npm", "start" ]
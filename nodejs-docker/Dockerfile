FROM node:alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json /app
RUN npm install

# Bundle app source
COPY . /app
ENV PORT=3000
EXPOSE 3000

CMD [ "npm", "start" ]
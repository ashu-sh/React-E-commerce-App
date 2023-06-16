# Setting Default Node Version
FROM node:alpine
# Assinging working Directory  
WORKDIR '/app'

COPY package.json .
RUN npm install
COPY . . 
CMD [ "npm","start" ]
#base image
FROM node:21-alpine3.18
#working Directory
WORKDIR /app
#copy package.json to /app
COPY package.json .
#RUN npm install
RUN npm install
#copy all files
COPY . .
#port link
EXPOSE 3000
#run the code
CMD ["npm", "start"]
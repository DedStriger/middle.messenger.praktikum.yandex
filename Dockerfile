FROM node:16
WORKDIR /var/www
RUN apt update && apt install -y nodejs && apt install -y npm 
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "build"]

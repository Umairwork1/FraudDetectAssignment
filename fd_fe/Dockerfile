FROM node:18
WORKDIR /app
# Copy and download dependencies
COPY package*.json ./
 #npm install -g npm@10.1.0
RUN npm install -f
# Copy the source files into the image
COPY . .
EXPOSE 3000
CMD npm start

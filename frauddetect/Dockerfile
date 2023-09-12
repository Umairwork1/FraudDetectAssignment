FROM node:18
WORKDIR /app
# Copy and download dependencies
COPY package*.json ./
RUN npm install
# Copy the source files into the image
COPY . .
EXPOSE 8080
CMD npm start

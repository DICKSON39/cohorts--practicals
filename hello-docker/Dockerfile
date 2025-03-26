# use a lightweight node.js image
FROM nginx:alpine

#Cpy packages and install dependencies
# COPY package.json package-lock.json ./
# RUN npm install

#copy all the frontend
COPY index.html /usr/share/nginx/html/
COPY app.js /usr/share/nginx/html/

#set a working directory
WORKDIR /app


CMD ["nginx", "-g", "daemon off;"]




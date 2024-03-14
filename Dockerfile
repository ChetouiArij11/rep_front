# Stage 1: Build the Angular app
FROM node:latest as node
WORKDIR /app
COPY . .
COPY package*.json ./
RUN npm install
RUN npm run build

# Stage 2: Serve the Angular app using Nginx
FROM nginx:alpine
COPY --from=node /app/dist/frontend /usr/share/nginx/html
EXPOSE 83
CMD ["nginx", "-g", "daemon off;"]

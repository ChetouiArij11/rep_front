# Stage 1: Build the Angular app
FROM node:18.12.1 as builder
WORKDIR /app
COPY package*.json ./
RUN npm config set registry http://registry.npmjs.org/
RUN npm install --verbose
COPY . .
RUN npm run build

# Stage 2: Set up Nginx to serve the built Angular app
FROM nginx:1.21.4-alpine
COPY --from=builder /app/dist/frontend /usr/share/nginx/html
EXPOSE 8082
CMD ["nginx", "-g", "daemon off;"]

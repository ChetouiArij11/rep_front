# Stage 1: Build the Angular application
FROM node:16.14 as build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve the Angular application with nginx
FROM nginx:alpine

# Copy the build output from the build stage to the nginx public directory
COPY --from=build /app/dist/* /usr/share/nginx/html/

# Copy the nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 to the outside world
EXPOSE 4200

# Command to start nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]

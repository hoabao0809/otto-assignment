# Use an official Node.js runtime as the base image
FROM node:18.12.0-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install the dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Build the React application
RUN npm run build

# Use nginx to serve the static files
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html

# Expose the port nginx will use
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

# Use a base Node.js image
FROM node:18.12.0-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the source code
COPY . .

# Expose the API port
EXPOSE 3001

# Command to run the server
CMD ["node", "index.js"]

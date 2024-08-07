# Use the official Node.js image as a base
FROM node:latest

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Run the build script to compile TypeScript to JavaScript
RUN npm run build

# Expose the port the app runs on
EXPOSE 5001

# Start the application from the dist folder
CMD ["node", "dist/src/index.js"]

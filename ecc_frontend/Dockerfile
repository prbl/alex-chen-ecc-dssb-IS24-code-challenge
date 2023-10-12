# ecc_frontend/Dockerfile

# Use the official Node.js 14 image from DockerHub
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . .

# Install any needed packages specified in package.json with warnings suppressed
RUN npm install --no-audit --legacy-peer-deps 2>&1 | grep -v "npm WARN"

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run npm start when the container launches
CMD ["npm", "start"]

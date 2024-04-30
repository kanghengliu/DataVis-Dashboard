# Use the official Node.js 16 image.
# https://hub.docker.com/_/node
FROM node:16-alpine

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy package.json, package-lock.json, and next.config.js if you have one.
COPY package*.json next.config.js ./

# Install production dependencies.
RUN npm install --production

# Copy local code to the container image.
COPY . .

# Build the application.
RUN npm run build

# Run the web service on container startup using a non-root user.
USER node

# Next.js starts on port 3000. Use the EXPOSE instruction to have it mapped by the docker daemon:
EXPOSE 3000

# Run the web service on container startup.
CMD ["npm", "start"]

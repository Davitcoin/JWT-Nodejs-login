FROM node:lts-alpine

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy your application source code
COPY src ./src

# Copy any additional configuration files (e.g., .env)
COPY .env ./

# Ensure environment variables are used
ENV NODE_ENV production

# Expose the NestJS application port (can be customized)
EXPOSE 3004

# Start the NestJS application in production mode
CMD ["npm", "start:prod"]

FROM postgres:latest
ENV POSTGRES_DB=postgres
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=password
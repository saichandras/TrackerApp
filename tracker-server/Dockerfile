FROM node:latest

# Create and set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies in the container
RUN npm install

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Your app binds to port 3000, make sure you expose this port on the container.
EXPOSE 3000

# Define the command to run your app
CMD [ "npm", "run", "dev"]
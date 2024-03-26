# My Tracker App

## Overview

My Tracker App revolutionizes the way outdoor enthusiasts interact with their environment. Designed with the adventurer in heart, this mobile application offers a seamless blend of technology and nature. Whether you're a runner, hiker, or someone who simply enjoys exploring the outdoors, My Tracker App is your digital companion that logs your journey in the world.

By leveraging the power of React Native, React Context for state management, and the robust back-end technologies like Node.js, Express.js, and MongoDB, this app offers a rich, native experience on both iOS and Android platforms. At its core, My Tracker App allows users to sign in or sign up, create and manage tracks of their outdoor activities, and visualize their paths with beautifully drawn polylines on a map. Each track is a comprehensive list of location points the user has traveled through, enabling a vivid recount of their adventures.

## Key Features

- **User Authentication**: Secure sign-in and sign-up functionality to manage personal track records.
- **Live Tracking**: Initiate tracking to start recording your path. As you move, the app draws your route in real-time on the map.
- **Track Management**: Save your activity once you've finished. Each track is stored with details for future reference.
- **Tracks List**: A dedicated screen to view all your recorded tracks. Select any track to revisit the journey on the map.

<img src="https://user-images.githubusercontent.com/42498264/107465415-eaac7780-6b27-11eb-86a6-609814764dce.gif" width="200" height="400" /> &nbsp; &nbsp; &nbsp; <img src="https://user-images.githubusercontent.com/42498264/107465416-ec763b00-6b27-11eb-874c-ca32f53e2313.gif" width="200" height="400" /> &nbsp; &nbsp; &nbsp; <img src="https://user-images.githubusercontent.com/42498264/107465419-eda76800-6b27-11eb-8831-228abdf4d72b.gif" width="200" height="400" /> &nbsp; &nbsp; &nbsp;

## Technologies

- **Frontend**: Developed with React Native for a seamless native app experience across iOS and Android.
- **State Management**: Uses React Context for efficient handling of the application state.
- **Backend**: Implemented using Node.js with an Express.js framework for robust server-side logic.
- **Database**: Utilizes MongoDB for storing user data and track information.
- **Authentication**: Secures sessions with JSON Web Tokens (JWT).

## Getting Started

Follow these instructions to get My Tracker App up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following installed before proceeding:

- Node.js and npm
- Docker
- Android Studio or Xcode (for emulator support)

### Installation

#### 1. Setting up Docker for Backend and MongoDB

First, you'll need to install Docker on your machine. Docker will be used to containerize your backend and MongoDB database, ensuring a smooth setup process.

- **Install Docker**: Follow the [official Docker installation guide](https://docs.docker.com/get-docker/) for your operating system.

- **Run Backend and MongoDB**:

  Navigate to the project directory and run:

  ```bash
  docker-compose up
  ```

  This command initializes the Node.js server and MongoDB database within Docker containers.

#### 2. Preparing the Frontend

To set up the frontend application:

1. **Navigate to the Frontend Directory**:

   ```bash
   cd tracker-app
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Running the App**:

   - For Android:

     Ensure you have the Android emulator running, then execute:

     ```bash
     npm run android
     ```

   - For iOS:

     Make sure your iOS emulator is up, then run:

     ```bash
     npm run ios
     ```

   It's essential to have either Android Studio or Xcode configured with emulators for this step.

### Configuration

- **API Base URL**: Update the `baseURL` in the `src/api/tracker.js` file to match your backend server's URL.

## Usage

With the installation complete, launch the app on your emulator. New users can sign up to create an account, while existing users can log in. The app allows you to start recording your outdoor activities immediately. Once finished, save your track and view it anytime in the tracks list screen, where you can select any track to view the detailed path you traveled.

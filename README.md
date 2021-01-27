# TrackerApp

An app developed using React Native, React Context to draw polylines along the path traversed by the users while tracking and recording the locations in real-time.
Also, Constructed a database and authentication system using MongoDB, Express APIs, JWT by facilitating users to create an account, store and fetch the recorded track lists, and authenticates the valid-user while the app is paused, restarted, and destroyed.

Server files can be found in TrackerApp/track-server/

For running or building the application, the following needs to be done:-
* Paste the MongoUri (Connect to Application) in TrackerApp/track-server/src/index.js
* Start the server from TrackerApp/track-server/ by the following command-
```
npm run dev
```
* Change the BaseURL to your localhost or ngrok address in TrackerApp/src/api/tracker.js
* Finally build the app.

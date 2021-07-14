# TrackerApp

An app developed using React Native, React Context to draw polylines along the path traversed by the users while tracking and recording the locations in real-time.
Also, Constructed a database and authentication system using MongoDB, Express APIs, JWT by facilitating users to create an account, store and fetch the recorded track lists, and authenticates the valid-user while the app is paused, restarted, and destroyed.

Server files can be found in TrackerApp/track-server/

For running or building the application, the following needs to be done:-
* Paste the MongoUri (Connect to Application) in TrackerApp/track-server/src/index.js
* Install modules and start the server from TrackerApp/track-server/ by the following commands-
```
npm install
npm run dev
```
* Change the BaseURL to your localhost or ngrok address in TrackerApp/src/api/tracker.js
* Finally build the app.

###### Tracker App:-

<img src="https://user-images.githubusercontent.com/42498264/107465415-eaac7780-6b27-11eb-86a6-609814764dce.gif" width="200" height="400" /> &nbsp; &nbsp; &nbsp; <img src="https://user-images.githubusercontent.com/42498264/107465416-ec763b00-6b27-11eb-874c-ca32f53e2313.gif" width="200" height="400" /> &nbsp; &nbsp; &nbsp; <img src="https://user-images.githubusercontent.com/42498264/107465419-eda76800-6b27-11eb-8831-228abdf4d72b.gif" width="200" height="400" /> &nbsp; &nbsp; &nbsp;


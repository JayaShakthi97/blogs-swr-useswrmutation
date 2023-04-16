# Running the application

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

1. Run `npm install` from the project root and install the packages.

2. This application uses JSON server to mock the backend.
Refer [JSON server documentation](https://www.npmjs.com/package/json-server#getting-started) and set it up. Installing the JSON server npm package is sufficient.

3. Run the following command from the project root to start the JSON server.<br>
JSON server will be started in port 4040. If you are changing the port, update the `baseURL` defined in `/src/api/api.ts`.
```
json-server --watch ./db/db.json -p 4040 -d 2000 -r ./db/routes.json
```

4. Run `npm start` and start the React application.
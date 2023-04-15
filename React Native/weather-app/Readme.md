#### Firstly create the expo app or the react-native cli, Here it is Expo

`npx create-expo-app@latest`

#### Install the eslint for the better development process

`npm install eslint --save-dev`

#### Initialize it.

`npm eslint --init`

#### Add some of the othe plugins

`npm install @react-native-community/eslint-config --save-dev`

#### Install the prettier for the better formatting of code.

`npm install --save-dev -save-exact prettier`

#### Create the file called `.prettierrc.js` in the root of the file

#### Add `"lint": "eslint ."` to the script of the `package.json` Then you can run `npm run lint` to run the lint in the program

#### For the Navigation use `NavigationContainer` from the library called `@react-navigation/native`

#### For the secret key or of that sort you can download packages that allow you to do so, in this:

##### `npm install -D react-native-dotenv` is used then after

##### Go to the babel config file and add `plugins: ['module:react-native-dotenv']`

##### Now you can use the `.env` file in the native app you just have to import the secret key he desired module with desired pretext.

###### `#######################################################`

# E-commerce-mobile

E-commerce-mobile is an app created with react-native expo for the OneBitCode bootcamp.

## Installation

First clone the project.

`ssh`
```bash
git clone git@github.com:OneBitCodeBlog/e-commerce-mobile-Dev.git
```

`http`
```bash
git clone https://github.com/OneBitCodeBlog/e-commerce-mobile-Dev.git
```

After cloning, access the project folder and use the package manager [yarn](https://classic.yarnpkg.com/lang/en/) to install dependencies.

```bash
yarn install
```

Or the package manager [npm](https://www.npmjs.com/).

```bash
npm install
```

If you don't have expo-cli installed yet, you will receive a prompt, just type `y` and press the enter key.

## Usage

After the dependencies installation, access the project folder and execute the command bellow

`yarn`
```bash
yarn start
```

`npm`
```bash
npm start
```

After a while, your browser will be open in the Metro bundler page, where you can run the project on your browser, an ios emulator, an android emulator or you can scan a qrcode to execute in your mobile device.

To use this project, you must have the [e-commerce-api-dev](https://github.com/OneBitCodeBlog/e-commerce-Api-Dev) setup and running.

## Api bindings

To use with android emulator, you must run this command after start the app and the emulator:

```bash
adb reverse tcp:3000 tcp:3000
```

To use with [Expo go](https://expo.dev/client), you must run the api server with the command:

```bash
bundle exec rails s -b 0.0.0.0
```

And must change the `baseURL` property from `services/api.ts` to your IP.

Example: 

From:

```ts
const api = axios.create({
  baseURL: 'http://localhost:3000'
});
```

to:

```ts
const api = axios.create({
  // check your local network IP and replace it bellow
  baseURL: 'http://<your IP>:3000'
});
```

## Software dependencies

[NodeJS](https://nodejs.org/en/)

[Android Studio](https://developer.android.com/studio)
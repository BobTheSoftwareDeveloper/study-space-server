# Study Space Server

The backend server for [study-space-react-native](https://github.com/BobTheSoftwareDeveloper/study-space-react-native).

---
## Requirements

For development, you will only need Node.js (Preferably v14) and npm installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###

---

## Install

    $ git clone https://github.com/BobTheSoftwareDeveloper/study-space-server.git
    $ cd study-space-server
    $ npm install

## Configure app

Open `.env.template` then edit it with your settings and API keys. You will need accounts with the following services:

- Google Firebase
- MongoDB
- Azure Computer Vision API
- AWS API
- Google Cloud Platform API

Once the details are filled in, rename `.env.template` to `.env`.

## Running the project

    $ npm run dev

## Build and run for production

    $ npm run build
    $ npm run start

---
Template is adopted from [Node.js project readme template](https://gist.github.com/Igormandello/57d57ee9a9f32a5414009cbe191db432).
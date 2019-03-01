![UI5Lab Logo](https://raw.githubusercontent.com/UI5Lab/UI5Lab-central/master/docs/media/UI5LabLogoPhoenix.png)

# What is it

UI5Lab is a community driven repository for UI5 Custom Control Libraries. It's purpose is to make it easy for everyone to share, retrieve and use UI5 Custom Controls. Contributions welcome!

# UI5Lab-library-simple

A simple control library example that holds custom geometrical controls for testing the UI5Lab library structure.
You may use this repository as a reference to develop or publish your own UI5Lab controls. Have a look at our [documentation](http://ui5lab.io/docs/) for more details. 

> The repository is an example how to create custom [OpenUI5](https://github.com/SAP/openui5) control library using the UI5 build tools & npm modules based on the [library documentation](https://github.com/SAP/openui5/blob/master/docs/controllibraries.md) in the OpenUI5 repository. 

#### Setup

1. Install node.js (get it from [nodejs.org](http://nodejs.org/)).
 * If working behind a proxy, you need to configure it properly (HTTP_PROXY / HTTPS_PROXY / NO_PROXY environment variables)

2. Clone the repository and navigate into it:
```sh
git clone https://github.com/openui5/UI5Lab-library-simple
cd UI5Lab-library-simple
```

3. Install all npm dependencies (also installs all UI5 libraries needed):
```sh
npm install
```


4. Run the postinstall step to copy and configure the browser inside your project for testing your library samples:
```sh
npm run postinstall
```

4. Run a local Web server with the ui5 tools for testing the library and its metadata:
```sh
npm start
```

> **Note:** Run ```npm install --global @ui5/cli``` if the ```ui5``` command is not registered (for more information see [ui5 tooling](https://github.com/SAP/ui5-tooling]))

6. Choose one of the following entry points to test the library

* [UI5Lab  browser](http://localhost:8080/test-resources/ui5lab/browser/index.html) Preview of the library in a local instance of the browser
* [Control Test page](http://localhost:8080/test-resources/ui5lab/geometry/Square.html) Test page for the ui5lab.geometry.Square control
* [QUnit Tests](http://localhost:8080/test-resources/ui5lab/geometry/qunit/Square.qunit.html) A simple QUnit test
* [Testuite](http://localhost:8080/test-resources/ui5lab/geometry/qunit/testsuite.qunit.html) A QUnit testsuite running all unit tests in this library

> The [UI5Lab-browser](https://github.com/openui5/UI5Lab-browser) is loaded as a dependency to display the library content for testing during development. Make sure that your library samples and metadata are properly filled before publishing a library to UI5Lab

## Publishing a library project

1. Maintain the index.json file in the test folder to contain all artifacts and samples. You can test how your library would appear in the browser locally by adding a reference to the libraries.json file

>Note: this metadata is still work in progress and subject to change. We will have to see what the best place and structure for this is in the future
 
2. Run ui5 build tools to create a library preload and the CSS theme build for your library artifacts. Everything (minified and unminified sources) will be created in the dist folder, ready to be published and consumed by other projects
```sh
npm run build
```

3. Publish your package to npm, be sure to include only the metadata and the dist folder to keep the package size small (see .npmignore file for details) 
```sh
npm publish
```
# Directions

* [Homepage](https://ui5lab.io) - the single point of entry for UI5Lab
* [Documentation](https://ui5lab.io/docs) - project overview and tutorials
* [Browser](https://ui5lab.io/browser) - all UI5Lab libraries and examples
* [Demo](https://ui5lab.github.io/UI5Lab-app-simple/index.html) - an example app consuming simple UI5Lab controls

# Troubleshooting

Issues can be created either in this repository or in any of the contributor repositories depending on where the error came from.
Be sure to include enough details and context to reproduce the issue and follow up with you. 

# Contact

We organize this project in [Slack Channel #UI5Lab](https://openui5.slack.com/messages/UI5lab).
If you are interested in what we do and discuss, join with this [invitation link](https://ui5-slack-invite.cfapps.eu10.hana.ondemand.com/) or visit the homepage [https://ui5lab.io](https://ui5lab.io).

*The UI5Lab Community*

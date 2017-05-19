UI5Lab-library-simple extended with a multi-library sample browser

> The repository is a fork of [UI5Lab-library-simple](https://github.com/openui5/UI5Lab-library-simple) with additional metadata and a browser for samples that reads the metadata to display samples from one or more libraries

## Rough idea

The browser app that is still located inside the library project under test/ui5lab/browser should be 
* a helper tool to develop samples and high-level documentation for listing your project in the UI5Lab
* It lists all libraries and samples currently available in your local workspace of one or more libraries
* During development you can test how your samples and artifacts will look like when publishing them to UI5lab
* On the gitlab gh-pages branch this app can be used to showcase and retrieve all kinds of artifacts listed in UI5Lab
* As such, it is a dependency for both design time and run-time of UI5Lab development

## TODOs and ideas
* Replace global libraries.json with a simple (nodejs) discovery service that finds all libraries and samples currently available and returns a json with all relevant information in json format
** Alternative: put static json data at root level or read it from pagacke and bower.json and wait for UI5 tooling to do this for us
* put the browser in a separate project with a dependency on sap.m and sap.f and load it as a dependency in a library project
* browser needs sap.f but library does not, how to deal with nested dependencies? need to reserach on npm and try it out
* library project should simply consume the browser dependency to show all samples currently available in the workspace

*If you like to help us get this working, see the contribution options below*

## Getting started

1. Install node.js (get it from [nodejs.org](http://nodejs.org/)).
 * If working behind a proxy, you need to configure it properly (HTTP_PROXY / HTTPS_PROXY / NO_PROXY environment variables)

2. Clone the repository and navigate into it
```sh
git clone https://github.com/openui5/UI5Lab-library-simple
cd UI5Lab-library-simple
```
3. Install all npm dependencies (also installs all bower dependencies)
```sh
npm install
```

4. Run npm start to lint, build and run a local server (have a look into `Gruntfile.js` to see all the tasks).
```sh
npm start
```

5. Open a test page in your browser: [http://localhost:8080/test-resources/ui5lab/geometry/Square.html](http://localhost:8080/test-resources/ui5lab/geometry/Square.html)

### Directions

[Browser](http://localhost:8080/test-resources/ui5lab/browser/index.html) A sample browser showcasing artifacts from one or more libraries

[Control page](http://localhost:8080/test-resources/ui5lab/geometry/Square.html) An HTML test page instantiating the control

[Test page](http://localhost:8080/test-resources/ui5lab/geometry/qunit/Square.qunit.html) A simple QUnit test

[Testuite](http://localhost:8080/test-resources/ui5lab/geometry/qunit/testsuite.qunit.html) A QUnit testsuite running all unit tests in this library

### Contributing

Instructions how to connect to the community and contribute to the UI5lab project can be found in the [main repository](https://github.com/openui5/UI5Lab/)!

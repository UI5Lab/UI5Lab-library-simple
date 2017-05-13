UI5Lab-library-simple

A simple control library that holds custom geometrical controls for testing in the UI5Lab projects.
Feel free to adopt!

> The repository is an example how to create custom [OpenUI5](https://github.com/SAP/openui5) control library using Grunt & Bower based on the library [documentation](https://github.com/SAP/openui5/blob/master/docs/controllibraries.md) in the OpenUI5 repository. 

## Getting started

* Install node.js (get it from [nodejs.org](http://nodejs.org/)).
 * If working behind a proxy, you need to configure it properly (HTTP_PROXY / HTTPS_PROXY / NO_PROXY environment variables)

* Clone the repository and navigate into it
```sh
git clone https://github.com/openui5/UI5Lab-library-simple
cd UI5Lab-library-simple
```
* Install all npm dependencies (also installs all bower dependencies)
```sh
npm install
```

* Run npm start to lint, build and run a local server (have a look into `Gruntfile.js` to see all the tasks).
```sh
npm start
```

* Open a test page in your browser: [http://localhost:8080/test-resources/ui5lab/geometry/Square.html](http://localhost:8080/test-resources/ui5lab/geometry/Square.html)

### Directions

[Control page](http://localhost:8080/test-resources/ui5lab/geometry/Square.html) An HTML test page instantiating the control

[Test page](http://localhost:8080/test-resources/ui5lab/geometry/qunit/Square.qunit.html) A simple QUnit test

[Testuite](http://localhost:8080/test-resources/ui5lab/geometry/qunit/testsuite.qunit.html) A QUnit testsuite running all unit tests in this library

### Contributing

Instructions how to connect to the community and contribute to the UI5lab project can be found in the [main repository](https://github.com/openui5/UI5Lab/)!

### Credits

Thank you to @matz3 for your input and support!

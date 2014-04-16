neural-network-stock-predictor
==============================

Semester project for COS 470 (Artifical Intelligence) at the University of Maine.

This is an application that utilizes the power of neural networks in order to attempt to predict future stock prices of a specified stock symbol.

---

### Libraries Used

The backend of this application is written in Python, utilizing the following libraries:

- [Flask](http://flask.pocoo.org/)
- [PyBrain](http://pybrain.org/)

The frontend of this application is written in Javascript, utilizing the following libraries:

- My own [grunt-requirejs-angularjs-sass-boilerplate](https://github.com/jakemmarsh/grunt-requirejs-angularjs-sass-boilerplate) (without the SASS)
- [AngularJS](http://angularjs.org/)
- [RequireJS](http://requirejs.org/)

---

### How To Run

In order for the backend to function, the previously mentioned Python libraries must be installed. These can be installed using [pip](http://www.pip-installer.org/en/latest/) with the following commands:

- `pip install pybrain`
- `pip install Flask`

For the frontend, no installation is necessary. However, in order to utilize the supplied Grunt tasks for minification and compilation, [npm](https://www.npmjs.org/) must be installed to run the following command:

- `npm install`

In order to then run the program, simply execute the `server.py` file using Python. This will serve the application at the URL it specifies.
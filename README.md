neural-network-stock-predictor
==============================

Semester project for COS 470 (Artifical Intelligence) at the University of Maine.

This is an application that utilizes the power of back-propagating neural networks in order to attempt to predict future stock prices of a specified stock symbol. Although the power and accuracy of neural networks are based upon the input and training you provide it, they would not usually be the best option for attempting to predict stock prices as we're doing here.

---

## Analytical Approach

If you're not familiar with a neural network, an incredibly basic rundown of how they operate is this:

- You provide them with a list of input nodes and corresponding output node(s), allowing them to 'learn' any patterns
- Adaptive weights and approximations are used and tuned in this learning process
- Once trained, the neural network can be provided with input nodes and return its predicted output node(s) following the learned pattern

In this program, a stock symbol (such as `GOOG`) is provided to the program via the Flask-powered API. This is then used to retrieve historical stock prices for that symbol, via [Kibot's API](http://api.kibot.com). These are then used to retrieve three values for five different days:

- Rolling average
- Rolling maximum
- Rolling minimum

These are paired with the normalized stock price for one of the five days, normalized using the following function:

`((2*price - (maximum + minimum)) / (maximum - minimum))`

After this work is done, the neural network receives a list of five nodes of the format: `[[average, maximum, minimum], normalized price]` for training. Once trained, all we have to provide in the future is `[average, maximum, minimum]` in order to be returned a predicted normalized price. This number is then roughly denormalized using the reverse of the above function, and returned from the API.

---

### Libraries Used

The backend of this application is written in Python, utilizing the [Flask](http://flask.pocoo.org/) framework to create an API.


The frontend of this application is written in Javascript, utilizing the following libraries:

- My own [grunt-requirejs-angularjs-sass-boilerplate](https://github.com/jakemmarsh/grunt-requirejs-angularjs-sass-boilerplate) (without the SASS)
- [AngularJS](http://angularjs.org/)
- [RequireJS](http://requirejs.org/)
- [Bootstrap CSS](http://getbootstrap.com/)

---

### How To Run

In order for the backend to function, the previously mentioned Python framework must be installed. This can be installed using [pip](http://www.pip-installer.org/en/latest/) with the following command:

- `pip install Flask`

For the frontend, no installation is necessary. However, in order to utilize the supplied Grunt tasks for minification and compilation, [npm](https://www.npmjs.org/) must be installed to run the following command:

- `npm install`

In order to then run the program, execute `npm start`. This will compile and serve the application at the URL specified.

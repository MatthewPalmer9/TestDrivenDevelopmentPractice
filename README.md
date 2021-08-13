# Test-Driven Development (TDD) Practice
This repo serves only as record of my TDD practice. Please explore it to your heart's content. This repo was developed upon via a course on [PluralSight](https://app.pluralsight.com/).

## Self-Notes
### Mocha & Chai
Make sure to `npm install mocha chai`. If cloning this repo, simply `npm i` the dependencies in `package.json`. Also, `npm install mocha -g` so that Mocha is installed globally & so you can use mocha from the command line.

### How do I run your tests?
Once you've cloned this repo onto your local machine with `git clone https://github.com/MatthewPalmer9/TestDrivenDevelopmentPractice`, make sure you're inside of the working directory and type `mocha test.mjs`.

In the event you have multiple test files, you can run them all together. This repo contains `test.mjs` and `moreTests.mjs`.
To run both, simply type `mocha test.mjs moreTests.mjs`. You will find that both test files run successfully.
# Test-Driven Development (TDD) Practice
This repo serves only as record of my TDD practice. Please explore it to your heart's content. This repo was developed upon via a course on [PluralSight](https://app.pluralsight.com/).

### Repo Directory
- [Node/JavaScript Testing](https://github.com/MatthewPalmer9/TestDrivenDevelopmentPractice/tree/master/Node) **YOU ARE HERE**
- [Python Testing](https://github.com/MatthewPalmer9/TestDrivenDevelopmentPractice/tree/master/Python)

## Dependencies 
| Dependency | URL       |
|------------|-----------|
| mocha      | [Link](https://www.npmjs.com/package/mocha)      |
| chai       | [Link](https://www.npmjs.com/package/chai)       |
| sinon      | [Link](https://www.npmjs.com/package/sinon)      |
| gulp       | [Link](https://www.npmjs.com/package/gulp)       |
| gulp-mocha | [Link](https://www.npmjs.com/package/gulp-mocha) |
| gulp-util  | [Link](https://www.npmjs.com/package/gulp-util)  |
| playwright | [Link](https://www.npmjs.com/package/playwright) |
| uuid       | [Link](https://www.npmjs.com/package/uuid)       |
| istanbul   | [Link](https://www.npmjs.com/package/istanbul)   |
| typescript | [Link](https://www.npmjs.com/package/typescript) |
| ts-node    | [Link](https://www.npmjs.com/package/ts-node)    |

## Getting started
To get this project running locally:
- Clone this repo `git clone https://github.com/MatthewPalmer9/TestDrivenDevelopmentPractice`
- Run `npm install` to ensure the dependencies are installed from `package.json`.
- Run `npm install mocha -g` to install `mocha` globally and enable use from your terminal.
- Run `npm install gulp -g` to install `gulp` globally and enable use from your terminal.

## Notes
### How do I run your tests?
Once you've cloned this repo onto your local machine, make sure you're inside of the working directory and type `mocha test/test.mjs`.

In the event you have multiple test files, you can run them all together. This repo contains `test.mjs`, `moreTests.mjs`, and `sinonTests.mjs`.
To run both, simply type `mocha test/test.mjs test/moreTests.mjs test/sinonTests.mjs`. You will find that both test files run successfully.

This can get messy if you have a LOT of tests. So alternatively, the shorthand version by typing `mocha` will suffice as `mocha` will look for the `test` folder and run all tests inside of it.

### How do I automate your tests?
There are three dependencies installed to make this possible. `gulp`, `gulp-mocha` and `gulp-util`. There is some code written in `gulpfile.js` that will automate testing and re-run tests is ANYTHING changes in `test/*.mjs`, which just watches all files for changes that end in `.mjs`. To start the automated testing, type `gulp watch-mocha` into your terminal. There is a default gulp task built to shorten that command. You can start automated testing by just typing `gulp` as well.

To exit testing, press `CTRL + C`.

### How can I perform cross-browser tests?
This repository relies on Live Server extension in Visual Studio Code. When running `index.html` from Live Server, it should live at `http://localhost:5500/Node/src/`. That is the URL set in `index.ts`. You can change this as needed.
 
In this repository, we use Playwright with TypeScript + TS-Node. We first create our `tsconfig.json` file with `npx tsc --init --sourceMap --rootDir src --outDir lib`. To run it **while using experimental modules**, run `node --loader ts-node/esm ./src/index.ts`. If your project does not use experimental modules, `npx ts-node ./src/index.ts` will work just fine.

**NOTE:** The configurations in `tsconfig.json` were altered from the default to include functionality with ESNext Modules.
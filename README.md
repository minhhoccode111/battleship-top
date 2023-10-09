# project battleship

## introduction

- we are doing TDD, it's important that we don't get overwhelmed
- simply take it one step at a time
- write a test, then make it pass
- isolate every bit of application functionality from the actual DOM manipulation bits
- can use mocks to make sure that DOM methods like appendChild are being called, but try our best to keep those things outside of the app logic

## live demos

- [this project](https://minhhoccode111.github.io/battleship-top/)
- [all projects' live demos](https://minhhoccode111.github.io/all-projects-live-demos/)

## assignment

- [x] begin your app by creating the `Ship` _class/factory_ ✅ 2023-10-06
  - [x] your 'ships' will have: ✅ 2023-10-06
    - [x] their length ✅ 2023-10-06
    - [x] number of times they've been hit ✅ 2023-10-06
    - [x] whether or not they've been sunk ✅ 2023-10-06
  - [x] **REMEMBER** you only have to test your object's public interface ✅ 2023-10-06
    - [x] only methods or properties that are used outside of your 'ship' object need unit tests ✅ 2023-10-06
  - [x] ships should have a `hit()` function that increase the number of 'hits' in your ship ✅ 2023-10-06
  - [x] `isSunk()` should be a function that calculates it based on their length and the number of 'hits' they've taken ✅ 2023-10-06
- [x] create `Gameboard` _class/factory_ ✅ 2023-10-06
  - [x] note that we have not yet created any Used Interface ✅ 2023-10-06
    - [x] we should know our code is coming together by running the tests ✅ 2023-10-06
    - [x] we shouldn't be relying on `console.log` or DOM methods to make sure our code is doing what you expect it to ✅ 2023-10-06
  - [x] gameboards should be able to place ships at specific coordinates by calling the ship factory function ✅ 2023-10-06
  - [x] gameboards should have a `receiveAttack` function that takes a pair of coordinates ✅ 2023-10-06
    - [x] then determines whether or not the attack hit a ship ✅ 2023-10-06
    - [x] then sends the 'hit' function to the correct ship, or records the coordinates of the missed shot ✅ 2023-10-06
  - [x] gameboards should keep track of missed attacks so they can display them properly ✅ 2023-10-06
  - [x] gameboards should be able to report whether of not all of their ships have been sunk ✅ 2023-10-06
- [x] create `Player` ✅ 2023-10-06
  - [x] players can take turns playing the game by attacking the enemy gameboard ✅ 2023-10-06
  - [x] the game is played against the computer ✅ 2023-10-06
    - [x] make the 'computer' capable of making random plays ✅ 2023-10-06
    - [x] the AI does not have to be smart, but it should know whether or not a given move is legal (i.e. it shouldn't shoot the same coordinate twice) ✅ 2023-10-06
- [ ] create the main game loop and a module for DOM interaction
  - [x] at _this_ point it is appropriate to begin crafting your User Interface ✅ 2023-10-06
  - [x] the game loop should set up a new game by creating Players and Gameboards ✅ 2023-10-06
    - [x] for now just populate each Gameboard with predetermined coordinates ✅ 2023-10-06
    - [x] you can implement a system for allowing players to place their ships later ✅ 2023-10-06
  - [x] they'll leave the HTML implementation up to us for now, but we should display both the player's boards and render them using information from the Gameboard class/factory ✅ 2023-10-07
    - [x] we need methods to render the gameboards and to take user input for attacking ✅ 2023-10-08
    - [x] for attacks, let the used click on a coordinate in the enemy Gameboard ✅ 2023-10-08
  - [x] the game loop should step through the game turn by turn using only methods from other objects ✅ 2023-10-08
    - [x] if at any point you are tempted to write a new function inside the game loop, step back and figure out which class or module that function should belong to ✅ 2023-10-08
  - [x] create conditions so that the game ends once one player's ships have all been sunk. This function is appropriate for the Game module ✅ 2023-10-08
- [x] finish it up
  - [x] there are several options available for letting users place their ships
    - [ ] you can let them type coordinates for each ship,
    - [ ] or investigate implementing drag and drop
    - [x] do it random ✅ 2023-10-08
  - [ ] you can polish the intelligence of the computer player by having it try adjacent slots after getting a 'hit'
  - [ ] optionally, create a 2 player option that lets users take turns by passing the device back and forth
    - [ ] if you're going to go this route, make sure the game is playable on a mobile screen and implement a 'pass device' screen so that players don't see each others boards

## what I've learned

setup a `template` repository on Github to use for every projects

use a default Github's `.gitignore` file

setup environment with `npm`

using `html-webpack-plugin` to generate a new `index.html` file

- use `title` property (with a name string value) to set generated `index.html` file's title
- use `filename` property (with a file string value `.html`) to set generated file's name (`index.html` by default but we can change it using this property)
- use `template` property (with a path string value `src/template.html`) to set generated `index.html` file base on `template.html` file

`const mock = jest.spyOn(ship, 'hit');` to watch for the times `hit` method in `ship` object has been called

`throw new Error()` if anything goes wrong

using factory functions return object with only getters to read encapsulated variables to make sure everything private and can't be changed

setup `scripts` in `package.json` file

setup `Jest` testing to test

setup `babel` to use `import` and `export`

set setter/getters inside a `class` using `Object.defineProperties` so that property cannot be modified or `delete`

```js
class A {
  constructor() {
    const _private = 'private';
    this.public = 'public';
    Object.defineProperties(this, {
      private: {
        get() {
          return _private;
        },
      },
      cannotChange: {
        get() {
          return 'cannot change';
        },
        set(newPublic) {
          this.public = newPublic;
        },
      },
    });
  }
}
```

edit code snippets of VS Code to use `describe` + `tab` will be, to write test faster

```js
// snippet.code-snippets
"Use to write describes faster": {
"scope": "javascript,typescript",
"prefix": "describe",
"body": ["describe(`${1: what to tests?}`,()=>{\n\t$0\n})"],
"description": "write tests faster"
},
```

instead of pasting a full `svg` code of an icon to `html` file, we can create a new file like `icon.svg` and paste the `svg` code to it and inside `html` file, we can create a `<img src="./path/to/the/svg/file.svg">` to display it nicer in `html` file

use both `html-webpack-plugin` to dynamic generate a `index.html` file base on `template.html` and dynamic `import` an icon in `javascript` and bundle it then `appendChild` to the newly generated `index.html` file. Or we can set `background-img` with `css` using `background` property and link to the actual assets (the css file will then be bundled and so do the `img` we use to set `background-img`)

we can use the `once` option when adding an event listener to make the listener automatically removed after it is triggered once. Pass the `{once: true}` object as the third argument to the `addEventListener()` method, like this: `element.addEventListener('click', (e) => {}, {once: true})`

fix bug of `placeShip` method, make it check through all possible `cell`s to make sure if the `ship` is safe to place on these cells and store these cells, then we loop through these cells again to actually place ship on these cell (before that we check cell and place ship at the same time so when something throw, we dit not remove the ships we placed before the `throw`, and that's how the bug occur)

instead of silently `return` when a condition meets and I want to stop my program, I can use `throw new Error()` to specify where the bug is and combine with `try ... catch` block to try another way, it's just clearer than silent `return`

use question operator `?.` so that if object doesn't have the require method or property then it will return `undefined` instead of `throw new TypeError()`

```js
const ship = null;
ship.hit(); // throw new TypeError(`Cannot read properties of null (reading 'hit')`)
ship?.hit(); // undefined
```

in order to test in `browser`-like environment (instead of `node` environment by default which will throw an error if it encounter the statement like `document.querySelector()`) we first have to install the environment with `npm install jest-environment-jsdom` then inside the file `jest.config.js` we need to set the property `testEnvironment: 'jsdom'` so that everything works

## idea to implement

- smarter AI which is 'smart' without cheat
- animations
- refactor solution

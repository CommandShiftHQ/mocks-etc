# mocks etc

## Get Started

- Clone this repo
- Run `npm install`
- Run `npm test`

## lamp / bulb - dummies, stubs and spies

`lamp.test.js` include examples of using Jest's mock function `jest.fn()` to create test **dummies**, **stubs** and **spies**.

These dummies, stubs and spies are used to create a fake `Bulb` object, and allow us to make assertions about how the `Lamp` class interacts with a `Bulb` object.

In particular, we expect the fake `Bulb` to have an `isWorking` property which is a boolean, and have a method `electrify`, which will receive a number as a parameter.

Note that there is no concrete relationship between the `Lamp` and any particular `Bulb` implementation.

In practice, two `Bulb` classes are provided. Both of these meet the interface required by `Lamp` and so we can use them both - but in practice they are implemented (and behave) very differently.

### Try it out

- Run `node index.js`
- Switch the `require` statements in `index.js` so that the `christmas-bulb` class is used instead.
- Run `node index.js` again

## lottery / number generator - mocks

This example demonstrates how to use `jest.fn` to create a **mock**.

The `Lottery` class has a dependency which is capable of generating random numbers. But randomness is a hard thing to test - it is inherently unpredictable!

To get around this, we can create a fake `random` function, and control what it returns. This makes our test reliable - we are just testing how our class interacts with its dependency.

If you look in the `lottery.js` file, you will see the true implementation of how to generate random numbers.

### Try it out 2

- Run `node lottery.js` - you should see 6 random numbers printed to the screen.

# mocks etc

## Get Started

- Clone this repo
- Run `npm install`
- Run `npm test`

## Test Doubles

Test doubles allow us to provide fake versions of the modules that our code depends on. This allows us to write much simpler tests, and more modular, maintainable and loosely-coupled code.

This is very closely related to the dependency inversion principle and the dependency inversion pattern.

The idea is that we test the implicit contracts between high level classes and their lower level dependencies. We test how a high level class interacts with its dependencies, and how it responds when the dependency behaves in different ways.

A good rule of thumb is that changing code in one class should never break the test for a different class!

## lamp / bulb - dummies, stubs and spies

`lamp.test.js` include examples of using Jest's mock function `jest.fn()` to create test **dummies**, **stubs** and **spies**.

These dummies, stubs and spies are used to create a fake `Bulb` object, and allow us to make assertions about how the `Lamp` class interacts with a `Bulb` object.

In particular, we expect the fake `Bulb` to have an `isWorking` property which is a boolean, and have a method `electrify`, which will receive a number as a parameter.

Think about what the test for `Lamp` would look like if we didn't use `jest.fn` to create test doubles - if we actually `require`d `bulb.js` and used a real `Bulb`.

- The test would be really clunky, we would have to know a lot about how the bulb worked.
- If we had separate unit tests for the `Bulb` class, we would probably repeat a lot of that logic in the `Lamp` test too.
- If the bulb class changed, it could break our lamp tests. Changing the `Bulb` class should only break `Bulb` tests!

Note that with the actual solution using test doubles, there is no concrete relationship between the `Lamp` and any particular `Bulb` implementation. The two files never require each other, they are brought together in `index.js` - the entry point of our little program.

In practice, two `Bulb` classes are provided. Both of these meet the interface required by `Lamp` and so we can use them both - but in practice they are implemented (and behave) very differently.

How would we test the combination of `Lamp` and `ChristmasBulb` without using doubles? It would be the same clunkiness of testing `Lamp` and `Bulb` all over again! With doubles, we don't have to test it at all.

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

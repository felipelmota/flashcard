**Have a question or suggestion?**
Contact me on [Linkedin](https://www.linkedin.com/in/felipelmota), or open a pull request on this project.

---

**Programming assignment for the [React course](https://www.udacity.com/course/react-nanodegree--nd019) program.**

# Flashcards

[![Maintainability](https://api.codeclimate.com/v1/badges/821c7de345721309c27b/maintainability)](https://codeclimate.com/github/felipelmota/flashcard/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/821c7de345721309c27b/test_coverage)](https://codeclimate.com/github/felipelmota/flashcard/test_coverage)

> For the UdaciCards project, you will build a mobile application (Android or iOS - or both) that allows users to study collections of flashcards. The app will allow users to create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks.

Built with React Native and Redux and React Router. This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app#getting-started).
For this assignment there was no starter template provided (apart from the simple backend API).

---

## Limitations and things that are missing

The focus of the assignment was on functionality, rather than styling, so I did not spend so much time building the UI (no animations, few loading messages, etc). 
The scope of the assignment was very limited, so it is not possible to edit entries. Also, this project has no automated tests.

---

## Feature

* Local state is automatically synced with AsyncStorage
* Notifications API is used for setting daily reminders

---

## Stack

* [react](https://facebook.github.io/react) (16.0.0)
* [react-native](https://facebook.github.io/react-native/) (0.50.3)
* [react-navigation](https://github.com/react-community/react-navigation) (1.0.0-beta.21) Native Tab and Stack navigation
* [redux](https://github.com/reactjs/redux) (3.7.2) Manage state
* [react-redux](https://github.com/reactjs/react-redux/) (5.0.6) Redux bindings for React

* [npm](https://www.npmjs.com) (3.10.10)
* [create-react-app](https://github.com/facebookincubator/create-react-app) (1.0.10) Tool to bootstrap React applications
* [lodash](https://github.com/lodash/lodash) (4.17.4) JavaScript utility library
* [react-native-flip-card](https://www.npmjs.com/package/react-native-flip-card) (3.5.2) Card flipping animation

The folder structure loosely follow a [ducks](https://medium.freecodecamp.org/scaling-your-redux-app-with-ducks-6115955638be) architecture.

---

## Installation

Install all necessary modules to run the current project.

```bash
$ git clone https://github.com/felipelmota/flashcard
$ cd flashcards
$ yarn install
```

---

## Build

```bash
$ yarn start
```

For more details on how to run build the app and deploy it to application stores, please follow [expo](https://docs.expo.io/versions/latest/introduction/project-lifecycle.html) documentation.

- Tested on a Motorola Moto G2 Android device and on the Genymotion emulator.
- Tested on a iPhone 8 iOS device and on the simulator.

---

## Lint

Run lint tools.

```bash
$ cd flashcards
$ yarn run eslint
```
---

## Contributing

1. Fork it
2. Create your feature branch with specs (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

---

## Contributors

* Felipe Mota ([felipelmota](https://github.com/felipelmota))

---

## License

This project is licensed under the MIT License.
import React from 'react'
import reducer from './app/rootReducer'
import CustomStatusBar from './ui/CustomStatusBar'
import setDailyNotification from './utils/notifications'

import { purple } from './utils/colors'
import { Provider } from 'react-redux'
import { MainNavigator } from './app/navigation'
import { applyMiddleware, createStore } from 'redux'
import { StyleSheet, View, Text } from 'react-native'
import { fetchStateFromStorage, submitStateToStorage } from './utils/storage'

/* Update local storage after each store update */
const storageMiddleware = store => next => (action) => {
  next(action)
  submitStateToStorage(store.getState())
}

const store = createStore(reducer, applyMiddleware(storageMiddleware))

class App extends React.Component {
  state = { store, isLoading: false }

  // Adapted from: https://medium.com/@sumitkushwaha/syncing-redux-store-with-asyncstorage-in-react-native-2b8b890b9ca1
  componentWillMount() {
    this.setState({ isLoading: true })

    setDailyNotification({ startingFromDay: 0, overwriteExisting: false })

    fetchStateFromStorage(this.props.dispatch).then((result) => {
      console.log('[Storage] Loading', result)

      if (result && result.length) {
        this.setState({
          store: createStore(reducer, JSON.parse(result), applyMiddleware(storageMiddleware))
        })
      } else {
        this.setState({ store })
      }

      this.setState({ isLoading: false })
    }).catch((error) => {
      console.error('[Storage] Unable to load state', error)

      this.setState({ store })
      this.setState({ isLoading: false })
    })
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Loading...</Text>
        </View>
      )
    }

    return (
      <Provider store={this.state.store}>
        <View style={styles.container}>
          <CustomStatusBar backgroundColor={purple} barStyle="light-content" />
          <MainNavigator />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})

export default App

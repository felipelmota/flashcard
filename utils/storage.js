import { AsyncStorage } from 'react-native'

const STORAGE_KEY = 'mobile-flashcards'

export function fetchStateFromStorage() {
  return AsyncStorage.getItem(STORAGE_KEY)
}

export function submitStateToStorage(state) {
  const stateJson = JSON.stringify(state)
  AsyncStorage.setItem(STORAGE_KEY, stateJson)
  console.log('Updating storage: ', state)
}
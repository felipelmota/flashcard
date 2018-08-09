import React from 'react'
import globalStyles from '../ui/styles' 
import TextButton from '../ui/TextButton'
import { NavigationActions } from 'react-navigation'
import { gray, black, white } from '../utils/colors'
import { View, Text, StyleSheet } from 'react-native'
import { getDeck, getMostRecentDeck } from './reducer'
import { connect } from "react-redux"


class DeckView extends React.Component {  
  static navigationOptions = {
    title: 'View Deck'
  }

  navigateTo(routeName, params={}) {
    const navigate = NavigationActions.navigate({ routeName: routeName, params: params})
    this.props.navigation.dispatch(navigate)
  }
   
  render() {
    const deck = this.props.deck

    return (
      <View style={[styles.container, styles.center]}>
        <Text style={styles.deckTitle}>{deck.title}</Text>
        <Text style={styles.deckDescription}>{deck.cards.length} {deck.cards.length === 1 ? 'card' : 'cards'}</Text>
        <View style={styles.bottom}>
          <TextButton
            style={styles.secondaryButton} txtStyle={styles.secondaryButtonText}
            onPress={() => this.navigateTo('CardAdd', { deck })}
          >
            Add card
          </TextButton>
          <TextButton onPress={() => this.navigateTo('DeckPlay', { deck })}>
            Start quiz!
          </TextButton>
        </View>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  ...globalStyles,
  center: {
    alignItems: 'center'
  }, deckTitle: {
    fontSize: 35,
  }, deckDescription: {
    color: gray,
    fontSize: 25,
    padding: 20
  }, bottom: {
    alignSelf: 'stretch',
  }, secondaryButton: {
    marginBottom: 10,
    backgroundColor: white,
    borderColor: black,
    borderWidth: 1
  }, secondaryButtonText: {
    color: black
  }
})

function mapStateToProps(state, ownProps) {
  const deckId = ownProps.navigation.state.params.deckId
  let deck

  if (deckId) {
    deck = getDeck(state, deckId)
  } else {
    deck = getMostRecentDeck(state)
  }
   return {
    deck: deck
  }
}

export default connect(mapStateToProps, null)(DeckView)

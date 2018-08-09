import React from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import globalStyles from '../ui/styles' 
import { gray, black, white } from '../utils/colors'
import TextButton from '../ui/TextButton'
import { connect } from "react-redux"
 
class DeckView extends React.Component {  
  submit() {
    Alert.alert('title', 'lol')
  }
   
  render() {
    const { deck } = this.props.navigation.state.params

    return (
      <View style={[styles.container, styles.center]}>
        <Text style={styles.deckTitle}>{deck.title}</Text>
        <Text style={styles.deckDescription}>{deck.cards.length} cards</Text>
        <View style={styles.bottom}>
          <TextButton style={styles.secondaryButton} txtStyle={styles.secondaryButtonText}>
            Add cards
          </TextButton>
          <TextButton>Play!</TextButton>
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
    fontSize: 45,
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

// function mapStateToProps(state) {
//   return {
//     deck: getDeckByIdyId(state, id)
//   }
// }

export default connect(null, null)(DeckView)

import React from 'react'
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native'
import { purple, white } from "../utils/colors";

class DeckAdd extends React.Component {
  state = { form: { title: 'Write your title here..' } }

  submit() {
      const { title } = this.state.form
      Alert.alert('title', title)
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.inputLabel}> Type the title of your deck </Text>
          <TextInput style={styels.textInput} 
            onChange={(text) => this.setState({ form: { title: text }})} 
            value={this.state.form.title}>
            
          </TextInput>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  }, content: {
    marginVertical: 20
  }, inputLabel: {
    fontSize: 25
  }, textInput: {
    fontSize: 20,
    marginVertical: 20
  }, submitButton: {
    backgroundColor: purple,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  }, submitButtonText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  }
})
  
export default DeckAdd
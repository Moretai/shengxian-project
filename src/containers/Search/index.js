import React from 'react'
import {
  View,
  Text,
  Button
} from 'react-native'

export default class Search extends React.Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <View>
        <Text>Search Page</Text>
        <Button
            onPress={() => navigate('Chat', { user: 'MORE'})}
            title="Chat with Lucy"
          />
      </View>
    )
  }
}

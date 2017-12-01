import React from 'react';
import { Provider, connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actions from './src/actions/hello'
import store from './src/store';
import { StyleSheet, Text, View } from 'react-native';

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }
  fnPress() {
    // this.props.actions.hello(this.state.show)
    this.props.actions.helloRequested(true)
    // this.setState({ show: !this.state.show})
  }
  render() {
    const { hello } = this.props
    const info = hello.get('status')
    const { show } = this.state
    return (
      <Provider store={store}>
        <View style={styles.container} >
          {info && <Text>Hello</Text> }
          <Text onPress={this.fnPress.bind(this)}>World</Text>
        </View>
      </Provider>
    );
  }
}

const mapStateToProps = state => ({
  hello: state.get('hello')
})
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})
const HomeHoc = connect(mapStateToProps, mapDispatchToProps)(Home)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <HomeHoc />
      </Provider>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

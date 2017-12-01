import React from 'react';
import { Provider, connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actions from './src/actions/hello'
import store from './src/store';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import {
  TabNavigator,
  StackNavigator,
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './src/containers/Home'
import Search from './src/containers/Search'
import ShoppingCar from './src/containers/ShoppingCar'
import User from './src/containers/User'


class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat with Lucy',
  };
  render() {
    const { params } = this.props.navigation.state
    return (
      <View>
        <Text>Chat with {params.user}</Text>
      </View>
    );
  }
}

const Nav = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Search: {
    screen: Search,
    // path: '/detail',
    navigationOptions: {
      title: 'HELO',
      tabBarLabel: 'Search',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-person' : 'ios-person-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  ShoppingCar: {
    screen: ShoppingCar,
    navigationOptions: {
      tabBarLabel: '购物车',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-person' : 'ios-person-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  User: {
    screen: User,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-person' : 'ios-person-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
});

const SimpleApp = StackNavigator({
  Main: {
    screen: Nav,
    navigationOptions: {
        title: 'My Chats',
      },
  },
  Chat: { screen: ChatScreen },
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <SimpleApp />
      </Provider>
    );
  }
}

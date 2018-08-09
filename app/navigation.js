
import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import DeckView from '../deck/DeckView'
import CardAdd from '../card/CardAdd'
import DeckPlay from '../deck/DeckPlay'
import DeckList from '../deck/DeckList'
import DeckAdd from '../deck/DeckAdd'
import { purple, white } from '../utils/colors'

const TabNavigatorConfig = {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === "ios" ? purple : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === "ios" ? white : purple,
      shadowColor: "rgba(0, 0, 0, 0.24)",
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
}

const RouteConfigs = {
  ListDecks: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <Ionicons name="ios-bookmarks" size={30} color={tintColor} />
    }
  },
  AddDeck: {
    screen: DeckAdd,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: ({ tintColor }) => <FontAwesome name="plus-square" size={30} color={tintColor} />
    }
  }
}

export const Tabs = Platform.OS === "ios" ? createBottomTabNavigator(RouteConfigs, TabNavigatorConfig) : createMaterialTopTabNavigator(RouteConfigs, TabNavigatorConfig)

export const MainNavigator = createStackNavigator({
  Home: {
    screen: Tabs,
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      }
    }
  },
  CardAdd: {
    screen: CardAdd
  },
  DeckPlay: {
    screen: DeckPlay
  }
})

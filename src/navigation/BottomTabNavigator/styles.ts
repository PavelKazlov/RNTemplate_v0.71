import { Colors, TabBar } from '@/constants'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  navigatorContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  navigator: {
    borderTopColor: 'transparent',
    backgroundColor: 'transparent',
    shadowColor: 'black',
    height: TabBar.tabBarHeight,
    borderRadius: TabBar.buttonRadius,
    elevation: 60,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 7,
    paddingTop: 5,
  },
  firstTabBarButton: {
    borderTopLeftRadius: TabBar.buttonRadius,
  },
  lastTabBarButton: {
    borderTopRightRadius: TabBar.buttonRadius,
  },
  tabBarButton: {
    top: TabBar.tabBarOffset,
  },
  tabBarItemStyle: {
    backgroundColor: Colors.primaryBackgroundColor,
  },
  iosFillLine: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 30,
    backgroundColor: Colors.primaryBackgroundColor,
  },
})

import {Colors, Screens} from '@/constants'
import {TaskCreationScreen} from '@/screens/TaskCreationScreen'
import {TasksListScreen} from '@/screens/TasksListScreen'
import {
  BottomTabBar,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import React, {useCallback, useState} from 'react'
import {Platform, TouchableOpacity, View} from 'react-native'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import {styles} from './styles'

const CustomTabBarButton = ({customStyle, ...props}: any) => {
  const newProps = {
    ...props,
    style: [...props.style, customStyle],
    activeOpacity: 1,
  }
  return <TouchableOpacity {...newProps} />
}

const TabBar = (props: any) => {
  const insets = useSafeAreaInsets()
  const isIosFillLine = Platform.OS === 'ios' && insets.bottom > 30

  return (
    <View style={[styles.navigatorContainer, {bottom: isIosFillLine ? 30 : 0}]}>
      <BottomTabBar {...props} />
    </View>
  )
}

const getTabBarIconColor = (
  focused: boolean,
  activeTintColor: string,
  inActiveTintColor: string,
) => (focused ? activeTintColor : inActiveTintColor)

const Tab = createBottomTabNavigator()

export const BottomTabNavigator = () => {
  // const insets = useSafeAreaInsets()
  // const isIosFillLine = Platform.OS === 'ios' && insets.bottom > 30

  const screenOptions: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarLabelStyle: {marginBottom: 20},
    tabBarStyle: styles.navigator,
    tabBarItemStyle: [
      {
        ...styles.tabBarItemStyle,
        backgroundColor: Colors.primaryBackgroundColor,
      },
      // {padding: isIosFillLine ? 10 : 0},
    ],
    tabBarActiveTintColor: getTabBarIconColor(
      true,
      Colors.primary,
      Colors.primaryBottomTabIconColor,
    ),
    tabBarInactiveTintColor: getTabBarIconColor(
      false,
      Colors.primary,
      Colors.primaryBottomTabIconColor,
    ),
  }

  // const [isMenuButtonVisible, setMenuButtonVisibility] = useState(false)

  // const handleSetMenuButtonVisibility = useCallback(() => {
  //   if (isMenuButtonVisible) {
  //     setMenuButtonVisibility(false)
  //   } else {
  //     setMenuButtonVisibility(true)
  //   }
  // }, [isMenuButtonVisible, setMenuButtonVisibility])

  return (
    <Tab.Navigator
      initialRouteName={Screens.tasksListScreen}
      // tabBar={props => <TabBar {...props} />}
      screenOptions={screenOptions}>
      <Tab.Screen
        name={Screens.tasksListScreen}
        component={TasksListScreen}
        options={{
          tabBarLabel: 'TasksListScreen',
          // tabBarIcon: ({focused}) => (
          //   <IconPortfolio
          //     fill={getTabBarIconColor(
          //       focused,
          //       Colors.primary,
          //       Colors.primaryBottomTabIconColor,
          //     )}
          //   />
          // ),
          // tabBarButton: props => (
          //   <CustomTabBarButton
          //     {...props}
          //     customStyle={[
          //       styles.tabBarButton,
          //       {height: isIosFillLine ? 90 : 60},
          //     ]}
          //   />
          // ),
        }}
      />
      <Tab.Screen
        name={Screens.taskCreationScreen}
        component={TaskCreationScreen}
        options={{
          tabBarLabel: 'taskCreationScreen',
          // tabBarButton: () => (
          //   <TabBarCentralButton
          //     bgColor={Colors.primaryBackgroundColor}
          //     onPress={handleSetMenuButtonVisibility}
          //   />
          // ),
        }}
      />
    </Tab.Navigator>
  )
}

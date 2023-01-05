import {Screens} from '@/constants'
import {TaskCreationScreen} from '@/screens/TaskCreationScreen'
import {TasksListScreen} from '@/screens/TasksListScreen'

import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack'

import React from 'react'

export const Stack = createNativeStackNavigator()

const stackNavigatorOptions: NativeStackNavigationOptions = {
  headerShadowVisible: false,
  headerBackVisible: true,
  headerBackTitleVisible: false,
  // header: (props) => <Header {...props} />,
}

export const ApplicationStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={stackNavigatorOptions}>
      <Stack.Screen
        name={Screens.tasksListScreen}
        options={{headerShown: false}}
        component={TasksListScreen}
      />
      <Stack.Screen
        name={Screens.taskCreationScreen}
        component={TaskCreationScreen}
      />
    </Stack.Navigator>
  )
}

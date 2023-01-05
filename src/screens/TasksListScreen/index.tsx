import {Button} from '@/components'
import {Screens} from '@/constants'
import {useNavigation} from '@react-navigation/native'
import React from 'react'
import {Text, View} from 'react-native'
import {styles} from './styles'

export const TasksListScreen = () => {
  const navigation = useNavigation()
  const onAddTaskPressHandler = () =>
    navigation.navigate(Screens.taskCreationScreen)
  return (
    <View style={styles.container}>
      <Text>Your Tasks List Coming soon...</Text>
      <Button onPress={onAddTaskPressHandler}>Add New Task</Button>
    </View>
  )
}

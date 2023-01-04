import {Colors} from '@/constants'
import React, {ReactNode} from 'react'
import {
  ActivityIndicator,
  GestureResponderEvent,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native'
import {styles} from './styles'

export type ButtonProps = {
  children: ReactNode
  onPress?: (event: GestureResponderEvent) => void
  disabled?: boolean
  outlined?: boolean
  buttonStyle?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
  loading?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onPress,
  outlined,
  buttonStyle,
  textStyle,
  disabled,
  loading,
}) => {
  return (
    <TouchableOpacity
      style={[
        {...styles.button},
        outlined && {...styles.outlinedButton},

        buttonStyle,
      ]}
      onPress={onPress}
      disabled={disabled}>
      {loading ? (
        <ActivityIndicator
          color={outlined ? Colors.primary : Colors.primaryBackgroundColor}
        />
      ) : (
        <Text
          style={[
            {...styles.text},
            outlined && {...styles.outlinedText},

            textStyle,
          ]}>
          {children}
        </Text>
      )}
    </TouchableOpacity>
  )
}

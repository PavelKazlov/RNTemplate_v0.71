import { Colors } from '@/constants'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  button: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 5,
    padding: 12,
  },
  disabledErrorButton: {
    backgroundColor: Colors.disabledError,
    borderColor: Colors.disabledError,
  },
  disabledButton: {
    backgroundColor: Colors.disabledPrimary,
    borderColor: Colors.disabledPrimary,
  },
  text: {
    color: Colors.primaryBackgroundColor,
    fontSize: 16,
    lineHeight: 22,
    textTransform: 'capitalize',
  },
  disabledText: {
    color: Colors.primaryBackgroundColor,
  },

  // outline styles
  outlinedButton: {
    backgroundColor: Colors.primaryBackgroundColor,
  },
  outlinedText: {
    color: Colors.primary,
  },
  disabledOutlinedButton: {
    backgroundColor: Colors.primaryBackgroundColor,
  },
  disabledOutlinedText: {
    color: Colors.disabledPrimary,
  },
})

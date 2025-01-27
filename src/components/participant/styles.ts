import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#1f1e25',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    marginBottom: 16,
  },
  name: {
    flex: 1,
    color: '#ffffff',
    padding: 16,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 56,
    height: 56,
    borderRadius: 4,
    backgroundColor: '#e23c44',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 24,
  },
})

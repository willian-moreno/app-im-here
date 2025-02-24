import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
  },
  eventName: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
  },
  eventDate: {
    color: '#6b6b6b',
    fontSize: 16,
  },
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 36,
    marginBottom: 48,
    borderRadius: 4,
    backgroundColor: '#1f1e25',
  },
  input: {
    flex: 1,
    backgroundColor: '#1f1e25',
    height: 56,
    borderRadius: 4,
    color: '#ffffff',
    padding: 16,
    fontSize: 16,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 56,
    height: 56,
    borderRadius: 4,
    backgroundColor: '#31cf67',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 24,
  },
  listEmptyText: {
    color: '#ffffff',
    fontSize: 14,
    textAlign: 'center',
  },
})

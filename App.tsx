import { StatusBar } from 'react-native'
import { Home } from './src/screens/home'

export function App() {
  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={'transparent'} translucent />
      <Home />
    </>
  )
}

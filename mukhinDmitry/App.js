import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './components/navbar/TabNavigator'
import KzrStore from './components/labs/lab4/Store'
import { Provider } from 'react-redux'

export default function kzrApp() {
  return (
    <Provider store={KzrStore}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </Provider>
  )
}

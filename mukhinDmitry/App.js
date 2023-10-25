import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './components/navbar/TabNavigator'
import KzrStore from './components/labs/lab4/Store'
import { Provider } from 'react-redux'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import client from './components/apollo/apollo'

const apollo = new ApolloClient({
  uri: 'https://nefu-server.herokuapp.com/',
  cache: new InMemoryCache(),
})

export default function kzrApp() {
  return (
    <ApolloProvider client={client}>
      <Provider store={KzrStore}>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </Provider>
    </ApolloProvider>
  )
}

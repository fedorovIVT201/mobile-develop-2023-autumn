import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigation from "./navigator/MainStackNavigation";




export default function App() {
  return (
    <NavigationContainer>
      <MainStackNavigation />
    </NavigationContainer>
  )
}


import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigation from "./navigation/MainStackNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <MainStackNavigation />
    </NavigationContainer>
  );
}

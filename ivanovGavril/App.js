import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./screens/stackNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}

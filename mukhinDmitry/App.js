import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './components/navbar/TabNavigator'

export default function kzrApp() {
	return (
		<NavigationContainer>
			<TabNavigator />
		</NavigationContainer>
	);
};
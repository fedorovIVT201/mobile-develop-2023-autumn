import { StyleSheet, Image, Text } from 'react-native';
import KzrLab1 from '../labs/lab1/Lab1'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
	return (
		<Tab.Navigator screenOptions = {({ route }) => ({
			headerStyle: {
				backgroundColor: '#5E5E5E',
			},
			headerTitleAlign: 'center',
			tabBarLabel: ({ focused }) => {
				return <Text style={{
					color: focused ? "#FFFFFF" : "#A5A5A5",
					top: -8
				}}>
					{route.name}
				</Text>
			},
			tabBarStyle: {
				elevation: 0,
				backgroundColor: '#5E5E5E',
				borderTopColor: '#5E5E5E',
				borderTopWidth: 1,
				height: 69.81,
			}
			})}
		>
			<Tab.Screen name='Lab 1'
				component={KzrLab1}
				options={{
					title: 'Color lightener',
					headerTitleStyle: {
						fontWeight: 'bold',
						color: '#FFFFFF'
					},
					tabBarIcon: () => {
						return <Image source = {require('../../assets/navbar/tab-1.png')} style={styles.icon} />;
					},
				}}
			/>
		</Tab.Navigator>
	);
};

const styles = StyleSheet.create({
	icon: {
		width: 32,
		height: 32,
		resizeMode: 'stretch',
	}
});

export default TabNavigator;
import { Button, SafeAreaView, Text, View } from 'react-native';
import PayPalModule from './ios/src/paypalNativeModule';

const App = () => {
	return (
		<SafeAreaView
			style={{
				flex: 1,
			}}
		>
			<Text
				style={{
					flex: 1,
					textAlign: 'center',
				}}
			>
				PayPal JS Sdk Test
			</Text>
			<Button
				onPress={() => {
					console.log('Js');
					PayPalModule.createCalendarEvent(
						'testName',
						'testLocation',
					);
				}}
				title='Test'
			/>
		</SafeAreaView>
	);
};

export default App;

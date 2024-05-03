import { Button, SafeAreaView, Text, View } from 'react-native';
import PayPalModule from './ios/src/paypalNativeModule';
import { useState } from 'react';

const App = () => {
	const [paymentResp, setPaymentResp] = useState('');
	return (
		<SafeAreaView
			style={{
				flex: 1,
			}}
		>
			<Text
				style={{
					textAlign: 'center',
				}}
			>
				PayPal JS Sdk Test
			</Text>
			<Button
				onPress={() => {
					console.log('Js');
					PayPalModule.testPayment()
						.then((res) => {
							console.log('RESULT : ' + JSON.stringify(res));
							setPaymentResp(res);
						})
						.catch((err) => {
							console.log(
								'RESULT: ' + JSON.stringify(err.message),
							);
							setPaymentResp(err.message);
						});
				}}
				title='Test'
			/>
			<Text>{paymentResp}</Text>
		</SafeAreaView>
	);
};

export default App;

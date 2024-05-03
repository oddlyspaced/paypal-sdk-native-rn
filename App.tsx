import { Pressable, SafeAreaView, Text, View } from 'react-native';
import PayPalModule from './ios/src/paypalNativeModule';
import { useState } from 'react';

const App = () => {
	// Order ID for payment
	const orderId = '16F15971BK088445N';
	const [paymentResp, setPaymentResp] = useState(
		'Payment Status Response will be shown here',
	);
	return (
		<SafeAreaView
			style={{
				flex: 1,
				backgroundColor: '#FFFFFF',
			}}
		>
			<View
				style={{
					flex: 1,
					padding: 24,
				}}
			>
				<Text
					style={{
						textAlign: 'center',
						fontWeight: '600',
						fontSize: 24,
						marginTop: 24,
						color: '#000000',
					}}
				>
					PayPal Native SDK Test
				</Text>
				<View
					style={{
						flex: 1,
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Pressable
						style={{
							borderRadius: 8,
							backgroundColor: '#8000FF',
							paddingVertical: 12,
							paddingHorizontal: 24,
						}}
						onPress={() => {
							PayPalModule.testPayment(orderId)
								.then((res) => {
									console.log(
										'Result: ' + JSON.stringify(res),
									);
									setPaymentResp(res);
								})
								.catch((err) => {
									console.log(
										'Error: ' + JSON.stringify(err.message),
									);
									setPaymentResp(err.message);
								});
						}}
					>
						<Text
							style={{
								color: '#FFFFFF',
								fontWeight: '500',
							}}
						>
							Trigger PayPal Payment
						</Text>
					</Pressable>
					<Text
						style={{
							marginTop: 16,
							color: '#000000',
						}}
					>
						{paymentResp}
					</Text>
					<Pressable
						style={{
							backgroundColor: '#F8F6FF',
							borderRadius: 8,
							marginTop: 8,
						}}
						onPress={() =>
							setPaymentResp(
								'Payment Status Response will be shown here',
							)
						}
					>
						<Text
							style={{
								paddingVertical: 8,
								paddingHorizontal: 12,
								color: '#6600CC',
							}}
						>
							Clear Response
						</Text>
					</Pressable>
				</View>
				<Text
					style={{
						marginBottom: 24,
						textAlign: 'center',
						color: '#000000',
					}}
				>
					Headout - PayPal Web Payment POC using Native Module with
					iOS and Android SDK
				</Text>
			</View>
		</SafeAreaView>
	);
};

export default App;

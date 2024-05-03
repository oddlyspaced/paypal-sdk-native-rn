import { NativeModules } from 'react-native';
const { PayPalNativeModule } = NativeModules;

interface IPayPalNativeModule {
    testPayment(orderId: string): Promise<any>;
}

export default PayPalNativeModule as IPayPalNativeModule;

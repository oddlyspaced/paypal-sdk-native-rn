import { NativeModules } from 'react-native';
const { PayPalNativeModule } = NativeModules;

interface IPayPalNativeModule {
    testPayment(): Promise<any>;
}

export default PayPalNativeModule as IPayPalNativeModule;

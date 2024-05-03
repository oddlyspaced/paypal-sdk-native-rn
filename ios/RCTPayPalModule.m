//
//  RCTPayPalModule.m
//  paypaltest
//
//  Created by Hardik Srivastava on 03/05/24.
//

#import "RCTPayPalModule.h"
#import <React/RCTLog.h>

@interface RCT_EXTERN_MODULE(PayPalNativeModule, NSObject)
RCT_EXTERN_METHOD(testPayment: (nonnull NSString *)orderId resolve: (RCTPromiseResolveBlock) resolve reject: (RCTPromiseRejectBlock) reject);
@end

//
//  RCTPayPalModule.m
//  paypaltest
//
//  Created by Hardik Srivastava on 03/05/24.
//

#import "RCTPayPalModule.h"
#import <React/RCTLog.h>

@interface RCT_EXTERN_MODULE(PayPalNativeModule, NSObject)
RCT_EXTERN_METHOD(dummyLog: (RCTPromiseResolveBlock) resolve reject: (RCTPromiseRejectBlock) reject);
@end

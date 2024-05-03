//
//  PayPalNativeModule.swift
//  paypaltest
//
//  Created by Hardik Srivastava on 03/05/24.
//

import Foundation

@objc(PayPalNativeModule)
class PayPalNativeModule: NSObject {
  
  @objc
  func dummyLog(_ resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
    NSLog("Dummy Log")
    resolve(true)
  }
}

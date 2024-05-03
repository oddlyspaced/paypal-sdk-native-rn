//
//  PayPalNativeModule.swift
//  paypaltest
//
//  Created by Hardik Srivastava on 03/05/24.
//

import Foundation
import CorePayments
import PayPalWebPayments

@objc(PayPalNativeModule)
class PayPalNativeModule: UIViewController {
  
  
  let payPalWebCheckoutClient = PayPalWebCheckoutClient(config: CoreConfig(clientID: "ASLqLf4pnWuBshW8Qh8z_DRUbIv2Cgs3Ft8aauLm9Z-MO9FZx1INSo38nW109o_Xvu88P3tly88XbJMR", environment: .sandbox))
  private var resolver: RCTPromiseResolveBlock?
  private var rejector: RCTPromiseRejectBlock?

  
  @objc
  func testPayment(_ resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
    self.resolver = resolve
    self.rejector = reject
    let payPalWebRequest = PayPalWebCheckoutRequest(orderID: "7YR26434UB1332834", fundingSource: .paypal)
    checkoutWithPayPal(payPalWebRequest: payPalWebRequest)
  }
  
  
}

extension PayPalNativeModule: PayPalWebCheckoutDelegate {
  func checkoutWithPayPal(payPalWebRequest: PayPalWebCheckoutRequest) {
    payPalWebCheckoutClient.delegate = self
    payPalWebCheckoutClient.start(request: payPalWebRequest)
  }
  // MARK: - PayPalWebCheckoutDelegate
  func payPal(_ payPalClient: PayPalWebCheckoutClient, didFinishWithResult result: PayPalWebCheckoutResult) {
    // order was approved and is ready to be captured/authorized (see step 7)
    resolver?("Payment successful")
  }
  func payPal(_ payPalClient: PayPalWebCheckoutClient, didFinishWithError error: CoreSDKError) {
    // handle the error by accessing `error.localizedDescription`
    rejector?("ERROR", "Payment Error", nil)
  }
  func payPalDidCancel(_ payPalClient: PayPalWebCheckoutClient) {
    rejector?("ERROR", "Payment Cancelled", nil)
    // the user canceled
  }
}

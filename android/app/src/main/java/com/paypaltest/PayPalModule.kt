package com.paypaltest

import android.util.Log
import androidx.appcompat.app.AppCompatActivity
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.paypal.android.corepayments.CoreConfig
import com.paypal.android.corepayments.Environment
import com.paypal.android.corepayments.PayPalSDKError
import com.paypal.android.paypalwebpayments.PayPalWebCheckoutClient
import com.paypal.android.paypalwebpayments.PayPalWebCheckoutFundingSource
import com.paypal.android.paypalwebpayments.PayPalWebCheckoutListener
import com.paypal.android.paypalwebpayments.PayPalWebCheckoutRequest
import com.paypal.android.paypalwebpayments.PayPalWebCheckoutResult

class PayPalModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName() = "PayPalNativeModule"

    @ReactMethod fun testPayment(orderId: String, promiseCallback: Promise) {
        val config = CoreConfig("ASLqLf4pnWuBshW8Qh8z_DRUbIv2Cgs3Ft8aauLm9Z-MO9FZx1INSo38nW109o_Xvu88P3tly88XbJMR", environment = Environment.SANDBOX)
        currentActivity?.let {
            (it.application as MainApplication).paymentPromiseCallback = promiseCallback
        }
        currentActivity?.runOnUiThread {
            val payPalWebCheckoutClient = PayPalWebCheckoutClient(currentActivity as AppCompatActivity, config, "custom-url-scheme")
            payPalWebCheckoutClient.listener = object : PayPalWebCheckoutListener {
                override fun onPayPalWebSuccess(result: PayPalWebCheckoutResult) {
                    // order was approved and is ready to be captured/authorized (see step 7)
                    Log.d("PAYMENT", "SUCCESSFUL")
                    promiseCallback.resolve("Payment Successful - Android")
                }
                override fun onPayPalWebFailure(error: PayPalSDKError) {
                    // handle the error
                    Log.d("ERROR ", error.message.toString())
                    promiseCallback.reject("Error", "Payment Failed - Android")
                }
                override fun onPayPalWebCanceled() {
                    // the user canceled the flow
                    Log.d("PAYMENT", "CANCELED")
                    promiseCallback.reject("Error", "Payment Cancelled - Android")
                }
            }
            val payPalWebCheckoutRequest = PayPalWebCheckoutRequest(orderId, fundingSource = PayPalWebCheckoutFundingSource.PAYPAL)
            payPalWebCheckoutClient.start(payPalWebCheckoutRequest)
        }

    }

}
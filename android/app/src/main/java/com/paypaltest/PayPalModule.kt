package com.paypaltest

import android.util.Log
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class PayPalModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName() = "PayPalNativeModule"

    @ReactMethod fun testPayment(promiseCallback: Promise) {
        Log.d("RE", "REACT CALLS")
        promiseCallback.resolve("working")
    }

}
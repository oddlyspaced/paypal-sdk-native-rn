package com.paypaltest

import android.content.Intent
import android.os.Bundle
import android.os.PersistableBundle
import android.util.Log
import androidx.appcompat.app.AppCompatActivity
import com.paypaltest.databinding.PaypalResultBinding

class PayPalResultActivity: AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        Log.d("PayPal", "Payment Successful")
        (application as MainApplication).paymentPromiseCallback?.resolve("Payment Successful Android")
        finish()
        startActivity(Intent(this, MainActivity::class.java).apply {
            setFlags(Intent.FLAG_ACTIVITY_REORDER_TO_FRONT)
        })

    }
}
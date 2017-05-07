# VerioCheck Node.js Library

VerioCheck Node library provides convenient access to the VerioCheck API calls from
applications written in server-side JavaScript.

Please keep in mind that this package is for use with server-side Node that
uses VerioCheck secret keys. 

VerioCheck provides FREE Address validation, Identity Verification, SMS Verification, Contact Data Cleaning, Name & Gender Validation, Email & IP  Validation.


## Signup for FREE API Keys

You can Signup for Free API Keys at [https://veriocheck.com/signup](https://veriocheck.com/signup)


## Documentation

See the [API docs](https://veriocheck.com/api-docs).

## Installation

Install the package with:

    npm install veriocheck

## Usage

The package needs to be configured with your account's secret key which is
available in your [VerioCheck Dashboard](https://veriocheck.com/account/dashboard). Require it with the key's
value:

``` js
var VerioCheck = require('./veriocheck/index.js')("YOUR_PRIVATE_KEY", "YOUR_AUTH_CODE");


VerioCheck.validateKey(function(err, res){
		console.log(err,res);
});

var inputNameParams = {"fname": "jjohni", "lname": "doe"};
VerioCheck.nameCheck(inputNameParams, function(err, res){
		console.log(err,res);
});

```

## Methods

This module contains easy access to the following methods. All these methods accept (inputJSONParams, CallbackFunction). Refer to the VerioCheck.nameCheck example above. Refer to API documentation for required parameters.

regeneratePublicKey, addressCheck, verifyIdentity, cleanAndVerify, smsCreateCode, smsVerifyCode, smsVerificationStatus, nameCheck, emailCheck, ipCheck


## More Information

 * [VerioCheck Website](https://www.veriocheck.com)
 * [VerioCheck API Documentation](https://veriocheck.com/api-docs)
 * [VerioCheck Free Signup](https://veriocheck.com/signup)


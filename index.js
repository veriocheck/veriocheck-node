//process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
//var gURL = "https://localhost/api/v1/";

var request = require('request');
var gURL = "https://www.veriocheck.com/api/v1/";


function VerioCheck(API_KEY, API_AUTH) {
  this.API_KEY = API_KEY;
  this.API_AUTH = API_AUTH;

  if (!(this instanceof VerioCheck)) {
    return new VerioCheck(API_KEY, API_AUTH);
  }
}

VerioCheck.prototype.validateKey = function(callback){
	callAPI("validatekey", null, function(err, resp){
		callback(err, resp);
		return;	
	});
};

VerioCheck.prototype.regeneratePublicKey = function(params, callback){
	callAPI("regenerate_publickey", params, function(err, resp){
		callback(err, resp);
		return;	
	});
};

VerioCheck.prototype.addressCheck = function(params, callback){
	callAPI("address", params, function(err, resp){
		callback(err, resp);
		return;	
	});
};

VerioCheck.prototype.verifyIdentity = function(params, callback){
	callAPI("identity", params, function(err, resp){
		callback(err, resp);
		return;	
	});
};

VerioCheck.prototype.cleanAndVerify = function(params, callback){
	callAPI("cleanandverify", params, function(err, resp){
		callback(err, resp);
		return;	
	});
};

VerioCheck.prototype.smsCreateCode = function(params, callback){
	callAPI("sms_createcode", params, function(err, resp){
		callback(err, resp);
		return;	
	});
};

VerioCheck.prototype.smsVerifyCode = function(params, callback){
	callAPI("sms_verifycode", params, function(err, resp){
		callback(err, resp);
		return;	
	});
};

VerioCheck.prototype.smsVerificationStatus = function(params, callback){
	callAPI("sms_verificationstatus", params, function(err, resp){
		callback(err, resp);
		return;	
	});
};

VerioCheck.prototype.nameCheck = function(params, callback){
	callAPI("namecheck", params, function(err, resp){
		callback(err, resp);
		return;	
	});
};

VerioCheck.prototype.emailCheck = function(params, callback){
	callAPI("emailcheck", params, function(err, resp){
		callback(err, resp);
		return;	
	});
};

VerioCheck.prototype.ipCheck = function(params, callback){
	callAPI("ipcheck", params, function(err, resp){
		callback(err, resp);
		return;	
	});
};


function callAPI(apimethod, params, callback){
	var serializedParams = "?key=" + this.API_KEY + "&auth=" + this.API_AUTH + "&";
	if(params != null){
			serializedParams += Object.keys(params).map(function(k) {
											 return encodeURIComponent(k) + '=' + encodeURIComponent(params[k])
										}).join('&');
	}
	
	request(gURL + apimethod + '/' + serializedParams, function (error, response, body) {
		if(error || (response && response.statusCode != 200)){
			callback(body, null);
		}else{
			callback(null, JSON.parse(body));
		}
/*	  console.log('error:', error); // Print the error if one occurred 
	  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
	  console.log('body:', body); // Print the HTML for the Google homepage. 
	  */
	});
	
};




module.exports = VerioCheck;



var VerioCheck = require('./veriocheck/index.js')("YOUR_PRIVATE_KEY", "YOUR_AUTH_CODE");


VerioCheck.validateKey(function(err, res){
		console.log(err,res);
});

var inputNameParams = {"fname": "jjohni", "lname": "doe"};
VerioCheck.nameCheck(inputNameParams, function(err, res){
		console.log(err,res);
});

function dontSpillTheBeans(secret) {
	var obj = {};

	obj.getSecret = function() {
		return secret;
	};

	obj.setSecret = function(newSecret) {
		secret = newSecret;
	};

	return obj;
}

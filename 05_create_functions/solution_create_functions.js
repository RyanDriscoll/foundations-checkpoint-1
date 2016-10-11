function createFunctions(num) {
	var funcArr = [];
	var myFuncMaker = function(val) {
		return function() {
			return val;
		}
	};

	for (var i = 0; i < num; i++) {
		funcArr.push(myFuncMaker(i));
	}
	return funcArr;
}

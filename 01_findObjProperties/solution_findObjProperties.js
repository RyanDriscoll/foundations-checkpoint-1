function findObjPropsHasOwn(obj) {
	var keyArr = [];
	for (var key in obj) {
		if (obj.hasOwnProperty(key)) {
			keyArr.push(key);
		}
	}
	return keyArr.join(', ');
}

function findObjKeys(obj) {
	var keyArr = Object.keys(obj);
	return keyArr.join(', ');
}

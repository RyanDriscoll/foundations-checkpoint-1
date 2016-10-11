function rightTriangle(num) {
	var triangle = '';
	var star = '*';
	for (var i = num; i > 0; i--) {
		triangle += star.repeat(i) + '\n';
	}
	return triangle.slice(0, triangle.length - 1);
}

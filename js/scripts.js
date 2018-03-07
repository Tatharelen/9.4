function drawTree(n) {
	var star = '';
	for (var i = 0; i < n; i++) {
		star += '*';
	}
	console.log(star);
}

drawTree(1);
drawTree(2);
drawTree(3);
drawTree(4);
drawTree(5);
drawTree(6);
drawTree(7);
drawTree(8);
drawTree(9);
drawTree(10);

/*

function drawTree(n) {
	var star = '';
	for (var i = 0; i < n; i++) {
		for (var j = 0; j < i; j++) {
		star += '*';	
		}
		
	}
	console.log(star);
}

Kiedy star += '*' jest wewnątrz drugiej pętli for drawTree(2) zwraca "*"
drawTree(4) zwraca '******'. Kiedy jest w pierwszym for wszystko jest ok,
ale wtedy druga pętla wydaje się zbędna. Co mi umyka? 

*/









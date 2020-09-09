var ar = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
function fromListToObject(arr) {
	var rv = {};
	for (var i = 0; i < arr.length; ++i){
		rv[i] = arr[i];
	}
    return rv;
}
console.log(fromListToObject(ar))
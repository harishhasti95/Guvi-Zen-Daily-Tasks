var ar= [[['firstName', 'Vasanth'], ['lastName', 'Raja'], ['age', 24], ['role', 'JSWizard']], [['firstName', 'Sri'], ['lastName', 'Devi'], ['age', 28], ['role', 'Coder']]];
function transformEmployeeData(arr) {
	var tranformEmployeeList = [];
	for(i=0;i<arr.length;i++){
		var dic = {}
		for(j=0;j<arr[i].length;j++){
			let key = arr[i][j][0];value = arr[i][j][1];
			dic[key] = value;
		}
		tranformEmployeeList.push(dic);
	}

	return tranformEmployeeList;
}
console.log(transformEmployeeData(ar));
var arr1 = [1, 2, 3, 4, 5];
var arr2 = [6, 7, 8, 9, 10];
var med = function(a,b){
	var mergeArr = [];
    mergeArr = arr1.concat(arr2).sort((a, b) => a - b);
    var n = mergeArr.length;
    return (n % 2 === 0 ? (mergeArr[n / 2] + mergeArr[(n / 2) - 1]) / 2 : mergeArr[n / 2])
}
console.log(med(arr1,arr2));

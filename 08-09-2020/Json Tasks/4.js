var ar = ['GUVI','I','am','a geek'];
function transformFirstAndLast(arr) {
 var newObject = {}
 newObject[arr[0]] = arr[arr.length-1];
 return newObject;
}
console.log(transformFirstAndLast(ar));
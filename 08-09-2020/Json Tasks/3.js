var ob = {name: 'ISRO', age: 35, role: 'Scientist'};
function convertListToObject(obj) {
	var res = [];
	var ke = Object.keys(obj);
	for(i=0;i<ke.length;i++){
		var b = []
		b.push(ke[i]);
		b.push(obj[(ke[i])])
		res.push(b)
	}
	return res
}
console.log(convertListToObject(ob));
/* Convert all the strings to title caps in a string array */
var str = 'haris is sleeping after he ate'
str = str.split(' ');
str = str.map(x => x.charAt(0).toUpperCase()+x.slice(1))
console.log(str)

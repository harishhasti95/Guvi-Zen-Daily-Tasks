var arr = ["hari", "aua", "refer", "tabat"];
var palindromes = arr.filter((str) => {
	var re = /[^A-Za-z0-9]/g;
	var modString = str.toLowerCase().replace(re, '');
	return (modString == modString.split('').reverse().join(''))
});
console.log(palindromes);

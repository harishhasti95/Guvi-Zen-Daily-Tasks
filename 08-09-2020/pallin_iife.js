let rev = function(a){
	var b = a.split('');
	b = b.reverse();
	return b.join('');
}
var arr = ['harah','saras','kkln'];
(function (arr) {
	var res = []; p = 0;
    for(i=0;i<arr.length;i++){
        if(arr[i]==rev(arr[i])){
            res[p] = arr[i];
            p+=1;
        }
    }
    console.log(res)
})(arr);

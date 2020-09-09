var ar = [1,3,4]
(function (arr){
	var res = []; p = 0;
    for(i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            res[p] = arr[i];
            p+=1;

        }
    }
    console.log(res)
})(ar)
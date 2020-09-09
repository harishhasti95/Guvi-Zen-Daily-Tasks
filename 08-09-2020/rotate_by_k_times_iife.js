let rot = function(a){
	var temp = a[0];k=a.length-1
    for(i=0;i<a.length-1;i++){
        a[i]=a[i+1];
    }
    a[k] = temp;
    return a
}
var ar = [1,2,3,4];k=2;
(function (arr,n){
    for(j=1;j<=n;j++){
        rot(arr);
    }
    console.log(arr);
})(ar,k)

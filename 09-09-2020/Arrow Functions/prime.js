var prime = function(a){
    var ab = true;
    if(a%2===0&&a>2){
        return 'no'
    }else if(a==2||a==3){
        return 'yes'
    }else if(a>=3){
        for(i=3;i<=Math.sqrt(a);i++){
            if(a%i===0){
                ab=false;
                break;
            }
        }
        if(ab===true){return 'yes'}
        else if(ab===false){return 'no'}
    }
}
var arr = [2,3,5,6,7,8];
arr = arr.filter((num)=>(prime(num)=='yes'))
console.log(arr)
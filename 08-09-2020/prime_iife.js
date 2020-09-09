var prime = function(a){
  var ab = true;
  if(a%2===0&&a>2){
      return 'no'
  }else if(a==2 || a==3){
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

var ar = [2,3,4,5];
(function (arr){
  var res = [];p=0;
  for(i=0;i<arr.length;i++){
    if(prime(arr[i])=='yes'){
      res[p]=arr[i];p+=1;
    }
  }
  console.log(res)
})(ar)

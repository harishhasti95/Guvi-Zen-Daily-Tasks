function something(oper,arr) {
      var parm1 = 100 , param2 = 20;
      console.log(eval(arr[oper](parm1, param2)))
    }

function add(a,b){
  return a+b;
}

function sub(a,b){
  return a-b;
}

function mul(a,b){
  return a*b;
}

function div(a,b){
  return a/b;
}

let aa = [add,sub,mul,div];

something(0,aa); // 120
something(2,aa); // 2000
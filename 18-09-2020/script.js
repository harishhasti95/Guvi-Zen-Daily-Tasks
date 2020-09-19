function disp(val) 
		{ 
			document.getElementById("result").value+=val 
		} 		
//function that evaluates the digit and return result 
function solve() 
        { 
            let x = document.getElementById("result").value 
            let y = eval(x) 
            document.getElementById("result").value = y 
        } 
//function that clear the display 
function clr() 
        { 
            document.getElementById("result").value = "" 
        } 

function set_att(arr, fun)
        {
            var l = document.createElement('div');
            l.setAttribute('class','col-3');
            var l1 = document.createElement('input');
            l1.classList.add('button');

            l1.setAttribute('type', 'button');
            l1.setAttribute('value',arr[0]);
            l1.setAttribute('id',arr[1]);
            l1.setAttribute('onclick',fun);
            l.appendChild(l1);
            return l

        }
var d1 = document.createElement('div');
d1.classList.add('container');
d1.style.backgroundColor ='rgb(230, 170, 179)';
d1.style.borderRadius = '25px';


var d11 = document.createElement('div');
d11.classList.add('row');
d11.style.border = '3px solid lightblue';
d11.style.padding = '5px';
d11.style.height = 'auto';
d11.style.fontSize = '40px';
d11.style.borderRadius = '25px';

var d111 = document.createElement('div');
d111.setAttribute('class', 'col-9');
var d1111 = document.createElement('input');
d1111.setAttribute('type','text');
d1111.setAttribute('id','result');
d111.appendChild(d1111);
var d112 = document.createElement('div');
d112.setAttribute('class','col-3');
var d1121 = document.createElement('input');
d1121.classList.add('button');

d1121.setAttribute('type','button');
d1121.setAttribute('value','C');
d1121.setAttribute('id','clear');
d1121.setAttribute('onclick','clr()');

d112.appendChild(d1121);

d11.appendChild(d111);
d11.appendChild(d112);


var d12 = document.createElement('div');
d12.setAttribute('class','row');
d12.classList.add('row');
d12.style.border = '3px solid lightblue';
d12.style.padding = '5px';
d12.style.height = 'auto';
d12.style.fontSize = '40px';
d12.style.borderRadius = '25px';
var d121=set_att(['1','one'], "disp('1')");
var d122=set_att(['2','two'], "disp('2')");
var d123=set_att(['3','three'], "disp('3')");
var d124=set_att(['/','divide'], "disp('/')");
d12.appendChild(d121);
d12.appendChild(d122);
d12.appendChild(d123);
d12.appendChild(d124);
var d13 = document.createElement('div');
d13.setAttribute('class','row');
d13.classList.add('row');
d13.style.border = '3px solid lightblue';
d13.style.padding = '5px';
d13.style.height = 'auto';
d13.style.fontSize = '40px';
d13.style.borderRadius = '25px';
var d131=set_att(['4','four'], "disp('4')");
var d132=set_att(['5','five'], "disp('5')");
var d133=set_att(['6','six'], "disp('6')");
var d134=set_att(['-','minus'], "disp('-')");
d13.appendChild(d131);
d13.appendChild(d132);
d13.appendChild(d133);
d13.appendChild(d134);
var d14 = document.createElement('div');
d14.setAttribute('class','row');
d14.classList.add('row');
d14.style.border = '3px solid lightblue';
d14.style.padding = '5px';
d14.style.height = 'auto';
d14.style.fontSize = '40px';
d14.style.borderRadius = '25px';
var d141=set_att(['7','seven'], "disp('7')");
var d142=set_att(['8','eight'], "disp('8')");
var d143=set_att(['9','nine'], "disp('9')");
var d144=set_att(['+','plus'], "disp('+')");
d14.appendChild(d141);
d14.appendChild(d142);
d14.appendChild(d143);
d14.appendChild(d144);
var d15 = document.createElement('div');
d15.setAttribute('class','row');
d15.classList.add('row');
d15.style.border = '3px solid lightblue';
d15.style.padding = '5px';
d15.style.height = 'auto';
d15.style.fontSize = '40px';
d15.style.borderRadius = '25px';
var d151=set_att(['.','dot'], "disp('.')");
var d152=set_att(['0','zero'], "disp('0')");
var d153=set_att(['=','equal'], "solve()");
var d154=set_att(['*','multiply'], "disp('*')");
d15.appendChild(d151);
d15.appendChild(d152);
d15.appendChild(d153);
d15.appendChild(d154);
d1.appendChild(d11);
d1.appendChild(d12);
d1.appendChild(d13);
d1.appendChild(d14);
d1.appendChild(d15);
document.body.append(d1);
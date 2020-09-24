function getRandom(min,max){
    var temp = Math.floor(Math.random() * (max-min) + min);
    var sp = temp.toString().split('');
    if(new Set(sp).size != sp.length){
        getRandom(min,max);
    }else{
        document.getElementById('p').innerHTML = temp;
        return
    }
    getRandom(min,max);
}



var d1 = document.createElement('div');
d1.setAttribute('class','rand');

var d11 = document.createElement('button');
d11.setAttribute('class','but');
d11.setAttribute('id','bu1');
d11.setAttribute('type','button');
d11.setAttribute('onclick','getRandom(10000000,99999999)');
d11.innerHTML = 'Click here to generate 8 digit random number which is unique';

var d12 = document.createElement('br');

var d13 = document.createElement('p');
d13.setAttribute('id','p')

d1.appendChild(d11);
d1.appendChild(d12);
d1.appendChild(d13);

document.body.append(d1);

var d2 = document.createElement('div');
d2.setAttribute('class','dob');

var d21 = document.createElement('div');
d21.setAttribute('class','dobv');

d21.innerHTML = 'Enter DOB ';


var d211 = document.createElement('input');
d211.setAttribute('class','dateText')
d211.value = "Month/Day/Year";

var d22 = document.createElement('div');
d22.setAttribute('class','dobv');
d22.innerHTML = 'Year difference = '
var d221 = document.createElement('span');
d211.setAttribute('class','dobv1')


var d23 = document.createElement('div');
d23.setAttribute('class','dobv');
d23.innerHTML = 'Month difference = '
var d231 = document.createElement('span');
d231.setAttribute('class','dobv1')


var d24 = document.createElement('div');
d24.setAttribute('class','dobv');
d24.innerHTML = 'Days difference = '
var d241 = document.createElement('span');
d241.setAttribute('class','dobv1');


var d25 = document.createElement('div');
d25.setAttribute('class','dobv');
d25.innerHTML = 'Hours difference = '
var d251 = document.createElement('span');
d251.setAttribute('class','dobv1');

var d26 = document.createElement('div');
d26.setAttribute('class','dobv');
d26.innerHTML = 'Minutes difference = '
var d261 = document.createElement('span');
d261.setAttribute('class','dobv1');




var d27 = document.createElement('div')
d27.setAttribute('class','dobv');

var click = document.createElement("button");
click.setAttribute("class", "but");
click.innerHTML="click here";
click.setAttribute('onclick','calall()')

//click.onclick= calall();
// d211.onclick=function(){
// d211.value=""
// };


d21.appendChild(d211);
d21.appendChild(click);
d22.appendChild(d221);
d23.appendChild(d231);
d24.appendChild(d241);
d25.appendChild(d251);
d26.appendChild(d261);


d2.appendChild(d21);
d2.appendChild(d22);
d2.appendChild(d23);
d2.appendChild(d24);
d2.appendChild(d25);
d2.appendChild(d26);

d2.appendChild(d27);


document.body.append(d2);
function calall(){
    var day = 24*60*60*1000;
    var b = new Date(d211.value)
    var bb = new Date();
    var temp = Math.abs(bb-b);
    d221.innerHTML = bb.getFullYear()-b.getFullYear();
    d231.innerHTML = bb.getMonth()-b.getMonth();
    d241.innerHTML = Math.round(Math.abs((bb-b)/day));
    d251.innerHTML = Math.floor(temp/(1000*60*60));
    d261.innerHTML = Math.floor(temp/1000*60);
    //var secs = Math.floor(temp/1000);
    return
}
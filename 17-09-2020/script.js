var div_add = function(type, cl){
    var conn = document.createElement(type);
    conn.setAttribute('class', cl);
    return conn
}
var add_attr = function(a,arr){
    for(i=0;i<arr.length;i++){

        a.setAttribute(arr[i][0],arr[i][1]);
    }
    return a;
}
var d1 = document.createElement('div');
d1.id = 'd1';

var d11 = div_add('div', 'header');
d11.id = 'd11';
var d111 = div_add('img', 'self');
d111.id = 'd111';
d111.setAttribute('src','temp_file.jpg');
d111.setAttribute('style', "align-content: center;");
var d12 = div_add('div','spacy');
d12.id = d12;

var d121 = div_add('span','middle');
d121.id = d121;
d121.innerHTML = 'Harish Hasti';

var d13 = div_add('div', 'headertwo');
d13.id = d13;
var d131 = div_add('a','fa fa-github');
d131.id = d131;
d131 = add_attr(d131,[['href',"https://github.com/harishhasti95"],['target',"_blank"]]);
var d132 = div_add('a', 'fa fa-linkedin');
d132.id = d132;
d132 = add_attr(d132,[['href',"https://www.linkedin.com/in/harish-h-84b478a5/"],['target',"_blank"]]);
var d133 = div_add('a', 'fa fa-twitter');
d133.id = d133;
d133 = add_attr(d133,[['href',"https://twitter.com/harishhasti95"],['target',"_blank"]]);
var d134 = div_add('a', 'fa fa-instagram');
d134.id = d134;
d134 = add_attr(d134,[['href',"https://www.instagram.com/harish_varma16/"],['target',"_blank"]]);

d11.appendChild(d111);

d12.appendChild(d121);

d13.appendChild(d131);
d13.appendChild(d132);
d13.appendChild(d133);
d13.appendChild(d134);

d1.append(d11,d12,d13);

document.body.append(d1);

var d2 = div_add('p', 'names')
d2.id = d2;

var d21 = document.createElement('b');
d21.innerHTML = 'Ph:';

var d22 = document.createElement('span');
d22.innerHTML = ' +91-9491449661, ';

var d23 = document.createElement('b');
d23.innerHTML = 'Mail-id:';

var d24 = document.createElement('span');
d24.innerHTML = ' harishhasti95@gmail.com';

d2.appendChild(d21);
d2.appendChild(d22);
d2.appendChild(d23);
d2.appendChild(d24);

document.body.append(d2);


document.body.append(document.createElement('br'));
document.body.append(document.createElement('br'));
document.body.append(document.createElement('hr'));
document.body.append(document.createElement('br'));
document.body.append(document.createElement('br'));


var heading = document.createElement('div');
var heading_u = document.createElement('u');
var heading_h = document.createElement('h2');
heading_h.innerHTML = 'ACADEMIC QUALIFICATIONS'
heading_u.appendChild(heading_h);
heading.appendChild(heading_u);

document.body.append(heading);
document.body.append(document.createElement('br'));

// table

var tbl = document.createElement('table');
tbl.setAttribute("id", "myTable");
tbl.setAttribute("style", "width:100%");

var tr1 = tbl.insertRow();
var tr11 = document.createElement('th');
var tr111 = document.createTextNode("COURSE");
tr11.appendChild(tr111);
tr1.appendChild(tr11);

var tr12 = document.createElement('th');
var tr121 = document.createTextNode("INSTITUTION");
tr12.appendChild(tr121);
tr1.appendChild(tr12);

var tr13 = document.createElement('th');
var tr131 = document.createTextNode("BOARD/ UNIVERSITY");
tr13.appendChild(tr131);
tr1.appendChild(tr13);

var tr14 = document.createElement('th');
var tr141 = document.createTextNode("YEAR");
tr14.appendChild(tr141);
tr1.appendChild(tr14);

var tr15 = document.createElement('th');
var tr151 = document.createTextNode("PERCENTAGE");
tr15.appendChild(tr151);
tr1.appendChild(tr15);

tbl.appendChild(tr1);

var tr2 = tbl.insertRow();
var tr21 = document.createElement('td');
var tr211 = document.createTextNode("");
tr21.appendChild(tr211);
tr2.appendChild(tr21);

var tr22 = document.createElement('td');
var tr221 = document.createTextNode("");
tr22.appendChild(tr221);
tr2.appendChild(tr22);

var tr23 = document.createElement('td');
var tr231 = document.createTextNode("");
tr23.appendChild(tr231);
tr2.appendChild(tr23);

var tr24 = document.createElement('td');
var tr241 = document.createTextNode("");
tr24.appendChild(tr241);
tr2.appendChild(tr24);

var tr25 = document.createElement('td');
var tr251 = document.createTextNode("");
tr25.appendChild(tr251);
tr2.appendChild(tr25);


tbl.appendChild(tr2);

var tr3 = tbl.insertRow();
var tr31 = document.createElement('td');
tr31.setAttribute('class','edit')
// tr31.setAttribute("class", "edit");
var tr311 = document.createTextNode("PGP in Artificial Intelligence and Machine Learning");
tr31.appendChild(tr311);
tr3.appendChild(tr31);

var tr32 = document.createElement('td');
tr32.setAttribute('class','edit')
// tr32.setAttribute("class", "edit");
var tr321 = document.createTextNode("Great Learning (Online Mode)");
tr32.appendChild(tr321);
tr3.appendChild(tr32);

var tr33 = document.createElement('td');
tr33.setAttribute('class','edit')
// tr33.setAttribute("class", "edit");
var tr331 = document.createTextNode("Great Lakes");
tr33.appendChild(tr331);
tr3.appendChild(tr33);

var tr34 = document.createElement('td');
tr34.setAttribute('class','edit')
// tr34.setAttribute("class", "edit");
var tr341 = document.createTextNode("Nov-2020");
tr34.appendChild(tr341);
tr3.appendChild(tr34);

var tr35 = document.createElement('td');
tr35.setAttribute('class','edit')
// tr35.setAttribute("class", "edit");
var tr351 = document.createTextNode("99.07");
tr35.appendChild(tr351);
tr3.appendChild(tr35);


tbl.appendChild(tr3);

var tr4 = tbl.insertRow();
var tr41 = document.createElement('td');
var tr411 = document.createTextNode("");
tr41.appendChild(tr411);
tr4.appendChild(tr41);

var tr42 = document.createElement('td');
var tr421 = document.createTextNode("");
tr42.appendChild(tr421);
tr4.appendChild(tr42);

var tr43 = document.createElement('td');
var tr431 = document.createTextNode("");
tr43.appendChild(tr431);
tr4.appendChild(tr43);

var tr44 = document.createElement('td');
var tr441 = document.createTextNode("");
tr44.appendChild(tr441);
tr4.appendChild(tr44);

var tr45 = document.createElement('td');
var tr451 = document.createTextNode("");
tr45.appendChild(tr451);
tr4.appendChild(tr45);


tbl.appendChild(tr4);

var tr5 = tbl.insertRow();
var tr51 = document.createElement('td');
tr51.setAttribute("class", "edit");
var tr511 = document.createTextNode("B.Tech(Mechanical Engineering)");
tr51.appendChild(tr511);
tr5.appendChild(tr51);

var tr52 = document.createElement('td');
tr52.setAttribute("class", "edit");
var tr521 = document.createTextNode("Sri Venkateswara University College of Engineering, Tirupati");
tr52.appendChild(tr521);
tr5.appendChild(tr52);

var tr53 = document.createElement('td');
tr53.setAttribute("class", "edit");
var tr531 = document.createTextNode("S.V.University, Tirupati");
tr53.appendChild(tr531);
tr5.appendChild(tr53);

var tr54 = document.createElement('td');
tr54.setAttribute("class", "edit");
var tr541 = document.createTextNode("2019");
tr54.appendChild(tr541);
tr5.appendChild(tr54);

var tr55 = document.createElement('td');
tr55.setAttribute("class", "edit");
var tr551 = document.createTextNode("80.087");
tr55.appendChild(tr551);
tr5.appendChild(tr55);


tbl.appendChild(tr5);



var tr6 = tbl.insertRow();
var tr61 = document.createElement('td');
var tr611 = document.createTextNode("");
tr61.appendChild(tr611);
tr6.appendChild(tr61);

var tr62 = document.createElement('td');
var tr621 = document.createTextNode("");
tr62.appendChild(tr621);
tr6.appendChild(tr62);

var tr63 = document.createElement('td');
var tr631 = document.createTextNode("");
tr63.appendChild(tr631);
tr6.appendChild(tr63);

var tr64 = document.createElement('td');
var tr641 = document.createTextNode("");
tr64.appendChild(tr641);
tr6.appendChild(tr64);

var tr65 = document.createElement('td');
var tr651 = document.createTextNode("");
tr65.appendChild(tr651);
tr6.appendChild(tr65);


tbl.appendChild(tr6);

var tr7 = tbl.insertRow();
var tr71 = document.createElement('td');
tr71.setAttribute("class", "edit");
var tr711 = document.createTextNode("Higher Secondary");
tr71.appendChild(tr711);
tr7.appendChild(tr71);

var tr72 = document.createElement('td');
tr72.setAttribute("class", "edit");
var tr721 = document.createTextNode("Sri Chaitanya Junior College, Tirupati");
tr72.appendChild(tr721);
tr7.appendChild(tr72);

var tr73 = document.createElement('td');
tr73.setAttribute("class", "edit");
var tr731 = document.createTextNode("Board of Intermediate Education");
tr73.appendChild(tr731);
tr7.appendChild(tr73);

var tr74 = document.createElement('td');
tr74.setAttribute("class", "edit");
var tr741 = document.createTextNode("2015");
tr74.appendChild(tr741);
tr7.appendChild(tr74);

var tr75 = document.createElement('td');
tr75.setAttribute("class", "edit");
var tr751 = document.createTextNode("96.7");
tr75.appendChild(tr751);
tr7.appendChild(tr75);
tbl.appendChild(tr7);

var tr8 = tbl.insertRow();
var tr81 = document.createElement('td');
var tr811 = document.createTextNode("");
tr81.appendChild(tr811);
tr8.appendChild(tr81);

var tr82 = document.createElement('td');
var tr821 = document.createTextNode("");
tr82.appendChild(tr821);
tr8.appendChild(tr82);

var tr83 = document.createElement('td');
var tr831 = document.createTextNode("");
tr83.appendChild(tr831);
tr8.appendChild(tr83);

var tr84 = document.createElement('td');
var tr841 = document.createTextNode("");
tr84.appendChild(tr841);
tr8.appendChild(tr84);

var tr85 = document.createElement('td');
var tr851 = document.createTextNode("");
tr85.appendChild(tr851);
tr8.appendChild(tr85);


tbl.appendChild(tr8);




var tr9 = tbl.insertRow();
var tr91 = document.createElement('td');
tr91.setAttribute("class", "edit");
var tr911 = document.createTextNode("Secondary School");
tr91.appendChild(tr911);
tr9.appendChild(tr91);

var tr92 = document.createElement('td');
tr92.setAttribute("class", "edit");
var tr921 = document.createTextNode("Sri Chaitanya Techno School, Tirupati");
tr92.appendChild(tr921);
tr9.appendChild(tr92);

var tr93 = document.createElement('td');
tr93.setAttribute("class", "edit");
var tr931 = document.createTextNode("Board of Secondary Education");
tr93.appendChild(tr931);
tr9.appendChild(tr93);

var tr94 = document.createElement('td');
tr94.setAttribute("class", "edit");
var tr941 = document.createTextNode("2013");
tr94.appendChild(tr941);
tr9.appendChild(tr94);

var tr95 = document.createElement('td');
tr95.setAttribute("class", "edit");
var tr951 = document.createTextNode("GPA-9.7");
tr95.appendChild(tr951);
tr9.appendChild(tr95);


tbl.appendChild(tr9);

var t8 = tbl.insertRow();
var t81 = document.createElement('td');
var t811 = document.createTextNode("");
t81.appendChild(t811);
t8.appendChild(t81);

var t82 = document.createElement('td');
var t821 = document.createTextNode("");
t82.appendChild(t821);
t8.appendChild(t82);

var t83 = document.createElement('td');
var t831 = document.createTextNode("");
t83.appendChild(t831);
t8.appendChild(t83);

var t84 = document.createElement('td');
var t841 = document.createTextNode("");
t84.appendChild(t841);
t8.appendChild(t84);

var t85 = document.createElement('td');
var t851 = document.createTextNode("");
t85.appendChild(t851);
t8.appendChild(t85);
tbl.appendChild(t8);
document.body.append(tbl);

var e1 = document.createElement('div');
e1.className = 'split left';
var e11 = document.createElement('div');
e11.id = e11;
e11.classList.add('centered');
var e111 = document.createElement('h2');
e111.innerHTML = 'Achievements:';
var add_list = function(aralist){
    var dum = document.createElement('ul');
    for(t=0;t<aralist.length;t++){
        let x = document.createElement("li");
        let ti = document.createTextNode(aralist[t]);
        x.appendChild(ti);
        dum.appendChild(x);
    }
    return dum;
}
var e112 = add_list(['Stood in top 1 Percentile in EAMCET exam which secured me an admission during undergraduate.','Secured a score of 314 in GRE.']);

var e113 = document.createElement('h2');
e113.innerHTML = 'Areas of Interest:';

var e114 = add_list(['Artificial Intelligence','Machine Learning', 'Web Devolopment']);

var e115 = document.createElement('h2');
e115.innerHTML = 'Programming Skills:';
var e116 = document.createElement('ul');
var e1161 = document.createElement("li");
var yy1161 = document.createTextNode('Programming Languages - Python, Matlab, JavaScript, HTML, CSS');

e1161.appendChild(yy1161);

var e1162 = document.createElement("li");
var yy1162 = document.createTextNode('Machine Learning Frameworks - Numpy, Pandas, Tensorflow, Keras, Pytorch');

e1162.appendChild(yy1162);
e116.appendChild(e1161);
e116.appendChild(e1162);       
e11.appendChild(e111);
e11.appendChild(e112);
e11.appendChild(e113);
e11.appendChild(e114);
e11.appendChild(e115);
e11.appendChild(e116);
e1.appendChild(e11);
document.body.append(e1);
var f1 = document.createElement('div');
f1.className = 'split right';
var f11 = document.createElement('div');
f11.id = f11;
f11.classList.add('centered');
var f111 = document.createElement('h2');
f111.innerHTML = 'Work Experience:';
var f112 = add_list(['Tata Consultancy Services, Chennai [AUG 2019 – NOV 2019]']);
var f113 = document.createElement('h2');
f113.innerHTML = 'Courses:';
var f114 = add_list(['Post Graduate Program in Artificial Intelligence - Great Learning & University of Texas at Austin','Full Stack Devolopment by Guvi','Deep Learning Specialization (deeplearning.ai) – Coursera','Deep Learning from Zero to Gans - Freecodecamp.org','deeplearning.ai Tensorflow Devoloper Specialization','Ai for Medical Prognosis Specialization (deeplearning.ai) – Coursera','Mathematics for Machine Learning Specialization (Imperial College, London) – Coursera','Python for Everybody Specialization (Univ of Michigan, Ann Arbor) – Coursera','SQL for Data Science – Coursera']);
f114.id = f114;
var f115 = document.createElement('h2');
f115.innerHTML = 'Blogs:';
var f116 = add_list(['I wrote a blog which discusses 5 most important PyTorch functions in deep learning.','Here is the where I discussed how we can predict the burned area of forest fires, in the northeast region of Portugal, by using meteorological and other data.']);   
f11.appendChild(f111);
f11.appendChild(f112);
f11.appendChild(f113);
f11.appendChild(f114);
f11.appendChild(f115);
f11.appendChild(f116);
f1.appendChild(f11);
document.body.append(f1);

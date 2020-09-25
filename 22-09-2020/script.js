var form_main = document.createElement('form');
form_main.id = 'my-form';
form_main.setAttribute('method','POST');

var row = document.createElement('div');
row.setAttribute('class','container')

var row1 = document.createElement('div');
row1.setAttribute('class','form-row');

var row11 = document.createElement('div');
row11.setAttribute('class','form-group col-md-6');

var row111 = document.createElement('label');
row111.setAttribute('for','fname');
row111.innerHTML = 'First Name'

var row112 = document.createElement('input');
row112.setAttribute('class','form-control');
row112.setAttribute('type','text');
row112.setAttribute('placeholder','First Name');
row112.setAttribute('id','fname');

var row12 = document.createElement('div');
row12.setAttribute('class','form-group col-md-6');


var row121 = document.createElement('label');
row121.setAttribute('for','lname');
row121.innerHTML = 'Last Name'

var row122 = document.createElement('input');
row122.setAttribute('class','form-control');
row122.setAttribute('type','text');
row122.setAttribute('placeholder','Last Name');
row122.setAttribute('id','lname')


row11.appendChild(row111);
row11.appendChild(row112);
row12.appendChild(row121);
row12.appendChild(row122);


var row2 = document.createElement('div');
row2.setAttribute('class','form-group');

var row21 = document.createElement('label');
row21.setAttribute('for','address');
row21.innerHTML = 'Address';

var row22 = document.createElement('input');
row22.setAttribute('type','text');
row22.setAttribute('class','form-control');
row22.setAttribute('id','address');
row22.setAttribute('placeholder','1234 Main St');

var row3 = document.createElement('div');
row3.setAttribute('class','form-row');


var row31 = document.createElement('div');
row31.setAttribute('class','form-group col-md-3');

var row311 = document.createElement('label');
row311.setAttribute('for','city');
row311.innerHTML = 'City';

var row311a = document.createElement('input');
row311a.setAttribute('type','text');
row311a.setAttribute('class','form-control');
row311a.setAttribute('id','city');


var row32 = document.createElement('div');
row32.setAttribute('class','form-group col-md-3');

var row321 = document.createElement('label');
row321.setAttribute('for','zipcode');
row321.innerHTML = 'ZipCode';


var row321a = document.createElement('input');
row321a.setAttribute('type','text');
row321a.setAttribute('class','form-control');
row321a.setAttribute('id','zipcode');


var row33 = document.createElement('div');
row33.setAttribute('class','form-group col-md-3');

var row331 = document.createElement('label');
row331.setAttribute('for','state');
row331.innerHTML = 'state';

var row331a = document.createElement('select');
row331a.setAttribute('id','state');
row331a.setAttribute('class','form-control');

var rowrow = document.createElement('option');
rowrow.innerHTML = 'Select state';


var rowrow1 = document.createElement('option');
rowrow1.innerHTML = 'Andhra Pradesh';

var rowrow2 = document.createElement('option');
rowrow2.innerHTML = 'Tamil-Nadu'

row331a.appendChild(rowrow);
row331a.appendChild(rowrow1);
row331a.appendChild(rowrow2);
var row34 = document.createElement('div');
row34.setAttribute('class','form-group col-md-3');

var row341 = document.createElement('label');
row341.setAttribute('for','country');
row341.innerHTML = 'country';

var row341a = document.createElement('select');
row341a.setAttribute('id','country');
row341a.setAttribute('class','form-control');

var rowro = document.createElement('option');
rowro.innerHTML = 'Select country';


var rowro1 = document.createElement('option');
rowro1.innerHTML = 'India';

var rowro2 = document.createElement('option');
rowro2.innerHTML = 'USA'

row341a.appendChild(rowro);
row341a.appendChild(rowro1);
row341a.appendChild(rowro2);
row311.appendChild(row311a);
row31.appendChild(row311);
row321.appendChild(row321a);
row32.appendChild(row321);

row331.appendChild(row331a);
row33.appendChild(row331);

row341.appendChild(row341a);
row34.appendChild(row341);



var row4 = document.createElement('div');
row4.setAttribute('class','form-row');


var row41 = document.createElement('div');
row41.setAttribute('class','form-group col-3');
var row441 = document.createElement('label');
row441.setAttribute('for','gender');
row441.innerHTML = 'Gender';

var row441a = document.createElement('select');
row441a.setAttribute('id','gender');
row441a.setAttribute('class','form-control');

var rowr = document.createElement('option');
rowr.innerHTML = 'Select Gender';


var rowr1 = document.createElement('option');
rowr1.innerHTML = 'Male';

var rowr2 = document.createElement('option');
rowr2.innerHTML = 'Female'

row441a.appendChild(rowr);
row441a.appendChild(rowr1);
row441a.appendChild(rowr2);
row441.appendChild(row441a);
row41.appendChild(row441);


var row42 = document.createElement('div');
row42.setAttribute('class','form-group col-3');
row42.setAttribute('style','width:100%');

var row442 = document.createElement('label');
row442.setAttribute('for','food');
row442.innerHTML = 'Food Preferences';

var row442a = document.createElement('select');
row442a.setAttribute('id','food');
row442a.setAttribute('class','form-control');
row442a.multiple = true;

var ro1 = document.createElement('option');
ro1.innerHTML = 'Indian';

var ro2 = document.createElement('option');
ro2.innerHTML = 'Chinese';
var ro3 = document.createElement('option');
ro3.innerHTML = 'Italian';
var ro4 = document.createElement('option');
ro4.innerHTML = 'Mexican';

row442a.appendChild(ro1);
row442a.appendChild(ro2);
row442a.appendChild(ro3);
row442a.appendChild(ro4);
row442.appendChild(row442a);
row42.appendChild(row442);
row1.appendChild(row11);
row1.appendChild(row12);
row2.appendChild(row21);
row2.appendChild(row22);
row3.appendChild(row31);
row3.appendChild(row32);
row3.appendChild(row33);
row3.appendChild(row34);
row4.appendChild(row41);
row4.appendChild(row42);


var button = document.createElement('input');
button.setAttribute('type','button');
button.setAttribute('class','btn btn-primary input-lg');

button.setAttribute('value','Submit to see the data')

button.setAttribute('onclick', 'showTable()');


row.appendChild(row1);
row.appendChild(row2);
row.appendChild(row3);
row.appendChild(row4);
row.appendChild(button);

form_main.appendChild(row);


document.body.appendChild(form_main);
document.body.appendChild(document.createElement('br'));

function showTable(){
    var i = 0;
    var validateFields = function() {
        if (document.getElementById("fname").value == "") {
            alert("Please enter valid First Name");
            return false;
        }
        if (document.getElementById("lname").value == "") {
            alert("Please enter valid Last Name");
            return false;
        }
        if (document.getElementById("address").value == "") {
            alert("Please enter valid Address");
            return false;
        }
        if (document.getElementById("gender").value == "") {
            alert("Please select valid gender");
            return false;
        }
        
        if (document.getElementById("zipcode").value == "") {
            alert("Please enter valid Zip Code");
            return false;
        }
        if (document.getElementById("state").value == "") {
            alert("Please select valid State");
            return false;
        }
        if (document.getElementById("country").value == "") {
            alert("Please select valid Country");
            return false;
        }
        if (document.getElementById("food").value == "") {
            alert("Please select valid choice of food");
            return false;
        } else {
            var selected = [];
            for (var option of document.getElementById("food").options) {
                if (option.selected) {
                    selected.push(option.value);
                }
            }
            if(selected.length < 2){
                alert("Please select minimum two choice of food");
                return false;
            }
        }
        return true;    
    }
    
    var tbl = document.createElement('table');
    tbl.setAttribute("id", "myTable");
    tbl.setAttribute('class','table')


    var tr1 = tbl.insertRow();
    var tr11 = document.createElement('th');
    var tr111 = document.createTextNode("Name");
    tr11.appendChild(tr111);
    tr1.appendChild(tr11);

    var tr12 = document.createElement('th');
    var tr121 = document.createTextNode("Address");
    tr12.appendChild(tr121);
    tr1.appendChild(tr12);

    var tr13 = document.createElement('th');
    var tr131 = document.createTextNode("Gender");
    tr13.appendChild(tr131);
    tr1.appendChild(tr13);

    var tr14 = document.createElement('th');
    var tr141 = document.createTextNode("Food");
    tr14.appendChild(tr141);
    tr1.appendChild(tr14);

    tbl.appendChild(tr1);


    
    if (validateFields()){
        

        var tr2 = tbl.insertRow();
        var tr21 = document.createElement('td');
        tr21.innerHTML = document.getElementById('fname').value + document.getElementById('lname').value;

        var tr22 = document.createElement('td');
        tr22.innerHTML = document.getElementById('address').value + ', ' + document.getElementById('city').value + ', ' + document.getElementById('state').value + ', ' + document.getElementById('country').value;

        var tr23 = document.createElement('td');
        tr23.innerHTML = document.getElementById('gender').value;

        var tr24 = document.createElement('td');
        tr24.innerHTML = document.getElementById('food').value;

        tr2.appendChild(tr21);
        tr2.appendChild(tr22);
        tr2.appendChild(tr23);
        tr2.appendChild(tr24);

        tbl.appendChild(tr2);
        document.body.appendChild(tbl);
    }
}
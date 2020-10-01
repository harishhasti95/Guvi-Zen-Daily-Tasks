let request = () => {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest()
        var url_string = 'https://restcountries.eu/rest/v2/all';
        request.open('GET',url_string , true) 
        request.send();
        request.onload = function() {
            var data = JSON.parse(this.response)
            if(data!==undefined){
                resolve(data)
            }else{
                reject('Data not received')
            }
        }
    })
}

request()
.then(data => {
    
    countries = Object.keys(data);
    console.log(data);
    var main = document.createElement('div');
    main.setAttribute('class','container')

    for(c=0;c<=249;c=c+3){
        var a = c;
        var b = (c+1);
        var c = (c+2);
        var a_ = create_row_cards(a,data[a].name,data[a].capital,data[a].nativeName,data[a].population,data[a].region);
        var b_ = create_row_cards(b,data[b].name,data[b].capital,data[b].nativeName,data[b].population,data[b].region);
        var c_ = create_row_cards(a,data[c].name,data[c].capital,data[c].nativeName,data[c].population,data[c].region);
        var rrr = create_row();
        rrr.appendChild(a_);
        rrr.appendChild(b_);
        rrr.appendChild(c_);
        main.appendChild(rrr);
        document.body.appendChild(main);
    }
})
.catch(err => {
    console.log(err);
})
function create_row(){
    var row = document.createElement('div');
    row.setAttribute('class','row');
    return row
}
function create_row_cards(id, name, capital, native_name,pop, region){
    

    var mm = document.createElement('div');
    mm.setAttribute('class','col-4');
    
    
    var firs = document.createElement('div');


    firs.setAttribute('style','width: 17rem;');

    firs.setAttribute('id',id);
    firs.classList.add("card-flex","border", "mt-3", "mb-3")
    firs.style.borderRadius = "15px"
    firs.style.textAlign = "center"
    


    var first = document.createElement('div');
    first.setAttribute('class','card-body');

    first_body_name = document.createElement('h6');
    first_body_name.setAttribute('class','card-title');
    first_body_name.innerHTML = 'Name: ' + name;

    first_hr = document.createElement('hr');

    first_body_capital = document.createElement('div');
    first_body_capital.setAttribute('class','card-text');
    first_body_capital.innerHTML = 'Capital: ' + capital;

    first_body_native_name = document.createElement('div');
    first_body_native_name.setAttribute('class','card-text');
    first_body_native_name.innerHTML = 'Native Name: ' + native_name;
    

    first_body_population = document.createElement('div');
    first_body_population.setAttribute('class','card-text');
    first_body_population.innerHTML = 'Population: ' + pop;

    first_body_region = document.createElement('div');
    first_body_region.setAttribute('class','card-text');
    first_body_region.innerHTML = 'Region: ' + region;

    
    first.appendChild(first_body_name);
    first.appendChild(first_hr);
    first.appendChild(first_body_capital);
    first.appendChild(first_body_native_name);
    first.appendChild(first_body_population);
    first.appendChild(first_body_region);

    firs.appendChild(first);
    mm.appendChild(firs)

    return mm
}


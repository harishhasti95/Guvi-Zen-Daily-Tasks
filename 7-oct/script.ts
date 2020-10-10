var available_pets = {
    Dog: [{name: 'Gimmy',color: 'white'},{name: 'Rock',color: 'black'},{name: 'Snoopy',color: 'dalmation'},{name:'snoophy',color:'gold'}],
    Cat: [{name: 'Oliver',color: 'white'},{name: 'Leo',color: 'black'},{name: 'kutty',color: 'brownish'}],
    Bird: [{name: 'ramu',color: 'green'},{name: 'seetha',color: 'black'},{name:'geetha',color:'yellow'}]
}

class petShop{
    available_pets;
    constructor(pets){
        this.available_pets = pets;
        let tab = document.getElementById('available');
        let a = Object.keys(this.available_pets);
        for(let i=0;i<a.length;i++){
            let b = this.available_pets[a[i]]
            console.log(b);
            for(let j=0;j<b.length;j++){
                let tr = document.createElement('tr');

                let th = document.createElement('td');
                th.innerHTML = a[i];

                let th2 = document.createElement('td');
                th2.innerHTML = b[j].name;

                let th3 = document.createElement('td');
                th3.innerHTML = b[j].color;

                tr.appendChild(th);
                tr.appendChild(th2);
                tr.appendChild(th3);
                
                let t = document.getElementById('available');
                t.appendChild(tr);
            }
        }

        let but = document.getElementById('button');
        but.onclick = this.checkAvailability();

    }
    
    checkAvailability(){
        let blah = (<HTMLSelectElement>document.getElementById('animal')).value;
        let keys_a = Object.keys(this.available_pets);

        if (() => {
            for(let m=0;m<keys_a.length;m++){
                if(keys_a[m] == blah){return true}
            }
            return false
        }) {
            if(this.available_pets[blah] != undefined){
                let k = document.getElementById('appending_span');

                let k1 = document.createElement('span');
                k1.innerHTML = 'yes, available';

                k.appendChild(k1);

                this.available_pets[blah].shift();
            }else{
                let k = document.getElementById('appending_span');

                let k1 = document.createElement('span');
                k1.innerHTML = 'Not available';

                k.appendChild(k1);
            }
        }
        let tab = document.getElementById('available');
        tab.innerHTML = '';
        let a = Object.keys(this.available_pets);
        for(let i=0;i<a.length;i++){
            let b = this.available_pets[a[i]]
            console.log(b);
            for(let j=0;j<b.length;j++){
                let tr = document.createElement('tr');

                let th = document.createElement('td');
                th.innerHTML = a[i];

                let th2 = document.createElement('td');
                th2.innerHTML = b[j].name;

                let th3 = document.createElement('td');
                th3.innerHTML = b[j].color;

                tr.appendChild(th);
                tr.appendChild(th2);
                tr.appendChild(th3);
                
                let t = document.getElementById('available');
                t.appendChild(tr);
            }
        }
        console.log(this.available_pets);
        return this.available_pets
    }

}


let news = new petShop(available_pets)
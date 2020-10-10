var available_pets = {
    Dog: [{ name: 'Gimmy', color: 'white' }, { name: 'Rock', color: 'black' }, { name: 'Snoopy', color: 'dalmation' }, { name: 'snoophy', color: 'gold' }],
    Cat: [{ name: 'Oliver', color: 'white' }, { name: 'Leo', color: 'black' }, { name: 'kutty', color: 'brownish' }],
    Bird: [{ name: 'ramu', color: 'green' }, { name: 'seetha', color: 'black' }, { name: 'geetha', color: 'yellow' }]
};
var petShop = /** @class */ (function () {
    function petShop(pets) {
        this.available_pets = pets;
        var tab = document.getElementById('available');
        var a = Object.keys(this.available_pets);
        for (var i = 0; i < a.length; i++) {
            var b = this.available_pets[a[i]];
            console.log(b);
            for (var j = 0; j < b.length; j++) {
                var tr = document.createElement('tr');
                var th = document.createElement('td');
                th.innerHTML = a[i];
                var th2 = document.createElement('td');
                th2.innerHTML = b[j].name;
                var th3 = document.createElement('td');
                th3.innerHTML = b[j].color;
                tr.appendChild(th);
                tr.appendChild(th2);
                tr.appendChild(th3);
                var t = document.getElementById('available');
                t.appendChild(tr);
            }
        }
        var but = document.getElementById('button');
        but.onclick = this.checkAvailability();
    }
    petShop.prototype.checkAvailability = function () {
        var blah = document.getElementById('animal').value;
        var keys_a = Object.keys(this.available_pets);
        if (function () {
            for (var m = 0; m < keys_a.length; m++) {
                if (keys_a[m] == blah) {
                    return true;
                }
            }
            return false;
        }) {
            if (this.available_pets[blah] != undefined) {
                var k = document.getElementById('appending_span');
                var k1 = document.createElement('span');
                k1.innerHTML = 'yes, available';
                k.appendChild(k1);
                this.available_pets[blah].shift();
            }
            else {
                var k = document.getElementById('appending_span');
                var k1 = document.createElement('span');
                k1.innerHTML = 'Not available';
                k.appendChild(k1);
            }
        }
        var tab = document.getElementById('available');
        tab.innerHTML = '';
        var a = Object.keys(this.available_pets);
        for (var i = 0; i < a.length; i++) {
            var b = this.available_pets[a[i]];
            console.log(b);
            for (var j = 0; j < b.length; j++) {
                var tr = document.createElement('tr');
                var th = document.createElement('td');
                th.innerHTML = a[i];
                var th2 = document.createElement('td');
                th2.innerHTML = b[j].name;
                var th3 = document.createElement('td');
                th3.innerHTML = b[j].color;
                tr.appendChild(th);
                tr.appendChild(th2);
                tr.appendChild(th3);
                var t = document.getElementById('available');
                t.appendChild(tr);
            }
        }
        console.log(this.available_pets);
        return this.available_pets;
    };
    return petShop;
}());
var news = new petShop(available_pets);

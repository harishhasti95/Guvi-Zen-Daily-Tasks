var available_pets = {
    Dog: [{ name: 'Gimmy', color: 'white' }, { name: 'Rock', color: 'black' }, { name: 'Snoopy', color: 'dalmation' }],
    Cat: [{ name: 'Oliver', color: 'white' }, { name: 'Leo', color: 'black' }, { name: 'kutty', color: 'brownish' }],
    Bird: [{ name: 'ramu', color: 'green' }, { name: 'seetha', color: 'black' }, { name: 'geetha', color: 'yellow' }]
};
var petShop = /** @class */ (function () {
    function petShop(pets) {
        this.available_pets = pets;
    }
    petShop.prototype.printAvailability = function () {
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
    };
    petShop.prototype.checkAvailability = function () {
        var _this = this;
        return function () {
            var blah = document.getElementById('animal').value;
            var keys_a = Object.keys(_this.available_pets);
            var flag = false;
            for (var r = 0; r < keys_a.length; r++) {
                if (blah == keys_a[r]) {
                    flag = true;
                    console.log(flag);
                }
            }
            if (flag) {
                if (_this.available_pets[blah] != undefined) {
                    var k = document.getElementById('is_it_there');
                    k.innerHTML = 'yes, available';
                    _this.available_pets[blah].shift();
                }
                else {
                    var k = document.getElementById('is_it_there');
                    k.innerHTML = 'Not available';
                }
                _this.printAvailability();
            }
        };
    };
    return petShop;
}());
var news = new petShop(available_pets);
var but = document.getElementById('button');
but.onclick = news.checkAvailability();

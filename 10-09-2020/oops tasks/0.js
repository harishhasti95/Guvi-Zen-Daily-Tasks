class caluclator{
    constructor(a,b){
        this.num1 = a;
        this.num2 = b;
    }
    add(a,b){
        return this.num1+this.num2
    }
    difference(a,b){
        return this.num1-this.num2
    }
    multiply(a,b){
        return this.num1*this.num2
    }
    divide(a,b){
        return this.num1/this.num2
    }
}
newObject = new caluclator(4,5);
console.log(newObject.add(4,5));
console.log(newObject.difference(4,5));
console.log(newObject.multiply(4,5));
console.log(newObject.divide(4,5));
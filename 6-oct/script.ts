function chunk_(array:Array<any>, size:number = 1){
    let len = Math.ceil(array.length / size)
    let final= [];
    for (let j = 0; j < len; j++){
        let temp = [];
        for (let i = 0; i < size; i++){
            let t = i * 0; 
            if(array[t] != undefined){
                temp.push(array[t])
                array.shift()
            }
        }
        final.push(temp)
    }
    return final;
}

function reduce_(data: Array<any>, func: Function, result: any){
    for (let i in data){
        result = func(result, data[i])
    }
    return result;
}

function filter_(array: Array<any>, functions: Function){
    var filtered = [];
    for (let i=0;i<array.length;i++) {
        if (functions(array[i])){
            filtered.push(array[i]);
        }
    }
    return filtered;
}

function find_(array: Array<any>, functions: Function){
    for (var i = 0; i < array.length; i++) {
        if (functions(array[i])){
            return i;
        }
    }
    return undefined;
}

function sum_(array: Array<any>){
    let sum = 0;
    for (let i=0;i<array.length;i++){
        sum += i;
    }
    return sum;
}

console.log('array i used is [1,2,3,4,5]');
console.log('Chunk function:', chunk_([1,2,3,4,5],2));
console.log('Find function (index of 5 will be printed):', find_([1,2,3,4,5,6],function(o){return o==5}))
console.log('Reduce function:', reduce_([1,2,3,4,5,6],function(o1,o2){return o1+o2}, 0))
console.log('Filter function(i used to filter values greater than 2):', filter_([1,2,3,4,5],function(a){return a>2;}));
console.log('Sum function:', sum_([1,2,3,4,5,6]));
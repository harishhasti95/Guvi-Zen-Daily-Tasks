var expected = {foo: 5, bar: 6};
var expected1 = {foo: 6, bar: 5};
var actual = {foo: 5, bar: 6};

function assertObjectsEqual(actual, expected, testName){
  actualStr = JSON.stringify(actual)
  expectedStr = JSON.stringify(expected)
  if(actualStr == expectedStr){
    return "Passed"
  } else{
    return "FAILED ["+testName+"] Expected "+actualStr+", but got "+expectedStr
  }
}

console.log(assertObjectsEqual(actual, expected, 'test1'))

console.log(assertObjectsEqual(actual, expected1, 'test2'))
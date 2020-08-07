'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
//function each(collection, action) {
   // if(Array.isArray(collection)) {
        //for(var i = 0; i < collection.length; i++) {
            //action(collection[i], i, collection);
       // }
   // } else {
       // for (var key in collection) {
           // action(collection[key], key, collection);
       // }
   // }
//}
//module.exports.each = each;


/**
 * identity: takes a value and returns a value unchanged.
 * 
 * @param {*} value: single value that can be any datatype.
 * 
 * @return {*} : returns the value unchanged 
 * 
 * 
 */
 
 function identity(value){
     return value;
 }
 
 module.exports.identity = identity;
 
 
 /**
  * typeOf: takes any value and returns a string of the value's datatype. 
  * 
  * @param {*} value: single value that can be any datatype
  * 
  * @return {string} : returns datatype of value in form of a string 
  * 
  * 
  */
  
  function typeOf(value){
      if (typeof value === 'object'){ 
        if (Array.isArray(value)){  
        return "array"; 
        } else if (value === null) { 
            return "null";
        } else if (typeof value === "object"){ 
            return "object";
        }
    } else {
        return typeof value;   
    }
}
      
  module.exports.typeOf = typeOf;
  
  
  /**
   * first checks if an array or number is given in data. 
   * If so, first number of items in array.
   * If an array is not given, [] array literal is returned.
   * If number is not given or NaN, the first element of the array will be returned. 
   * 
   * @ param {array} array: expected to be an array 
   * 
   * @ param {number} number: expected to be a number 
   * 
   * @ return {*} : [] if array param is not an array;
   * first element of array if number is not given or a number; 
   * first number of items if array and number are given
   * 
   */
   
     function first(array, number){
    if (Array.isArray(array) === false || number < 0){
        return [];
    }
    if (typeof number !== "number" || number === null){
        return array[0];
    }
    
    return array.slice(0, number);
}

module.exports.first = first;


/** 
 * last checks if an array and number are given
 * If so, returns last number of items in the array. 
 * If an array is not given [] is returned
 * If number is not given or NaN, the last  element of the array will be returned. 
 * 
 * @param {array} array: expected to be an array
 * 
 * @param {number} number: expected to be a number 
 * 
 * @return {*}:  [] if array param is not an array;
 * last element of array if number is not given or a number; 
 * last number of items if array and number are given
 * 
 * 
 */
 
   function last(array, number){
  
      if (Array.isArray(array) === false || number < 0){
        return [];
    }
    if (typeof number !== "number" || number === null){
        return array[array.length - 1];
    }
    if (number > array.length){
        return array;
    }
    return array.slice(number - 1, array.length);
  
}

module.exports.last = last;


/**
 * indexOf takes an array and a value, and returns the index of where the value first occurs in the array.
 * if value not found, -1 is returned. 
 * 
 * @ param {array} array: expected to be an array 
 * 
 * @ param {value} value: a value of any type 
 * 
 * @ return {*}: index of where value first occurs in array, -1 is value if not found in array
 * 
 */
  
  function indexof(array, value){

for (var i = 0; i < array.length; i++){
    if (value === array[i]){
        return i;
    } 
}
 return -1;    

}

module.exports.indexof = indexof;

/**
 * contains checks an array to see if a certain specified value is present
 * 
 * @ param {array} array: expected to be an array 
 * 
 * @ param {value} value: value of any datatype 
 * 
 * @return {boolean}: A boolean value; true if array contains value, false if not found
 * 
 */
 
  function contains(array, value){
    
    for(var i = 0; i < array.length; i++){
        if (array[i] === value){
            return true;
        }
    }
   return false;  
  } 

module.exports.contains = contains;

/**
 * each: checks shared value to see if its an array or a object.
 * if value is  an array, calls the given function once for each element. 
 * if value is an object, calls the given function once for each property. 
 *
 * @param {array or object} collection: the collection to be checked for data type and called in function.
 * 
 * @param {function} test: function that takes the element, index, and collection if collection is an array. 
 * If an object, will take property value, key, and collection value.
 * 
 * @return {*}: return contents of collection
 * 
 */
 
 function each(collection, test){
 
 if (typeof collection === 'object'){
     if (Array.isArray(collection)){
     for (var x = 0; x < collection.length; x++){
         (test(collection[x], x, collection));}
         
     } else{
    for (var key in collection){
        (test(collection[key], key, collection));
    }}

}
}

module.exports.each = each;

/** 
 * Unique: takes an array and returns a new array with duplicates removed.
 * 
 * @param{array}: the array that will be checked for duplicate
 * 
 * @return {*}: returns new array without duplicates 
 * 
 */
 function unique(array){
    var arrayWithoutDups = [];
    
    for (var i = 0; i < array.length; i++){
        if(!arrayWithoutDups.includes(array[i])){
            arrayWithoutDups.push(array[i]);
        }
    }
    
    return arrayWithoutDups;

}

module.exports.unique = unique;

/**
  * 
  * filter: takes an array and function, and calls function on each value of array. will return a new array of all values that returned
  * true after the function was called. 
  * 
  * @param {array} array: the array that will have each element called in function
  * @param {function} test: function that will run test on each element of array 
  * @return {*}: returns new array featuring only items in array that triggered true upon return 
  *
  */
  
  function filter(array, test){

    var newArray = [];

    for (let i = 0; i < array.length; i++){ 
        if (test(array[i], i, array)) {
            newArray.push(array[i]);
        } 
        }
    return newArray;
    
    }
    
module.exports.filter = filter; 

/**
  * 
  * reject: takes an array and function, and calls function on each value of array. will return a new array of all values that returned
  * false  after the function was called. 
  * 
  * @param {array} array: the array that will have each element called in function
  * @param {function} test: function that will run test on each element of array 
  * @return {*}: returns new array featuring only items in array that triggered false upon return 
  *
  */
  
function reject(array, testFunc){

var anotherNewArray = [];

for(let i =0; i < array.length; i++){
    if ((testFunc(array[i], i, array)) === false){
        anotherNewArray.push(array[i]);
    }
}
return anotherNewArray; 

}

module.exports.reject = reject;


/**
  * 
  * partition: takes an array and function, and calls function on each value of array. will return a new array that features two sub arrays: 
  * one featuring all values that returned true and another featuring all values that returned false. 
  * 
  * @param {array} array: the array that will have each element called in function
  * @param {function} tester: function that will run test on each element of array 
  * @return {*}: returns new array featuring two sub arrays, one featuring all elements that returned something true, and the other all elements that returned something false 
  *
  */
  
 function partition(array, tester){
    var booleanArray = [[], []];
    
    for (let i = 0; i < array.length; i++){
        if ((tester(array[i], i, array)) === true){
            booleanArray[0].push(array[i]);
        } else if ((tester(array[i], i, array)) === false){
            booleanArray[1].push(array[i]);
        }
    }
return booleanArray;
}

module.exports.partition = partition; 


/**
  * 
  * map: checks if value is a array or object. calls function on each element or property of the value, and saves the function value of each 
  * element on a new array. 
  * 
  * @param {array or object} collection: array or object that will run in function 
  * @param {function} tester: function that will run test on each element/value, index/key, and collection of collection argument 
  * @return {*}: returns a new array that features the values of each test 
  *
  */
  
  function map(collection, aTestFunc){
    var anArray = [];
    
    if((Array.isArray(collection))){
        for (let i = 0; i < collection.length; i++){
            anArray.push(aTestFunc(collection[i], i, collection));
        }
     return anArray;
    }
    
    if((typeof collection) === 'object'){
        for (var key in collection){
            anArray.push(aTestFunc(collection[key], key, collection));
        }
    return anArray;
    }
    
}

module.exports.map = map; 

/**
  * 
  * pluck: checks an array of objects and returns a new array that features the value of the property of each element in the array 
  * 
  * @param {array} array: array will run in function 
  * @param {value} property: property value 
  * @return {*}: returns a new array that features the values of each property 
  *
  */
  
function pluck(array, property){

var newArray = [];

for (let i = 0; i < array.length; i++){
    newArray.push(array[i][property]);
}

return newArray; 

}

module.exports.pluck = pluck;

/**
  * 
  * every: calls function for every element/property of the collections value. if function returs true for every element true is returned, 
  * if function returns false for every element/property false is returned. if function parameter is not a function, return true if every 
  * element is a truty and false if not.
  * 
  * @param {array or object} collection: collection will run in function 
  * @param {function} aTestFunc: function or not a function
  * @return {*}: returns true or false, depending on if all elements/properties called return true or false, and also if the function exists
  *
  */
  
function every(collection, aTestFunc){
  if(typeof aTestFunc !== "function"){ aTestFunc = identity}// if testFunction does not exist or is not a function, a testFunc = _.identity.
    if((Array.isArray(collection))){ // loop checking if is an array
        for (let i = 0; i < collection.length; i++){ // looping through collections 
            if((aTestFunc(collection[i], i, collection)) === false){ // checking if triggers false with function parameter 
                return false; //returning false if so 
        }
   //  return true; //returning true if no falses are present in collections 
    }
    if((typeof collection) === 'object'){ // checking if object
        for (var key in collection){ // looping through if object 
            if ((aTestFunc(collection[key], key, collection) === false)){ // checking if any falses are triggered while looping through with function 
                return false; //returning false if so 
            }
        }
   // return true; //returning true if not
    }
  //  }
}
return true;
}

module.exports.every = every; 

/**
  * 
  * some: calls function for every element/property of the collections value. if function returns true for at least one element true is returned, 
  * if function returns false for every element/property false is returned. if function parameter is not a function, return true if at least one 
  * element is a truthy. 
  * 
  * @param {array or object} collection: collection will run in function 
  * @param {function} aTestFunc: function or not a function
  * @return {*}: returns true or false, depending on if at least one element/property called return true and false if every element/property returned false.
  * Returns true if function does not exist if at least one element is a truthy. 
  *
  */
  
 function some(collection,testF){
    if (typeof collection === "object"){// if collection is an object 
        for(let key in collection){// using for in loop to acess keys in collection 
            if(testF){
                if(testF(collection[key],key, collection) ? true:false){
                    return true;
                }
            }else{
                if(collection[key] ? true:false){
                    return true;
                }
            }
        }
        return false;
    }
    else{// If collection is an array
        for(let i = 0; i<= collection.length - 1; i++){// use a for loop to access elements in array 
            if(testF){
                if(testF(collection[i],i, collection) ? true:false){
                    return true;
                }
            }else{
                if(collection[i] ? true:false){
                    return true;
                }
            }
        }
        return false;
    }
}

module.exports.some = some; 

/**
  * 
  * reduce: calls function for every element in a collection. uses return value of function as the previous result of the next interation and 
  * on the first iteration uses seed as a result. if no seed is given use first element/value of collection as seed. At the last interartion 
  * return the return value of the final function call. 
  * 
  * @param {array} array: an array that will be included in function call 
  * @param {function} func: function 
  * @param {seed} seed: seed that will be included in call  
  * @return {*}: the return value of the final function call 
  *
  */
  
 function reduce(array,func,seed){
    var prev = typeof seed === "number" ? func(seed,array[0],0):array[0];
    for(let i = 1; i <= array.length - 1; i++){
        prev = func(prev, array[i], i);
    }
    return prev;
}
 
 module.exports.reduce = reduce; 
 
 /**
  * 
  * extend: takes the values of all object arguments and adds to the first object argument provided
  * 
  * @param {object1} object: an object that will recieve value of other objects
  * @param {object#} object: objects that values will be inserted into object1
  * @return {*}: updated object1
  *
  */
  
  function extend(object1, object2){
  for(let i = 1; i < arguments.length; i++){
      Object.assign(object1, arguments[i]);
      }
return object1;
  }

module.exports.extend = extend;  

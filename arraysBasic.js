//These are my solutions to some basic algorithms that deal with the array data structure. I attempted to do them all in place
//without creating new data structures.

//Given array, remove and return the value at the beginning of the array.

function popFront(arr){
    var val = arr[0];

    for(var i = 0; i < arr.length-1; i++){
        arr[i] = arr[i+1]
    }
    arr.length = arr.length -1
    console.log(arr)
    return val
}

var arr =[ 1,2,3,4]
popFront(arr)

var arr =[ "goat", "Pig", "bird"]
popFront(arr)

//Given an array and an additional value, insert this value at the beginning of the array.
function pushFront(arr,val){
    arr[arr.length] = val
    var temp;

    for(var i = 0; i < arr.length-1; i++){
        temp = arr[i]
        arr[i] = arr[arr.length -1]
        arr[arr.length-1] = temp
    }
    console.log(arr)
    return arr;
}
var arr = [-9,800,1,3,4]
var val = "cheese"

pushFront(arr, val)

//Given a sorted array, return the array with all duplicate values removed.

function removeDups(arr){
    // var temp = arr[0];
    var insertAt = 0;
    if(arr === null || arr.length === 0) return arr;
    if(arr.length === 1) return arr;
    
    for (var i = 0; i <= arr.length-1; i++){
        if (arr[i] === arr[i+1]){
            continue;
        }else{
            arr[insertAt] = arr[i]
            insertAt += 1;
        }
    }
    arr.length = insertAt;
    console.log(arr);
    return arr;
  }
  var arr = [-3,-3,1,5,5,"cat", "cat", 9,10,15,15,"cheese"]
  removeDups(arr)

// Doesn't maintain proper order if duplicate min values exist; I was only able do this in place 
//by creating a seperate helper function that locates the minimum value in the array.

function findMin(arr){
    var min = arr[0];
    for (var i = 1; i <= arr.length - 1; i++){
        console.log(i);
        if (arr[i] < min){
            console.log("min is: " + min)
            min = arr[i]
        }else{
            console.log("min is:" + min)
        }
    }
    return min;
}
function minToFront(arr){
    var min = findMin(arr);
    var temp;
    for (var i = arr.length-1; i > 0; i--){
        if (arr[i] != min){
            continue;
        }else{
            arr[i] = arr[i-1]
            arr[i-1] = min;
        }
    }
    console.log(arr);
    return arr;
}
var arr = [9,8,1,3,1,4]
minToFront(arr)

var arr = [9,7,8,2,3,8,4]
minToFront(arr);

//Given an array, return an array with values reversed. ([1,2,3] should yield [3,2,1])

function reverse(arr){
    var temp = arr[arr.length-1];

    for (var i = 0; i < (arr.length -1) /2; i++){
        temp = arr[arr.length-(1+i)]
        arr[arr.length-(1+i)] = arr[i];
        arr[i] = temp;
    }
    console.log(arr);
    return arr;
}
var arr = [4,2,1,3,5]
reverse(arr);
var arr = [1,2,3,4,5]
reverse(arr);
var arr = ["1","2","3","4","5"]
reverse(arr);
var arr = ["cat","dog","pony","chicken"]
reverse(arr);
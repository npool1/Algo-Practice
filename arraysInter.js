function concat(arr1, arr2){
    for (var i = 0; i<arr2.length; i++){
        arr1[arr1.length] = arr2[i]
    }
    return arr1;
}

var arr1 = [1,2,3]
var arr2 = [-4,"pig",60000000]

concat (arr1, arr2)

function filterRange(arr,min,max){
    for (var i = 0; i < arr.length; i++){
        if(arr[i] >= min && arr[i] <= max){
            continue;
        }else{
            arr[i] = 0;
        }
    }
    console.log(arr)
    return arr;
}

var arr = [1,2,3,4,5,6,7,8,9]
var min = 2
var max = 8

filterRange(arr,min,max)
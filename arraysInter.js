function rotateArr(arr, shiftBy){
    var temp;
    for(var i = 0; i < arr.length; i++){
        if (i + shiftBy <= arr.length -1){
            temp = arr[i + shiftby]
            arr[i + shiftby] = arr[i]
        }else{
            temp = arr[(arr.length-1)-shiftBy]
        }

    }
}

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

function concat(arr1, arr2){
    for (var i = 0; i<arr2.length; i++){
        arr1[arr1.length] = arr2[i]
    }
    return arr1;
}

var arr1 = [1,2,3]
var arr2 = [-4,"pig",60000000]

concat (arr1, arr2)

function skyline(arr){

    var insertAt;
    
    for (var i = 0; i < arr.length; i++){
      console.log("insertAt: " + insertAt + "\n" + "i: " + i);
      if(i === 0 && arr[i] > 0){
        insertAt = i + 1
      }
      if (i === 0 && arr[i] <= 0){
        insertAt = i;
      }else{
          if (insertAt === 0 && arr[i] > arr[insertAt]){
            arr[insertAt] = arr[i]
            insertAt += 1;
            console.log(arr)
          }
          else if(arr[i] > arr[insertAt-1]){
            arr[insertAt] = arr[i]
            insertAt += 1;
            console.log(arr)
          }
        }
    } 
    var difference = arr.length - insertAt;
    arr.length = (arr.length) - difference;
    return arr
}

var arr = [1,2,3,-4,5];
skyline(arr);


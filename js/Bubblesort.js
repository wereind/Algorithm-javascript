function bubbleSort(arr) {
    for(var i=0 ; i<arr.length ; i++){
        for(var j=i+1 ; j<arr.length ; j++){
            var temp;
            if (arr[i]>arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;
}

var arr = [5,4,3,2,1];
var x = bubbleSort(arr);
console.log(x);

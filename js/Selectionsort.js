function selectionSort(arr) {
    var nonius,current;
    for(var i=0 ; i<arr.length-1 ; i++){
        nonius = i;
        current = arr[i];
        for(var j=i+1 ; j<arr.length ; j++){
            if (arr[i] > arr[j]) {
                nonius = j;
            }
        }
        if (nonius != i) {
            arr[i] = arr[nonius];
            arr[nonius] = current;
        }
    }
    return arr;
}

var arr = [5,4,3,2,1];
console.log(selectionSort(arr));

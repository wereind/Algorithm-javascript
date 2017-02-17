function selectionSort(arr) {
    var nonius,current;
    for(var i=0 ; i<arr.length-1 ; i++){
        nonius = i;
        current = arr[i];
        for(var j=i+1 ; j<arr.length ; j++){ // 遍历数组相邻两数大小，取小者标识，最后确定最小值位置
            if (arr[i] > arr[j]) {
                nonius = j;
            }
        }
        if (nonius != i) {  // 将最小数放入当前比较数据的头部
            arr[i] = arr[nonius];
            arr[nonius] = current;
        }
    }
    return arr;
}

var arr = [5,4,3,2,1];
console.log(selectionSort(arr));

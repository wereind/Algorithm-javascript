function insertionSort(arr) {
    var items = [];
    if (arr.length > 0) {   // 将待排序数组第一项填入新有序数组
        items.push(arr[0])
    }
    for(var i=0 ; i<arr.length ; i++){
        for(var j=0; j<items.length ; j++){      //找到第一个不小于当前数值的元素位置，在之前插入
            if (arr[i] < items[j] && i > j) {
                items.splice(j,0,arr[i]);
                break;
            }
        }
    }
    return items;
}

// function sort(elements){
//   //假设第0个元素是一个有序的数列，第1个以后的是无序的序列，
//   //所以从第1个元素开始将无序数列的元素插入到有序数列中
//   for(var i = 1; i < elements.length; i++){
//     //升序
//     if(elements[i] < elements[i-1]){
//       //取出无序数列中的第i个作为被插入元素
//       var guard = elements[i];
//       //记住有序数列的最后一个位置，并且将有序数列位置扩大一个
//       var j = i - 1;
//       elements[i] = elements[j];
//
//       //比大小，找到被插入元素所在的位置
//       while(j >= 0 && guard < elements[j]){
//         elements[j+1] = elements[j--];
//       }
//
//       //插入
//       elements[j+1] = guard;
//     }
//   }
// }

var arr = [7,5,3,1,2,4,6];
arr = insertionSort(arr);
console.log(arr);

// function　merge(left, right){
//     var　result=[];
//     while(left.length>0 && right.length>0){
//         if(left[0]<right[0]){
//         /*shift()方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。*/
//             result.push(left.shift());
//         }else{
//             result.push(right.shift());
//         }
//     }
//     return　result.concat(left).concat(right);
// }
// function　mergeSort(items){
//     if(items.length == 1){
//         return　items;
//     }
//     var　middle = Math.floor(items.length/2),
//     left = items.slice(0, middle),
//     right = items.slice(middle);
//     return　merge(mergeSort(left), mergeSort(right));
// }

function merge(left,right) {
    var temps = [];
    while(left.length>0 && right.length>0) {
        if (left[0] < right[0]) {       // 比较两有序数组各项，将小者推入新数组中
            temps.push(left.shift());
        } else {
            temps.push(right.shift());
        }
    }

    return temps.concat(left).concat(right);    // 将未比较的数据（较大）拼接到新数组中
}

function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    var middle = Math.floor(arr.length/2),
        left = arr.slice(0,middle),
        right = arr.slice(middle);
    return merge(mergeSort(left),mergeSort(right));     // 递归调用merge()；
}

var arr = [1,7,3,5,6,2,4];
var x = mergeSort(arr);
console.log(x);

/*
    JavaScript实现快速排序算法
    6-百度百科（不创建新数组，实现原数组的排序）
    阮一峰(创建了新数组，排序后的数组为新建数组)
    学习后编写（个人更倾向于返回原数组的代码方式）
*/


// 百度百科
// function quickSort(array){
//     function sort(prev, numsize){
//         var nonius = prev;
//         var j = numsize -1;
//         var flag = array[prev];
//         if ((numsize - prev) > 1) {
//             while(nonius < j){
//                 for(; nonius < j; j--){
//                     if (array[j] < flag) {
//                         array[nonius++] = array[j];　//a[i] = a[j]; i += 1;
//                         break;
//                     };
//                 }
//                 for( ; nonius < j; nonius++){
//                     if (array[nonius] > flag){
//                         array[j--] = array[nonius];
//                         break;
//                     }
//                 }
//                 document.write(array + "; nonius=" + nonius + " ;j=" + j + "<br/>")
//             }
//             array[nonius] = flag;
//             sort(0, nonius);
//             sort(nonius + 1, numsize);
//         }
//     }
//     sort(0, array.length);
//     return array;
// }
// var arr = [2,9,1,8,7,3,6,4,5];
// var arrSort = quickSort(arr);
// console.log(arrSort);



// 阮一峰
// var quickSort = function(arr) {
// 　　if (arr.length <= 1) { return arr; }
// 　　var pivotIndex = Math.floor(arr.length / 2);
// 　　var pivot = arr.splice(pivotIndex, 1)[0];
// 　　var left = [];
// 　　var right = [];
// 　　for (var i = 0; i < arr.length; i++){
// 　　　　if (arr[i] < pivot) {
// 　　　　　　left.push(arr[i]);
// 　　　　} else {
// 　　　　　　right.push(arr[i]);
// 　　　　}
// 　　}
// 　　return quickSort(left).concat([pivot], quickSort(right));
// };



// 自己写的

function quickSort(array) {
    if (array.length <= 1){
        return array;
    }
    function sort(prev,numsize){
        var noniusLeft = prev;
        var noniusRight = numsize-1;
        var flag = array[numsize-1];
        if ((numsize - prev) > 1) {
            while (noniusRight > noniusLeft) {
                for(; noniusLeft < noniusRight ; noniusLeft++){
                    if (array[noniusLeft] >= flag) {
                        array[noniusRight--] = array[noniusLeft];
                        console.log(array);
                        break;
                    }
                }
                for( ; noniusLeft < noniusRight ; noniusRight--){
                    if (array[noniusRight] < flag) {
                        array[noniusLeft++] = array[noniusRight];
                        console.log(array);
                        break;
                    }
                }
            }
            array[noniusLeft] = flag;
            sort(0,noniusLeft-1);
            sort(noniusLeft,numsize);
        }

    }
    sort(0,array.length);
    return array;
}
var arr = [2,9,1,8,7,3,6,4,5];
var arrSort = quickSort(arr);
console.log(arrSort);
console.log(arrSort == arr);

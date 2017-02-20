// 希尔排序



// Array.prototype.shellSort = function(){
//     var len = this.length,
//         gap = parseInt(len/2),
//         i, j, tmp;
//     while(gap > 0){
//         for(i=gap; i<len; i++){
//             tmp = this[i];
//             j = i - gap;
//             while(j>=0 && tmp < this[j]){
//                 this[j+gap] = this[j];
//                 j = j - gap;
//             }
//             console.log(this);
//             this[j + gap] = tmp;
//         }
//         gap = parseInt(gap/2);
//     }
//     return this;
// };
var arr = [9,2,1,4,7,5,6,8,3];
arr = arr.shellSort();
console.log(arr);

function shellInsertionSort(arr,dk) {
    var tmp = [],
        
}

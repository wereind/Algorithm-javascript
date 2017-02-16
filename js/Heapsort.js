/*
    JavaScript实现堆排序
*/


// 百度百科
// Array.prototype.buildMaxHeap=function(){
//     for(var i=Math.floor(this.length/2)-1;i>=0;i--){
//         this.heapAdjust(i,this.length);
//     }
// };

// Array.prototype.swap=function(i,j){
//     var tmp=this[i];
//     this[i]=this[j];
//     this[j]=tmp;
// };
//
// Array.prototype.heapSort=function(){
//     this.buildMaxHeap();
//     for(var i=this.length-1;i>0;i--){
//         this.swap(0,i);
//         this.heapAdjust(0,i);
//     }
//
//     return this;
// };
//
// Array.prototype.heapAdjust=function(i,j){
//     var largest=i;      // 堆顶
//     var left=2*i+1;     // 左孩子结点
//     var right=2*i+2;    // 右孩子节点
//     if(left<j&&this[largest]<this[left]){
//         largest=left;
//     }
//
//     if(right<j&&this[largest]<this[right]){
//         console.log(right);
//         largest=right;
//     }
//
//     if(largest!=i){
//         this.swap(i,largest);
//         this.heapAdjust(largest,j);
//     }
//     console.log(this);
// };




// 自己写的

Array.prototype.buildMaxHeap = function(){      // 建立堆（二叉树）
    for(var i=Math.floor(this.length/2)-1;i>=0;i--){        // i项之前的项都含有子节点
        this.heapAdjust(i,this.length);
    }
}
Array.prototype.swap = function(i,j){
    var temp = this[i];
    this[i] = this[j];
    this[j] = temp;
}
Array.prototype.heapSort = function(){
    this.buildMaxHeap();
    for(var i = this.length-1 ; i>0 ; i--){     // i>0即可，一个数没必要自比
        this.swap(0,i);
        this.heapAdjust(0,i);
    }

    return this;
}
Array.prototype.heapAdjust = function(i,j){     // 调整二叉树子树，形成大根堆； j是排序数据个数边界
    var largest = i;
    var left = 2*i+1;
    var right = 2*i+2;

    // 父节点小于子节点时，指针指向更大的数

    if (left<j && this[largest]<this[left]) {
        largest = left;
    }
    if (right<j && this[largest]<this[right]) {
        largest = right;
    }

    // 交换数值，实现大根堆
    if (largest != i) {
        this.swap(i,largest);
        this.heapAdjust(largest,j);     // 交换完后，继续调整以largest为父节点的堆
    }
    console.log(this);
}

var arr = [8,1,7,2,6,3,5,4];
console.log(arr.heapSort());

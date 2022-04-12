var arr1 = [1, 2, 3, 4, 7, 8, 9];
var arr2 = [1, 5, 9, 4, 7, 8, 6];
function intersection(arry1, arry2) {
    var arr3 = [];
    var objnew = {};
    for (var i = 0; i < arry1.length; i++) {
        for (var j = 0; j < arry2.length; j++) {
            if (arry1[i] === arr2[j]) {
                arr3.push(arry2[j]);
                arr2.splice(j, 1);
                objnew[arry1[i]] = true;
                break;
            }
        }
    }
    return objnew;
}
console.log(intersection(arr1, arr2));

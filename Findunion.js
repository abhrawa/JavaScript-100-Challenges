var arry1 = [1, 2, 3, 4, 5, 6, 7];
var arry2 = [2, 77, 3, 78];
function findUnion(arr, brr) {
    var IResult = {};
    for (var i = 0; i < brr.length; i++) {
        arr.push(brr[i]);
    }
    for (var j = 0; j < arr.length; j++) {
        if (IResult.hasOwnProperty(arr[j]))
            continue;
        IResult[arr[j]] = true;
    }
    return IResult;
}
console.log(findUnion(arry1, arry2));

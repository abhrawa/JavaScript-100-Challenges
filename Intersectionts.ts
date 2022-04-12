interface Iobjnew {
  [key:number] : boolean; 
}

const arr1: number[] = [1, 2, 3, 4, 7, 8, 9];
const arr2: number[] = [1, 5, 9, 4, 7, 8, 6];
function intersection(arry1: number[], arry2: number[]): Iobjnew {
  const arr3: number[] = [];
  let objnew:Iobjnew  = {};
  for (let i = 0; i < arry1.length; i++) {
    for (let j = 0; j < arry2.length; j++) {
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

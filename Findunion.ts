interface IResult {
  [key: number]: boolean;
}

const arry1: number[] = [1, 2, 3, 4, 5, 6, 7];
const arry2: number[] = [2, 77, 3, 78];

function findUnion(arr: number[], brr: number[]): IResult {
  const IResult = {};

  for (let i = 0; i < brr.length; i++) {
    arr.push(brr[i]);
  }
  for (let j = 0; j < arr.length; j++) {
    if (IResult.hasOwnProperty(arr[j])) continue;
    IResult[arr[j]] = true;
  }
  return IResult;
}
console.log(findUnion(arry1, arry2));

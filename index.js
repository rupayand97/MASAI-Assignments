// program 1: Print even numbers present in an array
function findEvenNumbers(arr){
    var result="";
    for(let i=0; i<=arr.length-1; i++){
        if(arr[i]%2==0){
            result = result + arr[i] +" ";
        }
    }
    return result;
}
console.log(findEvenNumbers([1,2,3,4,5,6]));
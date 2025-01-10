function biggest(arr){
    let maxNumber=arr[0];
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>maxNumber)
        {
            maxNumber=arr[i];
        }
    }
        return maxNumber;
}
let array=[9,5,3,10,5,33]
console.log(biggest(array))
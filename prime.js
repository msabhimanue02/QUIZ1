function prime(num){
    if (num<=1){
        return false;
    }
    else{
        for(let i=2;i<num;i++)
        {
            if(num%i==0){
                return false
            }

        }
    }
    return true
}
let number= 10
console.log("prime =",prime(number))
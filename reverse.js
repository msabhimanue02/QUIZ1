function reverse(num){
   let reversed=0;
   while(num>0)
   {
    lastDigit=num % 10;
    reversed=reversed * 10 + lastDigit;
    num=Math.floor(num / 10);
   }
   return reversed;
}
let number=7654
console.log(reverse(number));
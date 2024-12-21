//function
function sam(name){
    console.log(name);

}
sam('samay');
//Arrow function
const one = ()=>{
    console.log("sam");
}
one();
//iife(immideatly invoked function expression)
(function sum(num1,num2){
    let x=num1+num2;
    console.log(x);

})(3,4);


((num1,num2)=> 
    {
    let y=num1+num2
    console.log(y);
})(2,3);

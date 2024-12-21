function saymyname(){
    console.log("samay beniwal");
    
}
saymyname();
// function printcounting(){
//     for(let i=1;i<=100;i++){
//         console.log(i);
//     }
// }
// printcounting();


// function having arguments/parameters
// function counting(num){
//     for(let i=1;i<=num;i++){
//         console.log(i);
        
//     }
// }
// counting(10);

//return function
// function avg(a,b,c){
//     let aver=(a+b+c)/3;
//     return aver; 
// }
// let average = avg(10,20,30);
// console.log("average: ",average);

// function expression
// let avg=function(a,b,c){
//     let aver=(a+b+c)/3;
//     return aver; 
// }
// let average = avg(10,20,30);
// console.log("average: ",average);


//arrow function

let avg=(a,b,c)=>{
    let aver=(a+b+c)/3;
    return aver; 
}
let average = avg(10,20,30);
console.log("average: ",average);
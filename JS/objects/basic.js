let obj={
    name:"samay",
    age:19,
    weight:80,
    "full name":"Samay Beniwal",
    msg:function(){
        console.log("helo guy's how are you?");
        

    }
};
let cl={...obj};
obj.age=22;
console.log(obj);
console.log(cl);
obj.msg()
console.log(`what type is this: ${typeof(obj)}`);

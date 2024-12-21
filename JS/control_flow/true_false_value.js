//false values ={ false, 0, -0, bigint(0n), emptystring,
// null, undefined, NaN}

//true values ={"0", 'false', " ", emptyarray, objectempty,
//   function(){}empty function }

//check empty object 
const emptyobject = {}
if(Object.keys(emptyobject).length === 0){
    console.log("object is empty");
    
}
//check empty array
const emptyarray = []
if(emptyarray.length === 0){
    console.log("array is empty");
    
}
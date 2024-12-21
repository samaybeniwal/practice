const prm=fetch('https://api.github.com/users/kuldeepbeniwal');
const user=prm.then((data)=>{
  return data.json();
})
.then((response)=>{
  console.log(`the username is :${response.name}`,`Total followers is :${response.following}`);
}) 






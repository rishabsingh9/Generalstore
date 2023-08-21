let myform=document.getElementById("form");
myform.addEventListener('submit',onsubmit);
//let buttonid=null;
let bought=false;
function onsubmit(e){
    e.preventDefault();
    let obj={
        item:document.getElementById('itemname').value,
        description:document.getElementById('des').value,
        price:document.getElementById('price').value,
        quantity:document.getElementById('quantity').value
    }
    axios.post('https://crudcrud.com/api/b8b2a2414384434d8fb047a224112e6e/GeneralStore',obj)
    .then(response=>displayusers(response.data))
    .catch(err=>console.log(err));
}
window.addEventListener('DOMContentLoaded',()=>{
    axios.get('https://crudcrud.com/api/b8b2a2414384434d8fb047a224112e6e/GeneralStore')
  .then(dt=>{
    let len=dt.data.length
    for(let i=0;i<len;i++){
      displayusers(dt.data[i]);
     }
  })
  .catch(err=>console.log(err));
})
function displayusers(obj){
    var parent=document.getElementById('ule')
  var child=document.createElement('li');
  child.textContent=`${obj.item} - ${obj.description} - ${obj.price} - ${obj.quantity}`
  var BuyOne=document.createElement('button');
  BuyOne.textContent='BuyOne'
  var BuyTwo=document.createElement('button');
  BuyTwo.textContent='BuyTwo'
  var BuyThree=document.createElement('button');
  BuyThree.textContent='BuyThree';
  child.appendChild(BuyOne)
  child.appendChild(BuyTwo);
  child.appendChild(BuyThree);
  parent.appendChild(child);
BuyOne.onclick = () => {
    buttonid = obj._id;
    let total = obj.quantity;
    obj.quantity = total - 1;

    axios.put(`https://crudcrud.com/api/b8b2a2414384434d8fb047a224112e6e/GeneralStore/${buttonid}`,obj)
    .then(response=>console.log('done'))
    .catch(err=>console.log(err));
};
}
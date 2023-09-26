const form = document.getElementById('form');
const datashow = document.getElementById('data-container');
const deleteBtn = document.getElementById('delete');
const edit = document.getElementById('edit');





form.addEventListener('submit', storeLocal);
function storeLocal(event) {
    event.preventDefault();
    let amount = document.getElementById('amount').value;
    let description = document.getElementById('description').value;
    let category = document.getElementById('category').value;
  
    const formDataObject = {
      amount: amount,
      description: description,
      category: category,
  };
  
  
    alldata = JSON.parse(localStorage.getItem('form'));
    if (!alldata) {
      let arr = [];
      arr.push(formDataObject);
      localStorage.setItem('form',JSON.stringify(arr));
    } else {
      alldata.push(formDataObject);
      localStorage.setItem('form', JSON.stringify(alldata));
    }
  
  console.log(localStorage.getItem('form'));
  console.log(localStorage.length);
  
};

//  get data from local storage and show to screen


let localdata = JSON.parse(localStorage.getItem('form'));

if (localdata.length === 0) {
  datashow.textContent = "0 expences";
} else {
  const ul = document.createElement('ul');
  localdata.forEach(item => {
    const li = document.createElement('li');
    const deleteBtn = document.createElement('button'); 
    deleteBtn.textContent = `X`;
    deleteBtn.id = `delete`;
    const edit = document.createElement('button');
    edit.textContent = `edit`;
    edit.id = `edit`;
    
    li.textContent = `Amount: ${item.amount}, Description: ${item.description}, Category: ${item.category}`;
    ul.appendChild(li);
    ul.appendChild(deleteBtn);
    ul.appendChild(edit);
  });
  datashow.appendChild(ul);
}
 
console.log(localdata);


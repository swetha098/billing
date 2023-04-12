const name1 = document.getElementById('name');
const price = document.querySelector('#price');
const quantity = document.querySelector('#quantity');
const total =document.querySelector('#total');
const OutputgrandTotal = document.querySelector('.list table tfoot tr td:last-child');
const forms = document.querySelector('#forms');
const tbody = document.querySelector('.list table tbody');
let grandTotal=0;
const calcTotal = function(event){
    total.value="₹ " + (price.value * quantity.value);
    return price.value*quantity.value;
}
const createRow = function(){
    const td1 = document.createElement('td');
    const tr = document.createElement('tr');
    const button = document.createElement('button');
    button.innerText = 'X';
    button.addEventListener('click',(event)=>{
        event.target.parentNode.parentNode.remove();
        grandTotal = grandTotal - (event.target.parentNode.parentNode.lastChild.textContent);
        OutputgrandTotal.textContent = grandTotal;
    })
    td1.appendChild(button);
    const td2 = document.createElement('td');
    td2.innerText = name1.value;
    const td3 = document.createElement('td');
    td3.innerText = price.value;
    const td4 = document.createElement('td');
    td4.innerText = quantity.value;
    const td5 = document.createElement('td');
    td5.innerText = calcTotal();
    grandTotal = grandTotal+calcTotal();
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    return tr;
};
const addTo = function(event){
    event.preventDefault();
    tbody.appendChild(createRow());
    OutputgrandTotal.textContent = grandTotal;
};
name1.addEventListener('click',(event)=>{
    name1.value = '';
    price.value = '';
    quantity.value = '';
    total.value='';
}
)
price.addEventListener('input',calcTotal);
quantity.addEventListener('input',calcTotal);
forms.addEventListener('submit',addTo);
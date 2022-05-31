let selectedRow = null;

function onFormSubmit(){
  event.preventDefault();
  let formData = readFormData();
  if (selectedRow === null){
    insertNewRecord(formData);
  }
  else { 
    updateRecord(formData);
  }
    resetForm();
}

//Pegar as informações do formulário.

function readFormData(){
  let formData = {};
  formData["productCode"] = document.getElementById("productCode").value;
  formData["productName"] = document.getElementById("productName").value;
  formData["productQty"] = document.getElementById("productQty").value;
  formData["productPrice"] = document.getElementById("productPrice").value;
  return formData;
}

//Inserir informações no formulário.
function insertNewRecord(data){
  let table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
  let newRow = table.insertRow(table.lenght);
  let cell1 = newRow.insertCell(0);
      cell1.innerHTML = data.productCode;
  let cell2 = newRow.insertCell(1);
      cell2.innerHTML = data.productName;
  let cell3 = newRow.insertCell(2);
      cell3.innerHTML = data.productQty;
  let cell4 = newRow.insertCell(3);
      cell4.innerHTML = data.productPrice;
  let cell5 = newRow.insertCell(4);
      cell5.innerHTML = `<button onClick='onEdit(this)'>Editar</button> <button onClick='onDelete(this)'>Excluir</button>`;
}

//Editar formulário

function onEdit(td){
   selectedRow = td.parentElement.parentElement;
   document.getElementById('productCode').value = selectedRow.cells[0].innerHTML;
   document.getElementById('productName').value = selectedRow.cells[1].innerHTML;
   document.getElementById('productQty').value = selectedRow.cells[2].innerHTML;
   document.getElementById('productPrice').value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData){
  selectedRow.cells[0].innerHTML = formData.productCode;
  selectedRow.cells[1].innerHTML = formData.productName;
  selectedRow.cells[2].innerHTML = formData.productQty;
  selectedRow.cells[3].innerHTML = formData.productPrice;
}

//Deletar informações do formulário

function onDelete(td){
  if (confirm('Você tem certeza que deseja deletar essa informação?')){
    row = td.parentElement.parentElement;
    document.getElementById('storeList').deleteRow(row.rowIndex);
  }
  resetForm();
}

//Resetar form

function resetForm() {
  document.getElementById('productCode').value=''
  document.getElementById('productName').value=''
  document.getElementById('productQty').value=''
  document.getElementById('productPrice').value=''
}
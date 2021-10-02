var selectedRow = null

function onFormSubmit() {
    var formData = readFormData();
    if (selectedRow == null)
        insertNewRecord(formData);
    else
        updateRecord(formData);
    resetForm();
}

function readFormData() {
    var formData = ['Martabak', 'gorengan', 'air'];
    localStorage.setItem("Data_Makanan", JSON.stringify(formData));
    
    formData["foodName"] = document.getElementById("foodName").value;
    formData.push(foodName);
    var pval = "";
    for(i = 0; i < formData.length; i++){
        pval = pval + formData[i];
    }
    console.log(formData);
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("tableMenu").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);

    cell1 = newRow.insertCell(0);
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.foodName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = `<button class="btn btn-success me-lg-5 mb-1 me-2" type="button" onClick="onEdit(this)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16" onClick="onEdit(this)"><path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/></svg>Edit</button>
                        <button class="btn btn-danger" type="button" onClick="onDelete(this)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16"><path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/></svg>Delete</button>`;
}


// var table = document.getElementsByTagName('tableMenu')[1],
//   rows = table.getElementsByTagName('tr'),
//   text = 'textContent' in document ? 'textContent' : 'innerText';

// for (var i = 0, len = rows.length; i < len; i++) {
//   rows[i].children[0][text] = i + ': ' + rows[i].children[0][text];
// }
// function addRowCount(tableAttr) {
//     $(tableAttr).each(function(){
//       $('th:first-child, thead td:first-child', this).each(function(){
//         var tag = $(this).prop('tagName');
//         $(this).before('<'+tag+'>#</'+tag+'>');
//       });
//       $('td:first-child', this).each(function(i){
//         $(this).before('<td>'+(i+1)+'</td>');
//       });
//     });
//   }
  

function resetForm() {
    document.getElementById("foodName").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("foodName").value = selectedRow.cells[1].innerHTML;

}
function updateRecord(formData) {
    selectedRow.cells[1].innerHTML = formData.foodName;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("tableMenu").deleteRow(row.rowIndex);
        resetForm();
    }
}
// function validate() {
//     isValid = true;
//     if (document.getElementById("foodName").value == "") {
//         isValid = false;
//         document.getElementById("fullNameValidationError").classList.remove("hide");
//     } else {
//         isValid = true;
//         if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
//             document.getElementById("fullNameValidationError").classList.add("hide");
//     }
//     return isValid;
// }
// function shuffle(array) {
//     let currentIndex = array.length,  randomIndex;
  
//     // While there remain elements to shuffle...
//     while (currentIndex != 0) {
  
//       // Pick a remaining element...
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex--;
  
//       // And swap it with the current element.
//       [array[currentIndex], array[randomIndex]] = [
//         array[randomIndex], array[currentIndex]];
//     }
    
//     return array;
//   }
var gaga = ['Martabak', 'GOreng', 'Tepung'];
var ran = gaga.length;
function random(item){
var item = Math.floor(Math.random() * ran);
  console.log(gaga[item]);
}
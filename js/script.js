// function initialize(){
//     let products = localStorage.getItem("Menu");

//     if(products == null){
//         fetchData()
//         products = localStorage.getItem("Menu")
//     }
//     products = JSON.parse(products);

//     renderAllProduct(products);
// }

// function fetchData(){
//     let req = new XMLHttpRequest();

//     req.onreadystatechange = function(){
//         if (req.readyState != 4 || req.status != 200) return;
//         let data = JSON.parse(req.responseText);
//         localStorage.setItem("Menu",req.responseText);
//     }
//     req.onerror = function(){
//         alert(req.responseText);
//     }
//     req.open('GET','menu.json',true);
//     req.send();
// }

// function renderAllProduct(products){
//     products = JSON.parse(JSON.stringify(products));
//     products.forEach(product => renderProduct(product));
// }

// function renderProduct(product){
//     const tbody = document.getElementById('tableMenu').querySelector('tbody');
//     const newRow = document.createElement("tr");
//     const nameCol = document.createElement("td");
//     nameCol.appendChild(document.createTextNode(product.Nama));
//     newRow.appendChild(nameCol);

//     //newRow.appendchild(createdByCol);
//     tbody.appendChild(newRow);

// }
function initialize(){
    $(document).ready(function(){
    $.getJSON("menu.json", function(data){
        var menu_data = '';
        let a = 3;
        $.each(data, function(key, value){
            menu_data += '<tr>';
            menu_data += '<td>'+a++;+'</td>';
            menu_data += '<td>'+ value.Nama +'</td>';
            menu_data += '<td><button class="btn btn-success me-5" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16"><path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/></svg>Edit</button><button class="btn btn-danger" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16"><path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/></svg>Delete</button></td>';
            menu_data += '</tr>';
        });
        $('#tableMenuBod').append(menu_data);
    });
});
}


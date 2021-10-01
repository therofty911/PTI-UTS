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
//         if(req.readyState != 4 || req.status != 200){
//             return;
//         }
//         let data = JSON.parse(req.responseText);
//         localStorage.setItem("Menu", req.responseText);
//     }
//     req.onerror = function(){
//         alert(req.responseText);
//     }
//     req.open('GET', 'menu.json', true);
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
        var a = 3;
        $.each(data, function(key, value){
            menu_data += '<tr>';
            menu_data += '<td>'+a++;+'</td>';
            menu_data += '<td>'+ value.Nama +'</td>';
            menu_data += '<td><button class="btn btn-success me-lg-5 mb-1 me-2" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16"><path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/></svg>Edit</button><button class="btn btn-danger" type="button" onclick=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16"><path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/></svg>Delete</button></td>';
            menu_data += '</tr>';
        });
        $('#tableMenuBod').append(menu_data);
    });
});

// showTheList(json);
// addListFood(item);
// function store(){
//     // var inputFood = document.getElementById("foodName");
//     // localStorage.setItem("foodName", inputFood.value);
//          var arrItems = [];
//         localStorage.setItem("Data_Makanan", JSON.stringify(arrItems)); // Save the obj as string
//         var item = JSON.parse(localStorage.getItem("Data_Makanan")); 
//    }

}

var food = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

    function reportStatus() {
        if (food.readyState == 4)                   // Request completed.
            showTheList(this.responseText);         // All set. Now show the data.
    }

    food.onreadystatechange = reportStatus;
    food.open("GET", "menu.json", true);          // true = ASYNCHRONOUS REQUEST (DESIRABLE), false = SYNCHRONOUS REQUEST.
    food.send();

    function showTheList(json) {
        var arrItems = [];
        arrItems = JSON.parse(json); 	// Fill JSON data to an array.
        console.log(arrItems);

        // Now you can use the data in the array for different purpose.
        // I am simply showing the data on my web page using the <p> element.
        localStorage.setItem("Data_Makanan", JSON.stringify(arrItems)); // Save the obj as string
        var item = JSON.parse(localStorage.getItem("Data_Makanan")); 
    }

        
    function store(){
        arrItems[x] = document.getElementById("foodName").value;
        alert("Element: " + arrItems[x] + " Added at index " + x);
        x++;
        console.log(arrItems);
        document.getElementById("foodName").value = "";
    }

    // $("#create").on("click", (e) => {
    //     if (e.which === 13 && $("input").val() !== "") {
    //       todo = $("input").val();
    //       let todosData = localStorage.getItem("todos");
    //       if (todosData == null) {
    //         todos = [];
    //       } else {
    //         todos = JSON.parse(todosData);
    //       }
    //       todos.push(todo);
    //       localStorage.setItem("todos", JSON.stringify(todos));
    //       $("input").val("");
    //       checkTodos();
    //     }
    //   });

      $( "#create" ).on( "click", "button", function() {
          food = $("#create").val();
          let menuData = localStorage.getItem("menus");
          if (menuData == null) {
            menus = [];
          } else {
            menus = JSON.parse(menuData);
          }
          menus.push(food);
          localStorage.setItem("menus", JSON.stringify(menus));
          $("#create").val("");
          checkTodos();
        }
      );

    // if(window.localStorage !== undefined){
    //     var arrItems = [];
    //     var input = $("#foodName").val();
    //     $("#create").click(function (){
    //         var item = JSON.parse(localStorage.getItem("foodName")); 
    //         localStorage.setItem("foodName", JSON.stringify(arrItems));
    //     });
    // };
        

    // function addListFood(item){
    //     const addFood = (ev) =>{
    //         let menu = {
    //             id: a++,
    //             Nama: document.getElementById('foodName').value
    //         }
    //         arrItems.push(menu);
    //         localStorage.setItem('anotherFood', JSON.stringify(arrItems));
    //         return arrItems;
    //     }
    //     document.addEventListener('DOMContentLoaded', ()=>{
    //         document.getElementById('create').addEventListener('click', arrItems);
    //     });
    // }


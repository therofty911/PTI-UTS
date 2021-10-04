showfood();
let addfoodinput = document.getElementById("addfoodinput");
let addfoodbtn = document.getElementById("addfoodbtn");

addfoodbtn.addEventListener("click", function(){
    addfoodinputval = addfoodinput.value;
    if(addfoodinputval.trim()!=0){
        let webfood = localStorage.getItem("localfood");
        if(webfood == null){
            foodObj = [];
        }
        else{
            foodObj = JSON.parse(webfood);
        }
        foodObj.push({'food_list':addfoodinputval});
        console.log(foodObj);
		// console.log(foodObj, 'Ashendra');
        localStorage.setItem("localfood", JSON.stringify(foodObj));
        addfoodinput.value = '';
        alert("Your data has been added");
    }
    showfood();
})

// showfood
function showfood(){
    let webfood = localStorage.getItem("localfood");
    if(webfood == null){
        foodObj = [];

    }
    else{
        foodObj = JSON.parse(webfood);
    }
    let html = '';
    let head = '';
    
    let addedtasklist = document.getElementById("addedtasklist");
    foodObj.forEach((item, index) => {
            foodCompleteValue = `<td>${item.food_list}</td>`;
        //}
        // var newRow = table.insertRow(table.length);
        // cell2 = newRow.insertCell(1);
        // cell2.innerHTML = `<thead><th>Name</th></thead>`;
        html += `<tbody>
                <tr>
                    <th scope="row">${index+1}</th>
                    ${foodCompleteValue}
                    <td><button class="btn btn-success" type="button" onclick="editfood(${index})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16" onClick="onEdit(this)"><path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/></svg>Edit</button></td>
                    <td><button class="btn btn-danger" type="button" onclick="deleteitem(${index})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16"><path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/></svg>Delete</button></td>
                </tr></tbody>`;
    });
    addedtasklist.innerHTML = html;

}

// editfood
function editfood(index){
    let saveindex = document.getElementById("saveindex");
    let addfoodbtn = document.getElementById("addfoodbtn");
    let savefoodbtn = document.getElementById("savefoodbtn");
    saveindex.value = index;
    let webfood = localStorage.getItem("localfood");
    let foodObj = JSON.parse(webfood); 
    let confirmEdit = confirm("Do you wanna edit this list?");
    if (confirmEdit) {
        addfoodinput.value = foodObj[index]['food_list'];
        addfoodbtn.style.display="none";
        savefoodbtn.style.display="block";
        alert("You can edit the list food");
    } else {
        alert("You have been cancled for edit the list");
    }
}

// savefood
let savefoodbtn = document.getElementById("savefoodbtn");
savefoodbtn.addEventListener("click", function(){
    let addfoodbtn = document.getElementById("addfoodbtn");
    let webfood = localStorage.getItem("localfood");
    let foodObj = JSON.parse(webfood); 
    let saveindex = document.getElementById("saveindex").value;
    
    for (keys in foodObj[saveindex]) {
        if(keys == 'food_list'){
            alert("Your data has been updated!");
            foodObj[saveindex].food_list = addfoodinput.value;
        }
    }
    savefoodbtn.style.display="none";
    addfoodbtn.style.display="block";
    localStorage.setItem("localfood", JSON.stringify(foodObj));
    addfoodinput.value='';
    showfood();
})
// deleteitem
function deleteitem(index){
    let webfood = localStorage.getItem("localfood");
    let foodObj = JSON.parse(webfood);
    let confirmDelete = confirm("Are you sure to delete this list?");
    if (confirmDelete) {
        foodObj.splice(index, 1);
        localStorage.setItem("localfood", JSON.stringify(foodObj));
      alert("Your list food has been deleted");
    } else {
      alert("Remove food has been cancled");
    }
    showfood();
}
// complete food
let addedtasklist = document.getElementById("addedtasklist");
    addedtasklist.addEventListener("click", function(e){
        
        // showfood();
        let webfood = localStorage.getItem("localfood");
        let foodObj = JSON.parse(webfood);
        
        let mytarget = e.target;
        if(mytarget.classList[0] === 'text-success'){
        let mytargetid = mytarget.getAttribute("id");
                
        mytargetpresibling = mytarget.parentElement.previousElementSibling.previousElementSibling;
            
            // let mynewelem = mytargetpresibling.classList.toggle("completed");
            // foodObj.splice(mytargetid,1,mynewelem);
            for (keys in foodObj[mytargetid]) {
                if(keys == 'complefoodatus' && foodObj[mytargetid][keys]==true){
                    foodObj[mytargetid].complefoodatus = false;
                }else if(keys == 'complefoodatus' && foodObj[mytargetid][keys]==false){
                    foodObj[mytargetid].complefoodatus = true;
                }
              }
        //}
       // showfood();        
        localStorage.setItem("localfood", JSON.stringify(foodObj));
        showfood();
    }
})


// random list food
function random(item){
    let webfood = localStorage.getItem("localfood");
    let foodObj = JSON.parse(webfood);  
    let tempcon = foodObj;
    let ran = tempcon.length;
    let food = [];
    // let validTable = document.getElementById("tableMenuBod");
    if(webfood = null){
        console.log("list is empty");
        return false;
    }
    else{
        if(foodObj.length<3){
            for(let i = 0; i<3; i++){
                var item = Math.floor(Math.random() * ran);
                food.push(tempcon[item]);
                // console.log(food[0], food[1], food[2]);
            }
            addtorandom(food);
        }
        else if(foodObj.length>=3){
            for(let i = 0; i<3; i++){
                var item = Math.floor(Math.random() * (ran));
                food.push(tempcon[item]);
                // console.log(item, food[0], food[1], food[2]);
                ran--;
                tempcon.splice(item,1);
            }
            addtorandom(food);
        }
    }
}

function addtorandom(food){
    // if( document.getElementById("breakfast").value.length == 0 ){ //cek di list random uda ada isi atau belum
    //     let breakfast = document.getElementById("breakfast");
    //     let lunch = document.getElementById("lunch");
    //     let dinner = document.getElementById("dinner");

    //     breakfast.innerHTML = food[1];
    //     lunch.innerHTML = food[2];
    //     dinner.innerHTML = food[3];
    // }
    //else{
        // console.log(food);
        if(food[0] == null || food[1] == null || food[2] == null){
            alert("Your list food is empty, fill it first");
        }else {
            document.getElementById("breakfast").value = food[0].food_list;
            document.getElementById("lunch").value = food[1].food_list;
            document.getElementById("dinner").value = food[2].food_list;
        }
   // }

}


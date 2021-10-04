showtask();
let addtaskinput = document.getElementById("addtaskinput");
let addtaskbtn = document.getElementById("addtaskbtn");

addtaskbtn.addEventListener("click", function(){
    addtaskinputval = addtaskinput.value;
    if(addtaskinputval.trim()!=0){
        let webtask = localStorage.getItem("localtask");
        if(webtask == null){
            taskObj = [];
        }
        else{
            taskObj = JSON.parse(webtask);
        }
        taskObj.push({'task_name':addtaskinputval});
        console.log(taskObj);
		// console.log(taskObj, 'Ashendra');
        localStorage.setItem("localtask", JSON.stringify(taskObj));
        addtaskinput.value = '';
        alert("Your data has been added");
    }
    showtask();
})

// showtask
function showtask(){
    let webtask = localStorage.getItem("localtask");
    if(webtask == null){
        taskObj = [];

    }
    else{
        taskObj = JSON.parse(webtask);
    }
    let html = '';
    let head = '';
    
    let addedtasklist = document.getElementById("addedtasklist");
    taskObj.forEach((item, index) => {
        // if(item.completeStatus==true){
        //     taskCompleteValue = `<td class="completed">${item.task_name}</td>`;
        // }else{
            taskCompleteValue = `<td>${item.task_name}</td>`;
        //}
        // var newRow = table.insertRow(table.length);
        // cell2 = newRow.insertCell(1);
        // cell2.innerHTML = `<thead><th>Name</th></thead>`;
        html += `<tbody>
                <tr>
                    <th scope="row">${index+1}</th>
                    ${taskCompleteValue}
                    <td><button class="btn btn-success" type="button" onclick="edittask(${index})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16" onClick="onEdit(this)"><path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/></svg>Edit</button></td>
                    <td><button class="btn btn-danger" type="button" onclick="deleteitem(${index})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16"><path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/></svg>Delete</button></td>
                </tr></tbody>`;
    });
    addedtasklist.innerHTML = html;

}

// edittask
function edittask(index){
    let saveindex = document.getElementById("saveindex");
    let addtaskbtn = document.getElementById("addtaskbtn");
    let savetaskbtn = document.getElementById("savetaskbtn");
    saveindex.value = index;
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask); 
    let confirmEdit = confirm("Do you wanna edit this list?");
    if (confirmEdit) {
        addtaskinput.value = taskObj[index]['task_name'];
        addtaskbtn.style.display="none";
        savetaskbtn.style.display="block";
        alert("You can edit the list food");
    } else {
        alert("You have been cancled for edit the list");
    }
}

// savetask
let savetaskbtn = document.getElementById("savetaskbtn");
savetaskbtn.addEventListener("click", function(){
    let addtaskbtn = document.getElementById("addtaskbtn");
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask); 
    let saveindex = document.getElementById("saveindex").value;
    
    for (keys in taskObj[saveindex]) {
        if(keys == 'task_name'){
            alert("Your data has been updated!");
            taskObj[saveindex].task_name = addtaskinput.value;
        }
    }
    // taskObj[saveindex] = {'task_name':addtaskinput.value, 'completeStatus':false} ;
  //  taskObj[saveindex][task_name] = addtaskinput.value;
    savetaskbtn.style.display="none";
    addtaskbtn.style.display="block";
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    addtaskinput.value='';
    showtask();
})
// deleteitem
function deleteitem(index){
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);
    let confirmDelete = confirm("Are you sure to delete this list?");
    if (confirmDelete) {
        taskObj.splice(index, 1);
        localStorage.setItem("localtask", JSON.stringify(taskObj));
      alert("Your list food has been deleted");
    } else {
      alert("Remove food has been cancled");
    }
    showtask();
}
// complete task
let addedtasklist = document.getElementById("addedtasklist");
    addedtasklist.addEventListener("click", function(e){
       // console.log(e);
        
        // showtask();
        let webtask = localStorage.getItem("localtask");
        let taskObj = JSON.parse(webtask);
        
        let mytarget = e.target;
        if(mytarget.classList[0] === 'text-success'){
        let mytargetid = mytarget.getAttribute("id");
        
        
        // let taskValue = taskObj[mytargetid]['task_name'];
        
        mytargetpresibling = mytarget.parentElement.previousElementSibling.previousElementSibling;
            
            // let mynewelem = mytargetpresibling.classList.toggle("completed");
            // taskObj.splice(mytargetid,1,mynewelem);
            for (keys in taskObj[mytargetid]) {
                if(keys == 'completeStatus' && taskObj[mytargetid][keys]==true){
                    taskObj[mytargetid].completeStatus = false;
                   // taskObj[mytargetid] = {'task_name':taskValue, 'completeStatus':false};
                }else if(keys == 'completeStatus' && taskObj[mytargetid][keys]==false){
                    taskObj[mytargetid].completeStatus = true;
                    //taskObj[mytargetid] = {'task_name':taskValue, 'completeStatus':true};
                }
              }
        //}
       // showtask();        
        localStorage.setItem("localtask", JSON.stringify(taskObj));
        showtask();
    }
})

function random(item){
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);  
    let tempcon = taskObj;
    let ran = tempcon.length;
    let test = [];
    // let validTable = document.getElementById("tableMenuBod");
    if(webtask == null){
        console.log("list is empty");
        return false;
    }
    else{
        if(taskObj.length<3){
            for(let i = 0; i<3; i++){
                var item = Math.floor(Math.random() * ran);
                test.push(tempcon[item]);
                // console.log(test[0], test[1], test[2]);
            }
            addtorandom(test);
        }
        else if(taskObj.length>=3){
            for(let i = 0; i<3; i++){
                var item = Math.floor(Math.random() * (ran));
                test.push(tempcon[item]);
                // console.log(item, test[0], test[1], test[2]);
                ran--;
                tempcon.splice(item,1);
            }
            addtorandom(test);
        }
    }
}

function addtorandom(test){
    // if( document.getElementById("breakfast").value.length == 0 ){ //cek di list random uda ada isi atau belum
    //     let breakfast = document.getElementById("breakfast");
    //     let lunch = document.getElementById("lunch");
    //     let dinner = document.getElementById("dinner");

    //     breakfast.innerHTML = test[1];
    //     lunch.innerHTML = test[2];
    //     dinner.innerHTML = test[3];
    // }
    //else{
        console.log(test);
        document.getElementById("breakfast").value = test[0].task_name;
        document.getElementById("lunch").value = test[1].task_name;
        document.getElementById("dinner").value = test[2].task_name;
   // }

}


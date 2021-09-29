function initialize(){
    let products = localStorage.getItem("Menu");

    if(products == null){
        fetchData()
        products = localStorage.getItem("Menu")
    }
    products = JSON.parse(products);

    renderAllProduct(products);
}

function fetchData(){
    let req = new XMLHttpRequest();

    req.onreadystatechange = function(){
        if (req.readyState != 4 || req.status != 200) return;
        let data = JSON.parse(req.responseText);
        localStorage.setItem("Menu",req.responseText);
    }
    req.onerror = function(){
        alert(req.responseText);
    }
    req.open('GET','menu.json',true);
    req.send();
}

function renderAllProduct(products){
    products = JSON.parse(JSON.stringify(products));
    products.forEach(product => renderProduct(product));
}

function renderProduct(product){
    const tbody = document.getElementById('tableMenu').querySelector('tbody');
    const newRow = document.createElement("tr");
    const nameCol = document.createElement("td");
    nameCol.appendChild(document.createTextNode(product.Nama));
    newRow.appendChild(nameCol);

    //newRow.appendchild(createdByCol);
    tbody.appendChild(newRow);

}

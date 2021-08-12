var form = document.getElementById("form-section");
var listItem = document.getElementById("group-item");


form.addEventListener('submit', addItem);
listItem.addEventListener('click', removeItem); 

function addItem(e){
    e.preventDefault();
    //Get the value of the input
    var valueInput = document.getElementById("input").value;
    //Create li
    var li = document.createElement('li');
    //Create text Node --textNode come from valueInput
    var text = document.createTextNode(valueInput);
    li.appendChild(text)
    

    //button delete
    var btnDelete =  document.createElement("button");
    var btnTxtNode =  document.createTextNode("X")
    btnDelete.className = "del"
    btnDelete.appendChild(btnTxtNode);

    li.appendChild(btnDelete)
    //list style is the ul from html
    listItem.appendChild(li)
}

//delete function
function removeItem(e){
    if (e.target.classList.contains('del')){
        var li = e.target.parentElement;
        listItem.removeChild(li)
    }
}
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var editbutton = document.getElementById('addForm');

//Form submit event //
form.addEventListener('submit', addItems);
//Delete event//
itemList.addEventListener('click', removeItem);
//Add Item event //
editbutton.addEventListener('edit', editItem);

//Add Items //
function addItems(e) {
    e.preventDefault();

    //Get input Value //
    var newItem = document.getElementById('item').value;

    //creat new Li element //
    var li = document.createElement('li');
    //Addclass //
    li.className = 'list-group-item';
    // console.log(li);
    // Add text node with input value //
    li.appendChild(document.createTextNode(newItem));

    // create the Delete elememt //
    var deleteBtn = document.createElement('button');
    // add class to  del button //
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // appent textNode //
    deleteBtn.appendChild(document.createTextNode('X'));
    
    //append button to li //
    li.appendChild(deleteBtn);
    itemList.appendChild(li);

    var edit = document.createElement('edit');
    edit.className = 'form-inline mb-3';
    edit.appendChild(document.createTextNode(edit));
    edit.appendChild(edit);
    editbutton.appendChild(editItem);

}

    //remove Item //
    function removeItem(e){
       if(e.target.classList.contains('delete')){
          if(confirm('Are Yoy Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
          }
       }
    }

    //edit Item //
    function editItem(e){
        console.log(1);
    }

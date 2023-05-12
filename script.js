var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');


//Form submit event //
form.addEventListener('submit', addItems);
//Delete event//
itemList.addEventListener('click', removeItem);
//filter Item event //
filter.addEventListener('keyup', filterItems);

form.addEventListener('submit', addItems);
//Add Items //
function addItems(e) {
    e.preventDefault();

    //Get input Value //
    var newItem = document.getElementById('item').value;
    var secondItem = document.getElementById('item1').value;
    //creat new Li element //
    var li = document.createElement('li');
  
    //Addclass //
    li.className = 'list-group-item';
 
    // console.log(li);
    // Add text node with input value //
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(secondItem));

    // create the Delete elememt //
    var deleteBtn = document.createElement('button');
    // add class to  del button //
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // appent textNode //
    deleteBtn.appendChild(document.createTextNode('X'));
    
    //append button to li //
    li.appendChild(deleteBtn);
    itemList.appendChild(li);

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

    //filter Item //
    function filterItems(e){
        //convert into lowerCase//
    var text = e.target.value.toLowerCase();
    // console.log(text);
    //GET li//
    var items = itemList.getElementsByTagName('li');
    //convert into array //
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        var description = item.childNodes[1].textContent;
        if(itemName.toLowerCase().indexOf(text) != -1 || description.toLowerCase().indexOf(text) != -1){
            item.style.display ='block';
        }else{
            item.style.display ='none';
        }
    });
    }


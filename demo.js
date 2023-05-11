// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = 133;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent= "Hello";
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

// console.log(document.getElementById("header-title"));
// var headerTitle = document.getElementById("header-title");
// // var header = document.getElementById("main-header");
// // console.log(headerTitle);
// // headerTitle.textContent = "hello";
// // headerTitle.innerText = "GoodBye";
// // headerTitle.innerHTML = "<h3>Hello</h3>";
// // headerTitle.style.border = 'solid 3px #000';
// var Main = document.getElementById("main");
// // console.log(Main);
// Main.style.fontWeight  = 'bold';
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// // console.log(items[1]);
// // items[1].textContent = 'hello2';
// // items[1].style.fontWeight = 'bold';
// // items[2].style.backgroundColor = 'green';


// // items.style.backgroundColor = 'yellow';    -->  its not working
// for(var i = 0; i< items.length; i++){
//     items[i].style.fontWeight= 'bold';
//     items[i].style.backgroundColor='yellow';
// }

// Tag Name
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'hello2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'green';


// // items.style.backgroundColor = 'yellow';    -->  its not working showing error
// for(var i = 0; i< li.length; i++){
//     // li[i].style.fontWeight= 'bold';
//     li[i].style.backgroundColor='yellow';
// }

// QuerySelector //

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'balck';
// var input = document.querySelector('input');
// input.value= 'hello world';
// var submit = document.querySelector("input[type='submit']");
// submit.value ='send';
// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';
// var lastitem = document.querySelector('.list-group-item:last-child');
// lastitem.style.color = 'blue';
// // var seconditem = document.querySelector('.list-group-item:nth-child(2)');
// // seconditem.style.color = 'green';

// // Question Code //
// var seconditem = document.querySelector('.list-group-item:nth-child(2)');
// seconditem.style.backgroundColor = 'green';
// var thirditem = document.querySelector('.list-group-item:nth-child(3)');
// thirditem.style.visibility = 'hidden';

// QuerySelectorALL //
// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'HELLO';

// var odd = document.querySelectorAll('li:nth-child(2)');
// // var even = document.querySelectorAll('li:nth-child(even)');

// for(var i =0; i<odd.length;  i++){
//     odd.style.backgroundColor ='green';
//     // even[i].style.backgroundColor = 'yellow';
//}
// var sec = document.querySelectorAll('li');
//  sec[1].style.color = 'green';


// traversing the dom //
// var itemList = document.querySelector('#items');
// //ParentNode//
// // console.log(itemList.parentNode);
// // itemList.parentNode.style.backgroundColor = 'grey';
// // console.log(itemList.parentNode.parentNode.parentNode);

// //parentElement//
// // console.log(itemList.parentElement);
// // itemList.parentNode.style.backgroundColor = 'grey';
// // console.log(itemList.parentNode.parentNode.parentNode);

// // childNode //
// // console.log(itemList.childNodes); //Useless Thing//

// // console.log(itemList.children);
// // console.log(itemList.children[1]);
// // itemList.children[1].style.backgroundColor = 'yellow';

// // FirstChild//   //Useless Thing//
// // console.log(itemList.firstChild);   //Useless Thing//

// // FirstElementChild //
// // console.log(itemList.firstElementChild);
// // itemList.firstElementChild.textContent ='hello';

// // // lastChild//   //Useless Thing//
// // // console.log(itemList.lastChild);   //Useless Thing//

// // // lastElementChild //
// // console.log(itemList.lastElementChild);
// // itemList.lastElementChild.textContent ='hello';

// // nextSibling //
// // console.log(itemList.nextSibling);
// // // nextElementSibling //
// // console.log(itemList.nextElementSibling);

// // previousSibling //
// // console.log(itemList.previousSibling);
// // // previousElementSibling //
// // console.log(itemList.previousElementSibling);
// // itemList.previousElementSibling.style.color ='red';

// // creatELement //

// //creat a div //
// var newDiv = document.createElement('div');
// //add Class//
// newDiv.className ='hello';

// //add id //
// newDiv.id ='hello1';

// //add Attribute//
// newDiv.setAttribute('title', 'hello Div');

// //creat textNode //
// var newtextNode = document.createTextNode("Hello World");

// //Add text //
// newDiv.appendChild(newtextNode);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// console.log(newDiv);

// newDiv.style.fontSize = '30px';
// container.insertBefore(newDiv , h1);
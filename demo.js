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
var items = document.getElementsByClassName('list-group-item');
console.log(items);
// console.log(items[1]);
// items[1].textContent = 'hello2';
// items[1].style.fontWeight = 'bold';
// items[2].style.backgroundColor = 'green';


// items.style.backgroundColor = 'yellow';
for(var i = 0; i< items.length; i++){
    items[i].style.fontWeight= 'bold';
    items[i].style.backgroundColor='yellow';
}
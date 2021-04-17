
let book;


function add(){
    let bi = document.getElementById('bi').value;
    let nm = document.getElementById('name').value;
    let auth = document.getElementById('author').value;       
    let pr = document.getElementById('price').value;

    var data={
        id: bi,
        name:nm,
        price:pr,
        author:auth
        };
        insert(db,data)
        
}



function insert(db,Books){
    const txn = db.transaction('Books','readwrite');
    
    const store = txn.objectStore('Books');
    
    let query = store.put(Books,Books.id);
    
    query.onsuccess = function(event){
    console.log(event);
    alert("data added successfully , Refresh the page to see in list");
    }
    
    query.onerror= function(event){
    console.log(event.target.errorCode);
    }
    
    
    }

function getAllBooks() {
    const txn = db.transaction('Books', "readonly");
    const objectStore = txn.objectStore('Books');

    objectStore.openCursor().onsuccess = (event) => {
        let cursor = event.target.result;
        if (cursor) {
             book = cursor.value;
            console.log(book);
            
            // continue next record

            var table = document.getElementById("go");
            var row = table.insertRow(table.length);
            var cell1 = row.insertCell(0);
            cell1.innerHTML = book.id;
            var cell2 = row.insertCell(1);
            cell2.innerHTML = book.name;
            var cell3 = row.insertCell(2);
            cell3.innerHTML = book.author;
            var cell4 = row.insertCell(3);
            cell4.innerHTML = book.price
            var cell5 = row.insertCell(4);
            cell5.innerHTML ="<button onclick=edit(this)>edit</button> "
            var cell6 = row.insertCell(4);
            cell6.innerHTML ="<button onclick=delet(this)>delete</button> ";

            cursor.continue();
        }
    };
    // close the database connection
   
}




function start() {
add();
reset();        
}


    
function reset(){
    document.getElementById("bi").value="";
    document.getElementById("name").value="";
    document.getElementById("author").value="";
    document.getElementById("price").value="";
    }


    function edit(td){
        selectRow=td.parentElement.parentElement;
        document.getElementById("bi").value=selectRow.cells[0].innerHTML;
        document.getElementById("name").value=selectRow.cells[1].innerHTML;
        document.getElementById("author").value=selectRow.cells[2].innerHTML;
        document.getElementById("price").value=selectRow.cells[3].innerHTML;
    }




function update() {
let r1=document.getElementById("bi").value;
let r2=document.getElementById("name").value;
let r3=document.getElementById("author").value;
let r4=document.getElementById("price").value;
let udata ={
 id:r1,
name:r2,
author:r3,
price:r4
}
 const txn = db.transaction('Books','readwrite');

const store = txn.objectStore('Books');

let query = store.put(udata,r1);

query.onsuccess = function(event){
console.log(event);
alert("data Updated successfully , Refresh the page to see in list");
}

query.onerror= function(event){
console.log(event.target.errorCode);
}

reset();
}


function delet(td) {
    selectRow=td.parentElement.parentElement;
    var r = selectRow.cells[0].innerHTML;
// var r = prompt("Please enter your id", "RowsId");
const txn = db.transaction("Books", "readwrite");
const store = txn.objectStore("Books");
let query = store.delete(r);
           
           query.onsuccess = function(event) {
              alert(" entry has been removed from your database.");
           };
        }






window.indexedDB = window.indexedDB || window.mozIndexedDB || window.msIndexedDB || window.webkitIndexedDB ;

window.IDBTransaction = window.IDBTransaction ||window.webkitIDBTransaction || window.msIDBTransaction;

window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

if(!window.indexedDB ){
window.alert("your browser is not supported indexedDB");
}

var db ;

var request = window.indexedDB.open("newBase",1);

request.onerror = function(event){
    console.log("error"+event.target.result)
}

request.onsuccess = function(event){
    db= request.result;
    console.log("success"+db);
    getAllBooks();
 }
     request.onupgradeneeded = function(event) {
 let db = event.target.result;

 // create the Contacts object store 
 // with auto-increment id
 let store = db.createObjectStore('Books',{ autoIncrement: true}) ;

}
     

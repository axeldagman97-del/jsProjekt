
"use strict";

const textArea = document.getElementById('textArea');
const searchArea = document.getElementById('searchArea');

const button = document.getElementById('addBtn');
const clearBtn = document.getElementById('clearBtn');
const apiBtn = document.getElementById('apiBtn');

const list = document.getElementById('list1');
const done = document.getElementById('list2');
const apiList = document.getElementById('list3');



let toDoArray = []

const savedData = localStorage.getItem("toDoList");



// Laddar in sparad data från Local Storage

document.addEventListener('DOMContentLoaded', () => {
    const savedData = localStorage.getItem("toDoList");

    if (savedData){
        toDoArray = JSON.parse(savedData);

        renderList(toDoArray);
    }
});

function renderList(array){
    list.innerHTML ="";

    const activeTodos = array.filter(item => !item.done);

    if (activeTodos.length === 0) {
        const emptyMessage = document.createElement("li");
        emptyMessage.textContent = "Listan är tom";
        list.appendChild(emptyMessage);

    }else {
        for (let item of activeTodos) {
        listItem(item)
    }}}

//Lägg till i listan

button.addEventListener("click", (event) => {                                    //Form, vid klick
    event.preventDefault();

    if (textArea.value.trim() === "") {                                          //Validering, kontrollerar att fältet inte är tomt. 
        alert("Du måste skriva något");
        return;
    }

    const toDoItem = {
        id: Date.now(),
        text: textArea.value,    
        done:false
    };

    console.log("Klick funkar, text:", textArea.value);

   toDoArray.push(toDoItem);
   localStorage.setItem("toDoList", JSON.stringify(toDoArray))

    renderList(toDoArray);

    textArea.value = "";                                                         //Succes state.  

});


function listItem(item) {
    const li = document.createElement("li");
    li.textContent = item.text;

    const deleteBtn = document.createElement("button");
    const checkBtn = document.createElement("button");
    deleteBtn.textContent = "Radera";
    checkBtn.textContent = "Avklarad";

    deleteBtn.addEventListener("click", () => {
       li.parentElement.removeChild(li);
       
       toDoArray = toDoArray.filter(todo => todo.id !== item.id);                //uppdaterar  toDoArray vid delete-klick, 
       localStorage.setItem("toDoList", JSON.stringify(toDoArray));              // sparar uppdaterad array i local Storage 
       renderList(toDoArray);
    });

    checkBtn.addEventListener("click", () =>{
        done.appendChild(li);
        li.removeChild(checkBtn);
        item.done = true;
        localStorage.setItem("donelist", JSON.stringify(toDoArray));

    })

    li.appendChild(checkBtn);   
    li.appendChild(deleteBtn);
    list.appendChild(li);
    
}

  //sökfält - filtrerar item i arrayen.
  searchArea.addEventListener('input', (e) => {

    const searchText = e.target.value.toLowerCase();

    if (searchText === "") {
        renderList(toDoArray);
        return;
    }

    const filteredArray = toDoArray.filter(item => 
        item.text.toLowerCase().includes(searchText)
    );

    if (filteredArray.length > 0) {
        renderList(filteredArray);
    }else {
        list.innerHTML = "";                                                            // töm listan först
        const li = document.createElement("li");
        li.textContent = "Inga matchningar hittades";
        list.appendChild(li);
    }

});


//Hämta API 

async function fetchApi () {
  try {
    const url = ('https://jsonplaceholder.typicode.com/todos/1')
    const response = await fetch(url)

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

    const data = await response.json();
      console.log("Api data:", data)

      return data;

     } catch (error){
    console.log("fetch failed:", error.message);
  }
};

apiBtn.addEventListener("click", async () => {
    const data = await fetchApi(); // Vänta på att datan hämtas
    
    if (data) {
        const li = document.createElement("li"); // Skapa li-element 
        li.textContent = `API-uppgift: ${data.title}`; // Sätt text från API-responsen 
        apiList.appendChild(li); // Lägg till i listan list3 
    }
});
   




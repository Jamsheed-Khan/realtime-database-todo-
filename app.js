let getinp = document.querySelector("#inp");
let getaddbtn = document.querySelector("#add") 
let getul = document.querySelector("#ul");
let getclearbtn = document.querySelector("#clear");




import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getDatabase,ref, onValue, set  } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";
const firebaseConfig = {
  apiKey: "AIzaSyDh94-doq2N1iunKqOWNj-MEZVuhV68sII",
  authDomain: "realtime-database-todo-app.firebaseapp.com",
  projectId: "realtime-database-todo-app",
  storageBucket: "realtime-database-todo-app.appspot.com",
  messagingSenderId: "219357345861",
  appId: "1:219357345861:web:a02cd2f88334f5ebbe0b2c",
  measurementId: "G-EYWSE680BL"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);




getaddbtn.addEventListener('click',()=>{
  function writeUserData(userId, name,) {
  
    set(ref(db, 'users/',userId,name), {
      userId: Math.random()*1000,  
      name:getinp.value,
    });
  }
  getinp.value == ""
  //  console.log()
  writeUserData(getinp.value)
  // getinp.value == ""
    })




const starCountRef = ref(db, 'users/' );
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
getul.innerHTML +=
`<li id="${data.userId}" class="list">
<div class="liTextDiv"><p>${data.name}</p></div>
<div class="divClass">
<i onclick="editTodo(this)"  class="fa fa-pencil-square edit"></i>
<i onclick="delTodo(this)"  class="fa fa-trash deleted"></i>
</div>
</li>`
  console.log(data) 
});









// getaddbtn.addEventListener("click" , async ()=>{

//     let getli = document.createElement("li");
//     getli.className = "list"
//     let liTextDiv = document.createElement("div");
//     liTextDiv.setAttribute("class", "liTextDiv")
//     let liTextPara = document.createElement("p");
//     let litext = document.createTextNode(getinp.value);

      
//     liTextPara.appendChild(litext);
//     liTextDiv.appendChild(liTextPara);
//     getli.appendChild(liTextDiv)
//     getul.appendChild(getli);
//     getinp.value = ""
    
//     let div = document.createElement("div");
//     div.classList.add("divClass");
    
//     let editIcon = document.createElement("i");
//     editIcon.setAttribute('onclick' , 'editTodo(this)')
//     editIcon.className = 'edit'
//     editIcon.classList.add("fa");   
//     editIcon.classList.add("fa-pencil-square");
    
    
//     let delIcon = document.createElement("i");
//     delIcon.setAttribute("onclick" , "delTodo(this)")
//     delIcon.className = "deleted"
//     delIcon.classList.add("fa");
//     delIcon.classList.add("fa-trash");
//     div.appendChild(editIcon)
//     div.appendChild(delIcon)
//     getli.appendChild(div);
    
    
//   })
  

//   function delTodo(event){
//     event.parentNode.parentNode.remove();
//   }
  
//   function editTodo(e){
//     let editToDo = prompt("Edit your ToDo" , e.parentNode.parentNode.firstChild.textContent)
//     e.parentNode.parentNode.firstChild.textContent = editToDo
//   }


//   getclearbtn.addEventListener("click" , ()=>{
//     getul.innerHTML = ""
//   })
  
//   window.delTodo = delTodo
//   window.editTodo = editTodo



let getaddbtn = document.querySelector("#add")
let getul = document.querySelector("#ul");
let getclearbtn = document.querySelector("#clear");




import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getDatabase, ref, onValue, set, push, remove, update } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";
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

const userId = localStorage.getItem("userid")


getaddbtn.addEventListener('click', () => {
  let getinp = document.querySelector("#inp");

  console.log(userId);

  set(push(ref(db, `users/${userId}/todos/`)), {
    name: getinp.value,
  });

  getinp.value = "";
})



const getTodos = () => {

  const todoRef = ref(db, `users/${userId}/todos`);
  onValue(todoRef, (snapshot) => {
    getul.innerHTML = "";
    const data = snapshot.val();
    if (data) {
      getclearbtn.style.display = "block";
      for (const key in data) {
        const todo = data[key].name;
        getul.innerHTML +=
          `<li class="list">
    <div class="liTextDiv"><p>${todo}</p></div>
    <div class="divClass">
    <i onclick="editTodo(this,'${key}')"  class="fa fa-pencil-square edit"></i>
    <i onclick="delTodo('${key}')"  class="fa fa-trash deleted"></i>
    </div>
    </li>`
      }
    } else {
      getclearbtn.style.display = "none";
    }

  });

}

getTodos()


async function delTodo(id) {
  const delTodo = ref(db, `users/${userId}/todos/${id}`);
  await remove(delTodo)
}

function editTodo(e, id) {
  console.log(e.parentNode.parentNode.textContent);
  let editToDo = prompt("Edit your ToDo", e.parentNode.parentNode.textContent)
  const editTodoRef = ref(db, `users/${userId}/todos/${id}`);

  const editTodo = {
    name: editToDo
  }

  update(editTodoRef, editTodo)
}


getclearbtn.addEventListener("click", async () => {
  const delTodo = ref(db, `users/${userId}/todos/`);
  await remove(delTodo)
})

window.delTodo = delTodo
window.editTodo = editTodo



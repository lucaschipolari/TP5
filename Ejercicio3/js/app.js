
//document.addEventListener('DOMContentLoad', function (){

    const btnAddTask = document.getElementById("btnAddTask");
    const inputTask = document.getElementById("inputTask");
    const ul = document.getElementById("taskList");
    
    btnAddTask.addEventListener("click", () => {
  const taskText = inputTask.value.trim();
  
  if (taskText !== "") {
      const li = document.createElement("li");
      li.classList.add("list-group-item");
      li.classList.add("task-item");
      li.innerHTML = `
      ${taskText}
      <button type="button" class="btn btn-danger btn-sm float-right btnDeleteTask">Eliminar</button>
      `;
      ul.appendChild(li);
      inputTask.value = "";
      const btnDeleteTask = li.querySelector('.btnDeleteTask');
      btnDeleteTask.addEventListener('click', function () {
          li.remove(); // Eliminar la tarea al hacer clic en el botón
        });
    }
});

//});
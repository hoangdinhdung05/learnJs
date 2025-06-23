//add word to list

let currentFilter = "all"; //all, active, completed
let searchKeyWord = "";
const taskInput = document.getElementById("task-input");
const taskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

//mảng chứa công việc
let tasks = []; 

//add sự kiện khi kích nút thêm

taskBtn.addEventListener("click", () => {

    const taskText = taskInput.value.trim();

    if(taskText !== "") {
        //check
        const newTask = {
            id: Date.now(),
            text: taskText,
            completed: false
        };

        tasks.push(newTask);
        renderTasks();
        taskInput.value = "";
    }

});


//render task
function renderTasks() {
  taskList.innerHTML = "";


  // check filter
  let filteredTasks = tasks;
  if(currentFilter === "active") {
    //hoan thanh
    filteredTasks = tasks.filter(task => !task.completed);
  } else if(currentFilter === "completed") {
    //chua hoan thanh
    filteredTasks = tasks.filter(task => task.completed);
  }

  //check input search
  if(searchKeyWord !== "") {
    filteredTasks = filteredTasks.filter(
        task => task.text.toLowerCase()
        .includes(searchKeyWord.toLowerCase())
    );
  }

  filteredTasks.forEach(task => {
    const li = document.createElement("li");
    li.className = "task-item";
    if (task.completed) li.classList.add("completed");

    li.innerHTML = `
      <span>${task.text}</span>
      <div class="task-buttons">
        <button class="done-btn">✓</button>
        <button class="delete-btn">🗑</button>
      </div>
    `;

    const doneBtn = li.querySelector(".done-btn");
    const deleteBtn = li.querySelector(".delete-btn");

    if (doneBtn) {
      doneBtn.addEventListener("click", () => {
        task.completed = !task.completed;
        renderTasks();
      });
    }

    if (deleteBtn) {
      deleteBtn.addEventListener("click", () => {
        tasks = tasks.filter(t => t.id !== task.id);
        renderTasks();
      });
    }

    taskList.appendChild(li);
  });
}

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Cập nhật filter hiện tại
    currentFilter = button.getAttribute("data-filter");

    // Cập nhật giao diện active
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    // Hiển thị danh sách tương ứng
    renderTasks();
  });
});

const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", () => {
    searchKeyWord = searchInput.value.trim().toLowerCase();
    renderTasks();
});
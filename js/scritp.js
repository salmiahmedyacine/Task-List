document.querySelector('#push').onclick = function () {
    let taskInput = document.querySelector('#newtask input');
    let tasksContainer = document.querySelector('#tasks');

    if (taskInput.value.length == 0) {
        alert("Please Enter a Task");
    } else {
        tasksContainer.style.display = 'block';

        tasksContainer.innerHTML += `
          <div id="task">
            <span class="taskname">${taskInput.value}</span>
            <button class="delete"><i class="fa-solid fa-trash"></i></button>
          </div>
        `;

        taskInput.value = ''; 

        var current_tasks = document.querySelectorAll(".delete");
        for (let i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();

                if (tasksContainer.children.length === 0) {
                    tasksContainer.style.display = 'none';
                }
            }
        }
        var taskItems = document.querySelectorAll('#task .taskname');
        for (let i = 0; i < taskItems.length; i++) {
            taskItems[i].onclick = function () {
                this.classList.toggle('completed');
            }
        }
    }
};

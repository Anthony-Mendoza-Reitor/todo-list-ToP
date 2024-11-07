//This JS will contain the process to add a task to DOM
//Imports create new project/task JS
import {taskconst} from "/home/anthoxx2001/repos/todo-list-ToP/src/taskconst.js";

export function createNewTask(count){
    let task = taskconst();
    const Parent = document.getElementsByClassName("rightcontent")[0];
    //Gets the name of the task from a constructor function
    const taskPara = document.createElement('p');
    taskPara.innerHTML = task.name;
    taskPara.className = 'taskNAMES';
    // Creates a delete button
    const taskDel = document.createElement('button');
    taskDel.innerHTML = 'X';
    taskDel.style.color = 'red';
    taskDel.id = `taskDEL${count}`;
    taskDel.className = 'taskDEL';
    //Creates a div for task name and delete button
    const nameDele = document.createElement("div");
    nameDele.className = "nameDele";
    //Creates a description from const
    const taskdes = document.createElement('p');
    taskdes.innerHTML = task.description;
    taskdes.className = 'taskDESC';
    //Creates a Due date from const
    const taskdue = document.createElement('p');
    taskdue.innerHTML = task.duedate;
    taskdue.className = 'taskDUE';
    //Creates a Priority form const
    const taskpri = document.createElement('p');
    taskpri.innerHTML = task.priority;
    taskpri.className = 'taskPRI';
    //Creates a div for all the tasks items
    const taskDiv = document.createElement('div');
    taskDiv.className = `taskDIV${count}`;
    nameDele.appendChild(taskDel);
    nameDele.appendChild(taskPara);
    taskDiv.appendChild(nameDele);
    taskDiv.appendChild(taskdes);
    taskDiv.appendChild(taskdue);
    taskDiv.appendChild(taskpri);
    Parent.appendChild(taskDiv);
    //Adds 1 to counter
    count ++;
    //Adds event lsitener to alls
    const selecttdeletes = document.querySelectorAll('[class^="taskDEL"');
    selecttdeletes.forEach((button) => {
        button.addEventListener("click", () =>{
            document.getElementsByClassName("modular4")[0].style.visibility = "visible";
            document.getElementsByClassName("container")[0].style.filter = "blur(5px)";
            let Del2 = button.parentElement;
            let task2Del = Del2.parentElement;
            document.getElementById('deleteButton4').addEventListener("click", function() {
                task2Del.remove();
                document.getElementsByClassName("modular4")[0].style.visibility = "hidden";
                document.getElementsByClassName("container")[0].style.filter = "none";
            }); 
        });
    });
}
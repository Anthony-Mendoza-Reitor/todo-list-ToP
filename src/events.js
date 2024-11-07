//This JS will contain the event listener for all modulars
//Imports create new project/task JS
import {createNewProject} from "/home/anthoxx2001/repos/todo-list-ToP/src/createnewproject.js";
import {createNewTask} from "/home/anthoxx2001/repos/todo-list-ToP/src/createnewtask.js";
let counter = 1;
let count = 1;
export function events(){
    //Event Listener for add Project
    document.getElementById('addButton').addEventListener("click", function() {
        document.getElementsByClassName("modular1")[0].style.visibility = "visible";
        document.getElementsByClassName("container")[0].style.filter = "blur(5px)";
    }); 
    //Event Listener to Create a new project
    document.getElementById('createButton1').addEventListener("click", function() {
        createNewProject(counter);
        document.getElementsByClassName("modular1")[0].style.visibility = "hidden";
        document.getElementById('FormprojectName').value = '';
        document.getElementsByClassName("container")[0].style.filter = "none";
        counter ++;
    });
    //Event Listener to Delete a project
    const selectdeletes = document.querySelectorAll('[class^="projectDEL"');
    selectdeletes.forEach((button) => {
        button.addEventListener("click", () =>{
            document.getElementsByClassName("modular3")[0].style.visibility = "visible";
        });
    });
    //Event Listener for add Task
    document.getElementById('addTaskButton').addEventListener("click", function() {
        document.getElementsByClassName("modular2")[0].style.visibility = "visible";
        document.getElementsByClassName("container")[0].style.filter = "blur(5px)";
    });
    //Event Listener to Create a new task
    document.getElementById('createButton2').addEventListener("click", function() {
        createNewTask(count);
        document.getElementsByClassName("modular2")[0].style.visibility = "hidden";
        document.getElementById('FormtaskName').value = '';
        document.getElementById('FormtaskDescription').value = '';
        document.getElementById('FormtaskDueDate').value = '';
        document.getElementById('FormtaskPriority').value = '';
        document.getElementsByClassName("container")[0].style.filter = "none";
        count ++;
    }); 
    //Event Listener for cancel action 1
    document.getElementById('cancelButton1').addEventListener("click", function() {
        document.getElementsByClassName("modular1")[0].style.visibility = "hidden";
        document.getElementById('FormprojectName').value = '';
        document.getElementsByClassName("container")[0].style.filter = "none";
    }); 
    //Event Listener for cancel action 2
    document.getElementById('cancelButton2').addEventListener("click", function() {
        document.getElementsByClassName("modular2")[0].style.visibility = "hidden";
        document.getElementById('FormtaskName').value = '';
        document.getElementById('FormtaskDescription').value = '';
        document.getElementById('FormtaskDueDate').value = '';
        document.getElementById('FormtaskPriority').value = '';
        document.getElementsByClassName("container")[0].style.filter = "none";
    }); 
    //Event Listener for cancel action 3 
    document.getElementById('cancelButton3').addEventListener("click", function() {
        document.getElementsByClassName("modular3")[0].style.visibility = "hidden";
        document.getElementsByClassName("container")[0].style.filter = "none";
    }); 
    //Event Listener for cancel action 4
    document.getElementById('cancelButton4').addEventListener("click", function() {
        document.getElementsByClassName("modular4")[0].style.visibility = "hidden";
        document.getElementsByClassName("container")[0].style.filter = "none";
    }); 
    //Event Listener to change to default project
    document.getElementById('defaultProject').addEventListener("click", function() {
        document.getElementsByClassName("title")[0].innerHTML = document.getElementById('defaultProject').textContent;
    }); 
}
//This JS will contain the process to add a project to DOM
//Imports create new project/task JS
import {projectconst} from "/home/anthoxx2001/repos/todo-list-ToP/src/projectconst.js";
//Imports the DOM manipulation for tasks
import {taskDOM} from "/home/anthoxx2001/repos/todo-list-ToP/src/taskDOM.js";


export function createNewProject(counter){
    //Gets the name of the project from a constructor function
    let project = projectconst();
    const Parent = document.getElementsByClassName("leftcontent")[0];
    const projectPara = document.createElement('p');
    projectPara.innerHTML = project.name;
    projectPara.className = `ProjectNAMES${counter}`;
    // Creates a delete button
    const projectDel = document.createElement('button');
    projectDel.innerHTML = 'X';
    projectDel.style.color = 'red';
    projectDel.id = `projectDEL${counter}`;
    projectDel.className = 'projectDEL';
    //Creates a div for the project & button
    const proDiv = document.createElement('div');
    proDiv.className = `ProjectsDIV${counter}`;
    proDiv.appendChild(projectPara);
    proDiv.appendChild(projectDel);
    Parent.appendChild(proDiv);
    //Adds event listeners to all buttons
    const selectdeletes = document.querySelectorAll('[class^="projectDEL"');
    selectdeletes.forEach((button) => {
        button.addEventListener("click", () =>{
            document.getElementsByClassName("modular3")[0].style.visibility = "visible";
            document.getElementsByClassName("container")[0].style.filter = "blur(5px)";
            let project2Del = button.parentElement;
            document.getElementById('deleteButton3').addEventListener("click", function() {
                project2Del.innerHTML='';
                document.getElementsByClassName("modular3")[0].style.visibility = "hidden";
                document.getElementsByClassName("container")[0].style.filter = "none";
            }); 
        });
    });
    //Adds event listener to all projects
    const selectprojects = document.querySelectorAll('[class^="ProjectNAMES"');
    selectprojects.forEach((p) => {
        p.addEventListener("click", () =>{
            //Add a DOM call to change the task section
            console.log(p.textContent);
            document.getElementsByClassName("title")[0].innerHTML = p.textContent;
        });
    });
}
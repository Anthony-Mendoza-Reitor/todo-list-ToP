//This JS will contain the process to create a new project

export function projectconst(){
    function Project (name, task){
        this.name = name; 
        this.task = task;
    }
    let namef = document.getElementById('FormprojectName');
    let project = new Project (namef.value);
    return (project);
}
    
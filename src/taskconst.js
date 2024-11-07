//This JS will contain the process to create a new task

export function taskconst(){
    function Task (name, description, duedate, priority){
        this.name = name; 
        this.description = description; 
        this.duedate = duedate; 
        this.priority = priority; 
    }
    let namef = document.getElementById('FormtaskName');
    let descriptionf = document.getElementById('FormtaskDescription');
    let duedatef = document.getElementById('FormtaskDueDate');
    let priorityf = document.getElementById('FormtaskPriority');
    let task = new Task (namef.value, descriptionf.value, duedatef.value, priorityf.value);

    return (task);
}
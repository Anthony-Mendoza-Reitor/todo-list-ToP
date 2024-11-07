//This JS will contain the create new project form
export function modular3(){
    //This stores the Parent for the created elements
    const Parent = document.getElementsByClassName("modular3")[0];
    Parent.innerHTML = '';
    //Creates a div to the forms elemenst
    const modularr = document.createElement("div");
    modularr.className = "modularr3";
    //This creates a header
    const formhead = document.createElement("h");
    formhead.innerHTML = "Delete Project";
    formhead.className = "projectDeleteHeader";
    //This creates a header
    const formpara = document.createElement("p");
    formpara.innerHTML = "Are you sure you want to delete this project? All associated tasks will be deleted.";
    formpara.className = "projectDeleteParagraph";
    //Creates a button
    var bt1 = document.createElement("button");
    var tt1 = document.createTextNode("Cancel");
    bt1.appendChild(tt1);
    bt1.id = "cancelButton3";
    var bt2 = document.createElement("button");
    var tt2 = document.createTextNode("Delete");
    bt2.appendChild(tt2);
    bt2.id = "deleteButton3";
    //Creates a div to store the buttons
    const butBucket = document.createElement("div");
    butBucket.className = "DeletebuttonsBucket";
    //Adds the buttons to the bucket
    butBucket.appendChild(bt1);
    butBucket.appendChild(bt2);
    //Appends the header to the modularr
    modularr.appendChild(formhead);
    modularr.appendChild(formpara);
    //Adds the bucket to modularr
    modularr.appendChild(butBucket);
    //Adds Modularr to the delete project bucket
    Parent.appendChild(modularr);
}
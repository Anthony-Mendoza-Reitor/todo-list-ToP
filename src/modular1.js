//This JS will contain the create new project form
export function modular(){
    //This stores the Parent for the created elements
    const Parent = document.getElementsByClassName("modular1")[0];
    Parent.innerHTML = '';
    //Creates a div to the forms elemenst
    const modularr = document.createElement("div");
    modularr.className = "modularr";
    //This creates a header
    const formhead = document.createElement("h");
    formhead.innerHTML = "New Project";
    formhead.className = "formhead";
    //This is to create a form
    const form1 = document.createElement("form");
    form1.setAttribute("method","text");
    //Project Name label
    const PNlabel = document.createElement("Label");
    PNlabel.innerHTML = "Project Name";
    PNlabel.className = "PNlabel";
    //This is to create an input for Project Name
    const PN = document.createElement("input");
    PN.setAttribute("type", "text");
    PN.setAttribute("name", "ProjectName");
    PN.setAttribute("maxlength", "8");
    PN.setAttribute("placeholder", "Project name...");
    PN.id = "FormprojectName";
    //Appends the input to the form
    form1.appendChild(PNlabel);
    form1.appendChild(PN);
    //Creates a button
    var bt1 = document.createElement("button");
    var tt1 = document.createTextNode("Cancel");
    bt1.appendChild(tt1);
    bt1.id = "cancelButton1";
    var bt2 = document.createElement("button");
    var tt2 = document.createTextNode("Create");
    bt2.appendChild(tt2);
    bt2.id = "createButton1";
    //Creates a div to store the buttons
    const butBucket = document.createElement("div");
    butBucket.className = "PNbuttonsBucket";
    //Adds the buttons to the bucket
    butBucket.appendChild(bt1);
    butBucket.appendChild(bt2);
    //Appends the header to the modularr
    modularr.appendChild(formhead);
    //Appends the form to the modularr
    modularr.appendChild(form1);
    //Adds the bucket to modularr
    modularr.appendChild(butBucket);
    //Adds Modularr to the forms bucket
    Parent.appendChild(modularr);
}
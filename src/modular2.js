//This JS will contain the create new task form
export function modular2(){
    //This stores the Parent for the created elements
    const Parent = document.getElementsByClassName("modular2")[0];
    Parent.innerHTML = '';
    //Creates a div to the forms elemenst
    const modularr = document.createElement("div");
    modularr.className = "modularr2";
    //This creates a header
    const formhead = document.createElement("h");
    formhead.innerHTML = "New Task";
    formhead.className = "formhead2";
    //This is to create a form
    const form1 = document.createElement("form");
    form1.setAttribute("method","text");
    //Task Name label
    const TNlabel = document.createElement("Label");
    TNlabel.innerHTML = "Task Name";
    TNlabel.className = "TNlabel";
    //This is to create an input for Task Name
    const TN = document.createElement("input");
    TN.setAttribute("type", "text");
    TN.setAttribute("name", "ProjectName");
    TN.setAttribute("placeholder", "Task name...");
    TN.setAttribute("maxlength", "15");
    TN.id = "FormtaskName";
    //Task Description label
    const TDlabel = document.createElement("Label");
    TDlabel.innerHTML = "Task Description";
    TDlabel.className = "TDlabel";
    //This is to create an input for Task Description
    const TD = document.createElement("input");
    TD.setAttribute("type", "text");
    TD.setAttribute("name", "ProjectName");
    TD.setAttribute("placeholder", "Task Description...");
    TD.setAttribute("maxlength", "30");
    TD.id = "FormtaskDescription";
    //Due date label
    const DDlabel = document.createElement("Label");
    DDlabel.innerHTML = "Due Date";
    DDlabel.className = "DDlabel";
    //This is to create an input for Task Due Date
    const TDD = document.createElement("input");
    TDD.setAttribute("type", "date");
    TDD.setAttribute("name", "ProjectName");
    TDD.setAttribute("placeholder", "Task Title...");
    TDD.id = "FormtaskDueDate";
    //task Priority label
    const TPlabel = document.createElement("Label");
    TPlabel.innerHTML = "Priority";
    TPlabel.className = "TPlabel";
    //This is to create an input for Task Priority
    const TP = document.createElement("SELECT");
    const opL = document.createElement("option");
    const opM = document.createElement("option");
    const opH = document.createElement("option");
    const optL = document.createTextNode("Low");
    const optM = document.createTextNode("Medium");
    const optH = document.createTextNode("High");
    TP.setAttribute("id", "FormtaskPriority");
    opL.setAttribute("value", "Low");
    opL.appendChild(optL);
    opM.setAttribute("value", "Medium");
    opM.appendChild(optM);
    opH.setAttribute("value", "High");
    opH.appendChild(optH);
    TP.appendChild(opL);
    TP.appendChild(opM);
    TP.appendChild(opH);
    //Appends the inputs to the form
    form1.appendChild(TNlabel);
    form1.appendChild(TN);
    form1.appendChild(TDlabel);
    form1.appendChild(TD);
    form1.appendChild(DDlabel);
    form1.appendChild(TDD);
    form1.appendChild(TPlabel);
    form1.appendChild(TP);
    //Creates a button
    var bt1 = document.createElement("button");
    var tt1 = document.createTextNode("Cancel");
    bt1.appendChild(tt1);
    bt1.id = "cancelButton2";
    var bt2 = document.createElement("button");
    var tt2 = document.createTextNode("Create");
    bt2.appendChild(tt2);
    bt2.id = "createButton2";
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
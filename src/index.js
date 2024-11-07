// index.js entry points for all styles sheets and JS 

//imports the styles sheets
import "./styles.css";

//Imports Modular1.js Modular2.js Modular3.js Modular4.js
import {modular} from "/home/anthoxx2001/repos/todo-list-ToP/src/modular1.js";
import {modular2} from "/home/anthoxx2001/repos/todo-list-ToP/src/modular2.js";
import {modular3} from "/home/anthoxx2001/repos/todo-list-ToP/src/modular3.js";
import {modular4} from "/home/anthoxx2001/repos/todo-list-ToP/src/modular4.js";

//Calls forms to create them but hidden with CSS
modular();
modular2();
modular3();
modular4();

//Imports events.js
import {events} from "/home/anthoxx2001/repos/todo-list-ToP/src/events.js";
events();
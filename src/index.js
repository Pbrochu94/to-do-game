import "./style.css"
import { projectArr } from "./data.js";
import {projectArrBehavior, projectCreation} from "./modules.js"

console.log("script start");

//Testing variables--
let firstTask = {
    title:"workout",
    time:"30min",
    due:"end of day",
    id:0,
}

let secondTask = {
    title:"laundry",
    time:"1h",
    due:"tomorrow",
    id:1,
}
//--------------------

//Rendre les donnees accessible--------
window.projectArr = projectArr
window.projectArrBehavior = projectArrBehavior
window.projectCreation = projectCreation
//-------------------------------------
projectArrBehavior.add(firstTask);
projectArrBehavior.add(secondTask);


console.log(projectArr);
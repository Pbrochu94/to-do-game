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
//--------------------

//Rendre les donnees accessible--------
window.projectArr = projectArr
window.projectArrBehavior = projectArrBehavior
window.projectCreation = projectCreation
//-------------------------------------
projectArrBehavior.add(firstTask);


console.log(projectArr);
import "./style.css"
import {quest} from "./modules.js"

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
window.quest = quest;
//-------------------------------------

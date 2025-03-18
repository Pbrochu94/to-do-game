import { projectArr} from "./data"
export {projectArrBehavior, projectCreation}

/*Array operations*/
const projectArrBehavior = {
    newProjectCount:0,
    add:function(object){
        projectArr.push(projectCreation.create(object));  
        this.addCounter();
    },
    del:function(projectToRemove){
        for(let currentProject of projectArr){
            if(currentProject.id === projectToRemove.id)
            {
                projectArr.splice(projectArr.indexOf(currentProject), 1);
            }
        }
    },
    addCounter:function(){
        this.newProjectCount++;
    },
    subCounter:function(){
        this.newProjectCount--;
    }
};

const projectCreation = {
    create:function(){
        let newTask = {
            title:object.title,
            time:object.time,
            due: object.due,
            id:projectArrBehavior.newProjectCount,
        }
        return newTask;
    }
};

/*dom manipulations(open window, add sections,etc)*/
const domManipulations = {
    openAddWindow:function(){
        let addWindow = document.querySelector(".add-quest-open-scroll");
        addWindow.classList.remove("invisible");
        listenersAction.addQuestWindowCloseListener;
    },
    closeAddWindow:function(){
        let objectToClose = document.querySelector(".add-quest-open-scroll");
        console.log(objectToClose);
        objectToClose.classList.add("invisible");
    }
}

/*Add the event listeners*/ 
const listenersAction = {
    addButtonListener:(function(){
        let addButton = document.querySelector(".add-project-button");
        addButton.addEventListener("click",domManipulations.openAddWindow);
    })(),
    addQuestListener:(function(){
        let quests = document.querySelectorAll(".quest-thumbnail");
        quests.forEach((quest)=>{
            console.log(quest)
            quest.addEventListener("click", function(){
            console.log("quests clicked");
        })})
    })(),
    addQuestWindowCloseListener:(function(){
        let closeButton = document.querySelector(".close-add-quest-window");
        closeButton.addEventListener("click", domManipulations.closeAddWindow)
    })(),
}


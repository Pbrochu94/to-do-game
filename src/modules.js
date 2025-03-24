import { projectArr} from "./data"
export {projectArrBehavior}

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

const quest = {
    idCounter:0,
    create:function(questName,questDuration, questEnding){
        this.idCounter++;
        let questObject = {
            title:questName,
            duration:questDuration,
            ending:questEnding,
            id:this.idCounter
        }
        console.log(questObject);
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
    addQuestSubmitListener:(function(){
        let submit = document.querySelector(".submit-button");
        submit.addEventListener("click",()=>console.log("button clicked"));
        console.log("Submit sent");
    })(),
    addOnSubmitFormListener:(function(){
        document.querySelector(".add-quest-form").addEventListener("submit",function(event){
            event.preventDefault();
            let questName = document.querySelector("#quest-name").value;
            let questTime = document.querySelector("#duration").value;
            let endingDate = document.querySelector("#ending-date").value;
            domManipulations.closeAddWindow();
            quest.create(questName,questTime,endingDate);
        })
    })(),
}


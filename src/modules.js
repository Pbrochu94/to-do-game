import { projectArr} from "./data"
export {quest, domManipulations}

/*Array operations*/
const quest = {
    array:[],
    newProjectCount:0,
    idCounter:0,
    createQuest:function(questName,questDuration, questEnding){
        this.idCounter++;
        let questObject = {
            title:questName,
            duration:questDuration,
            ending:questEnding,
            id:this.idCounter
        }
        console.log(questObject);
        quest.addToArr(questObject);
        domManipulations.createQuestElement(questObject);
    },
    addToArr:function(quest){
        this.array.push(quest);  
        this.newProjectCount++;
    },
    delFromArr:function(id){
        for(let currentProject of this.array){
            if(currentProject.id === id)
            {
                this.array.splice(this.array.indexOf(currentProject), 1);
            }
        }
    },
    subCounter:function(){
        this.newProjectCount--;
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
        document.querySelector("#quest-name").value = "";
        document.querySelector("#duration").value = "";
        document.querySelector("#ending-date").value = "";
        objectToClose.classList.add("invisible");
    },
    createQuestElement:function(questObject){
        let newQuest = document.querySelector(".quest-thumbnail").cloneNode(true);//clone default quest template with parameter true for all his descendant.
        newQuest.querySelector(".title").value = "Test";
        console.log(newQuest);
        this.addQuestToDom(newQuest);
    },
    addQuestToDom:function(newQuest){
        document.querySelector(".projects-wrapper").append(newQuest);
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
            quest.createQuest(questName,questTime,endingDate);
        })
    })(),
}


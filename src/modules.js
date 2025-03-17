import { projectArr} from "./data"
export {projectArrBehavior, projectCreation}

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

const questDomActions = {
    addButtonListener:(function(){
        let addButton = document.querySelector(".add-project-button");
        addButton.addEventListener("click",function(){
            questDomActions.openAddWindow()
            console.log("button clicked")
        })
    })(),
    addQuestListener:(function(){
        let quests = document.querySelectorAll(".quest-thumbnail");
        quests.forEach((quest)=>{
            console.log(quest)
            quest.addEventListener("click", function(){
            console.log("quests clicked");
        })})
    })(),
    openAddWindow:function(){
        
    }
}

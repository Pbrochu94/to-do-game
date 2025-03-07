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
    create:function(object){
        let newTask = {
            title:object.title,
            time:object.time,
            due: object.due,
            id:projectArrBehavior.newProjectCount,
        }
        return newTask;
    }
};
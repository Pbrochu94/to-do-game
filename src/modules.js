import { projectArr} from "./data"
export {projectArrBehavior, projectCreation}

const projectArrBehavior = {
    newProjectCount:0,
    add:function(object){
        projectArr.push(projectCreation.create(object));
        this.addCounter();
    },
    del:function(object){
        projectArr.splice(object.id,1)
        this.delCounter();
    },
    addCounter:function(){
        this.newProjectCount++;
    },
    delCounter:function(){
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
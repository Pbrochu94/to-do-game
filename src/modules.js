import { projectArr } from "./data"
export {projectArrBehavior, projectCreation}

const projectArrBehavior = {
    add:function(){
        projectArr.push(projectCreation.create());
        console.log(projectArr);
    }
};

const projectCreation = {
    create:function(){
        let newTask = {
            title : prompt("What is the task?"),
            time : prompt("How much time does it take?"),
            limit : prompt("when is the time limit"),
        }
        return newTask;
    }
};
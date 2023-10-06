
import todoElement from "../src/todo";
import projects from "./projects";


const projectsArray = [];
class Todo {
    constructor(title, description, dueDate, priority, notes) {
        this.title = title,
        this.description = description,
        this.dueDate = dueDate,
        this.priority = priority,
        this.notes = notes
    }
     
}

class Project {
    
    constructor(name) {
        this.name = name
        projectsArray.push(this);
        projects(projectsArray);
    }
    

}
todoElement(new Todo('uwu', 'uwuwuwuuw', '10/12', 'alta', 'queti'))



console.log(projectsArray)
import todo from "../src/todo";
import projects from "./projects";


const projectsArray = [];
const toDos = [];
export { toDos }
class Todo {
    constructor(title, description, dueDate, priority, notes) {
        this.title = title,
        this.description = description,
        this.dueDate = dueDate,
        this.priority = priority,
        this.notes = notes,
        this.project = 'any'
        toDos.push( { ...this } )
    }

     
}

class Project {
    
    constructor(name) {
        this.name = name
        projectsArray.push(this);
        projects(projectsArray);
    }
    

}



todo(new Todo('asd','asd','asd','asd','asd',), projectsArray)
todo(new Todo('asd2','asd2','asd2','asd2','asd2',), projectsArray)
todo(new Todo('asd3','asd3','asd3','asd3','asd3',), projectsArray)


const wtf = new Project('wtf');
const wtf2 = new Project('wtf2');
const wtf3 = new Project('wtf3');
const wtf4 = new Project('wtf4');
console.log(toDosUpdated);


/* ok
tengo 1 modulo que crea PROYECTOS y los empuja a un ARRAY de proyectos (esto voy a usar para mostrarlos en el DOM y que el usuario pueda elegirlos)

debería a su vez poner todos los todo en un array de toDos para iterar sobre los mismos según el proyecto al que hayan sido asignados (y mostrar todos por default)

los todo deberían tener un onclick o lo que sea para poder ser asignados a un proyecto

cosas q debería tener: 
view all projects
view all todos in each project (probably just the title and duedate… perhaps changing color for different priorities)
expand a single todo to see/edit its details
delete a todo


*/

export const domManipulation = () => {
    const projectsArray = [];
    const toDos = [];
    let toDosUpdated = [];

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
    /*
    class Project {
        
        constructor(name) {
            this.name = name
            projectsArray.push(this);
            projects(projectsArray);
        }
        

    }
    */
    const todorandom = new Todo("watarfo", "watarfo", "watarfo", "watarfo", "watarfo", )
    const todorandom2 = new Todo("watarfo", "watarfo", "watarfo", "watarfo", "watarfo", )
    renderToDo(todorandom, projectsArray, toDosUpdated)
    renderToDo(todorandom2, projectsArray, toDosUpdated)
    
    function renderToDo (todo, projects, toDosUpdated) {
    const root = document.querySelector('#root');
    
    const todoContainer = document.createElement('div');
    todoContainer.classList.add('toDoCard')
    

    const title = document.createElement('h2');
    title.innerText = `${todo.title}`
    todoContainer.appendChild(title);

    const description = document.createElement('p');
    description.innerText = `description: ${todo.description}`;
    todoContainer.appendChild(description);

    const dueDate = document.createElement('p');
    dueDate.innerText = `Due date: ${todo.dueDate}`;
    todoContainer.appendChild(dueDate);

    const priority = document.createElement('p');
    priority.innerText = `Priority: ${todo.priority}`;
    todoContainer.appendChild(priority);

    const notes = document.createElement('p');
    notes.innerText = `notes: ${todo.notes}`;
    todoContainer.appendChild(notes);

    const projectForm = document.createElement('form');
    

    const selectLabel = document.createElement('label');
    selectLabel.setAttribute('for', 'projects');
    selectLabel.innerText = 'choose project: '
    
    const projectSelect = document.createElement('select');
    projectSelect.setAttribute('name', 'projects');
    projectSelect.setAttribute('id', 'projects');
    projectSelect.classList.add('select')
    
    projects.forEach(project => {
        
        const option = document.createElement('option');
        option.classList.add(`option`);
        option.setAttribute('value', `${project.name}`);
        option.innerText = `${project.name}`
        
        
        projectSelect.appendChild(option);
    });
    
    projectForm.onchange = handleChange;
    projectForm.appendChild(selectLabel);
    projectForm.appendChild(projectSelect);
    

    todoContainer.appendChild(projectForm);
    root.appendChild(todoContainer);
    
    function handleChange (e) {
        e.preventDefault();
       
        const selectedProject = e.target.value;
        
        todo.project = selectedProject;
        
        const inArray = toDos.findIndex((el) => {
            
            return el.title === todo.title
        })
        toDos[inArray] = todo;
        toDosUpdated = toDos;
        
        
    }
    }
    
    
}


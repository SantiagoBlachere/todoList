
export const domManipulation = () => {
    /* global variables */
    const projectsArray = [];
    const toDos = [];
    let toDosUpdated = [];
    /* classes */
    class Todo {
        constructor(title, description, dueDate, priority, notes) {
            this.title = title,
            this.description = description,
            this.dueDate = dueDate,
            this.priority = priority,
            this.notes = notes,
            this.project = 'any';
            this.any = 'any'
            toDos.push( { ...this } )
        }

        
    }
    
    class Project {
        
        constructor(name) {
            this.name = name
            projectsArray.push(this);
            
        }
        

    }
    /* toy objects to see if it works */
    const todorandom = new Todo("watarfo", "watarfo", "watarfo", "watarfo", "watarfo", );
    const todorandom2 = new Todo("watarfo2", "watarfo2", "watarfo2", "watarfo2", "watarfo2", );
    
    const projectardo = new Project('proyecto 1');
    const projectardo2 = new Project('proyecto 2');
    renderProjects(projectsArray, toDos);
    renderToDo(projectsArray, toDos);
    
   
    
    
    /* render a todo item */
    function renderToDo (projects, toDos) {
    const root = document.querySelector('#root');
   
        
    const toDosPrevious = document.querySelector('.toDoSection');
    if (toDosPrevious) {
        toDosPrevious.remove()
        
    }
    
    
    const toDoSection = document.createElement('section');
    toDoSection.classList.add('toDoSection');
    root.appendChild(toDoSection)
    toDos.forEach((todo) => {
        
    
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
        const anyOption = document.createElement('option');
        anyOption.classList.add('option');
        anyOption.setAttribute('value', 'any');
        anyOption.innerText = 'Any';
        projectSelect.appendChild(anyOption)
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
        

        
        function handleChange (e) {
            e.preventDefault();
           
            const selectedProject = e.target.value;
            
            todo.project = selectedProject;
            
            const inArray = toDos.findIndex((el) => {
                
                return el.title === todo.title
            })
            
            toDos[inArray] = todo;
            
            toDosUpdated = toDos;
            
            renderProjects(projects, toDosUpdated)
            
            
            
        }
        toDoSection.appendChild(todoContainer);
    })
     
}
    /* project rendering */
    function renderProjects(projects, toDos) {
        
        /* check if projects already exists, and remove it*/
        const previousContainer = document.querySelector('.projectsContainer')
        if(previousContainer) {
            previousContainer.remove();
        }
        /* if it doesnt exist, create it */
        const projectsContainer = document.createElement('div');
        projectsContainer.classList.add('projectsContainer');
        /* render any button */
        const anyBtn = document.createElement('button');
        anyBtn.innerText = 'Any';
        anyBtn.classList.add('projectBtn');
        anyBtn.setAttribute('any', 'any')
        anyBtn.addEventListener('click', () => {
            let projectToDos = toDos.filter( (el) => {
                return el.any === 'any'
            })
            
            renderToDo(projectsArray, projectToDos)
        })
        projectsContainer.appendChild(anyBtn)
        /* render each project as a button, if there's more than 0*/
        if (projects.length > 0) {
            projects.forEach(project => {
            
            
                const projectBtn = document.createElement('button');
                projectBtn.innerText = project.name;
                projectBtn.classList.add('projectBtn');
                projectBtn.addEventListener('click', handleClick);
                
                projectBtn.setAttribute('project-name', project.name);
                
        
                projectsContainer.appendChild(projectBtn)
            });
            /* event listener, renders every element that corresponds with the project clicked*/
            function handleClick(e){
            e.preventDefault
            let projectClicked = e.target.getAttribute('project-name');
            
            let projectToDos = toDos.filter( (el) => {
                return el.project === projectClicked 
            })
            renderToDo(projectsArray, projectToDos)
            }
            
        }
        
    
        const root = document.querySelector('#root');
        root.appendChild(projectsContainer)
        
        
    }
    }
    



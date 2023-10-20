
import { forms } from "./forms";
import swal from 'sweetalert';


export const domManipulation = () => {
    /* classes */
    class Todo {
        constructor(title, description='no description', dueDate, priority, project='any') {
            this.title = title,
            this.description = description,
            this.dueDate = dueDate,
            this.priority = priority,
            
            this.project = project
            this.any = 'any';
    }
        localStorageSet() {
            // Retrieve existing todos from local storage
            const existingTodos = JSON.parse(localStorage.getItem('todos')) || [];
            // Add the new todo to the existing todos
            existingTodos.push({ ...this });
            // Save the updated todos array back to local storage
            localStorage.setItem('todos', JSON.stringify(existingTodos));
        };
        removeFromLs() {
            
            
            let existingTodos = JSON.parse(localStorage.getItem('todos'))
            if (!existingTodos) {
                existingTodos = [];
            };
            
            let nameOfTodo = this.title;
            const toDoIndex = existingTodos.findIndex( (todo) => {
                return todo.title === nameOfTodo
            });
            
            if (toDoIndex > -1) {
                
                existingTodos.splice(toDoIndex, 1);
                
                localStorage.setItem('todos', JSON.stringify(existingTodos));
            };
            toDos = [];
            getToDos();
            
            
            
        }
     }
    
        class Project {
            
            constructor(name) {
                this.name = name
                projectsArray.push(this);
                
            };
            setProjectInLs() {
                console.log('asdeano')
                const existingProjects = JSON.parse(localStorage.getItem('projects')) ||  [];
                existingProjects.push(this);
                localStorage.setItem('projects', JSON.stringify(existingProjects));

                console.log(existingProjects)
            }
            
    
    } 
    /* global variables */
    function getToDos() {
        toDosFromLs = JSON.parse(localStorage.getItem('todos')) || [];
        
        let lsToDosWithMethods = [];
        if (toDosFromLs.length > 0) {
            toDosFromLs.forEach((todo) => {
                
                let todoFromLs = Object.assign(new Todo(), todo );
                lsToDosWithMethods.push(todoFromLs);
                toDos = lsToDosWithMethods;
                toDosUpdated = lsToDosWithMethods;
            });
        
        }
    };
    function getProjects() {
        projectsFromLs = JSON.parse(localStorage.getItem('projects')) || [];
        projectsArray = projectsFromLs;
    }
    
    
    let projectsFromLs;
    let toDosFromLs;
    let projectsArray = [] 
    let toDos =  [];
    let toDosUpdated = [];
    getToDos();
    getProjects();
    
   
   
    
    /* DOM static sections */
    

    const projectsSection = document.createElement('section');
    projectsSection.classList.add('projectsSection');
    root.appendChild(projectsSection)

    const navBar = document.createElement('section');
    navBar.classList.add('navBar');
    const newProject = document.createElement('button');
    newProject.innerText = 'NEW PROJECT';
    newProject.setAttribute('name', 'newProject');
    newProject.onclick = handleClick;

    const newToDo = document.createElement('button');
    newToDo.setAttribute('name', 'newToDo');
    newToDo.innerText = 'NEW TO-DO';
    newToDo.onclick = handleClick;

    navBar.appendChild(newProject);
    navBar.appendChild(newToDo);
    root.appendChild(navBar);

    
    function handleClick(e) {
        e.preventDefault
        let clicked = e.target.getAttribute('name');
        
        if (clicked === 'newProject') {
            
            let projectForm = forms.projectForm();
            
            projectForm.onsubmit = (e) => {
                e.preventDefault();
                let projectName = projectForm.elements["project"].value;
                
                
                const newProject = new Project(projectName);
                newProject.setProjectInLs();
                
                renderProjects(projectsArray, toDos); 
                renderToDo(projectsArray, toDos);
            }
            root.appendChild(projectForm)
        } else {
            let todoForm = forms.toDoForm();
            /* select project */
            const projectSelectDiv = document.createElement('div');
            const projectSelectLabel = document.createElement('label');
            projectSelectLabel.innerText = "Project "
            const projectSelect = document.createElement('select');
            projectSelect.setAttribute('name', 'project')
            projectsArray.forEach( (project) => {
                let projectOption = document.createElement('option');
                projectOption.innerText = `${project.name}`
                projectSelect.appendChild(projectOption);
                
            })
            const submitInput = document.createElement('input');
            submitInput.setAttribute('type', 'submit');
            submitInput.innerText = 'Add To-Do';

            todoForm.appendChild(projectSelectDiv);
            projectSelectDiv.appendChild(projectSelectLabel);
            projectSelectDiv.appendChild(projectSelect);
            todoForm.appendChild(submitInput)
            root.appendChild(todoForm);

            todoForm.onsubmit= (e) => {
                e.preventDefault();
                let date = todoForm.elements["date"].value;
                let title = todoForm.elements["title"].value;
                let description = todoForm.elements["description"].value;
                let priority = todoForm.elements["priority"].value;
                let project = todoForm.elements["project"].value;
                let submittedTodo = new Todo(title, description, date, priority, project);
                let alreadyexists = toDos.find((todo) => {
                    return todo.title === title
                });
                if (alreadyexists) {
                    swal({
                        title: "Error",
                        text: `There's already a To-Do named "${title}"`,
                        icon: "error",
                        button: "Aww yiss!",
                      });
                    return
                }
                submittedTodo.localStorageSet();
                

                toDos.push(submittedTodo);

                
                renderToDo(projectsArray, toDos)
            }
        }
    }
    
    const toDosContainer = document.createElement('section');
    toDosContainer.classList.add('toDosSection')
    root.appendChild(toDosContainer)

    renderProjects(projectsArray, toDos);
    
    renderToDo(projectsArray, toDos);
    

    /* render a todo item */
    function renderToDo (projectsArray, toDos) {
    getToDos();
    

    
   
   
        
    const toDosPrevious = document.querySelector('.toDoArticle');
    if (toDosPrevious) {
        toDosPrevious.remove()
        
    }
    
    
    const toDoArticle = document.createElement('article');
    toDoArticle.classList.add('toDoArticle');
    
    toDos.forEach((todo) => {
        
        
        const todoCardContainer = document.createElement('div');
        todoCardContainer.classList.add('toDoCard');
        
    
        const title = document.createElement('h2');
        title.innerText = `${todo.title}`
        todoCardContainer.appendChild(title);

        const dueDate = document.createElement('p');
        dueDate.innerText = `Due date: ${todo.dueDate}`;
        todoCardContainer.appendChild(dueDate);

        const removeTodoBtn = document.createElement('button');
        removeTodoBtn.innerText = 'Remove To-Do';
        removeTodoBtn.onclick = () => {
            
            todoCardContainer.remove();
            todo.removeFromLs();
            getToDos();
            
            
        };
        todoCardContainer.appendChild(removeTodoBtn);

        

        if (todo.project !== 'any') {
            const project = document.createElement('p');
            project.classList.add('project')
            project.innerText = `Assigned project: ${todo.project}`;
            todoCardContainer.appendChild(project);
        }

        
        
        
        
        


        (function createDetailBtn () {
            const detailsBtn = document.createElement('button');
            detailsBtn.classList.add('details')
            detailsBtn.innerText = 'Details';
            detailsBtn.onclick = detailClickHandler;
            
            todoCardContainer.appendChild(detailsBtn);
            function detailClickHandler() {
                todoCardContainer.appendChild(description);
                todoCardContainer.appendChild(priority);
                projectForm.appendChild(selectLabel);
                projectForm.appendChild(projectSelect);
                const detailsBtn = document.querySelector('.details');
                detailsBtn.remove();
                const undetailedBtn = document.createElement('button');
                undetailedBtn.innerText = 'Go Back';
                
                todoCardContainer.appendChild(undetailedBtn);

                undetailedBtn.onclick = () => {
                    
                    description.remove();
                    priority.remove();
                    selectLabel.remove();
                    projectSelect.remove();
                    undetailedBtn.remove();
                    createDetailBtn();
    
                }
                
            }
        })();
        
        
        
        
        
        
        
        const description = document.createElement('p');
        if (todo.description !== '') {
            description.innerText = `description: ${todo.description}`;
        } else {
            description.innerText ='No description'
        }
        
        
    
        
    
        const priority = document.createElement('p');
        priority.innerText = `Priority: ${todo.priority}`;
        
        
        
    
        
    
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
        anyOption.innerText = `${'Any'}`
        projectSelect.appendChild(anyOption)
        projectsArray.forEach(project => {
        
            const option = document.createElement('option');
            option.classList.add(`option`);
            option.setAttribute('value', `${project.name}`);
            option.innerText = `${project.name}`
            
            
            projectSelect.appendChild(option);
        });
        projectForm.onchange = handleChange;
        
        todoCardContainer.appendChild(projectForm);
        

        
        function handleChange (e) {
            
           /* retrieves the value of the option selected */
            const selectedProject = e.target.value;
           /* assigns that value to the project property of the todo */
            todo.project = selectedProject;
            /* finds that todo in the todos array*/
            
            if (toDosUpdated) {
                
                const inArray = toDosUpdated.findIndex((el) => {
                
                    return el.title === todo.title
                })  
                
                toDos[inArray] = todo;
            
                toDosUpdated = toDos;
                
                
                

                renderToDo(projectsArray, toDosUpdated);
                
            }
            const inArray = toDos.findIndex((el) => {
                
                return el.title === todo.title
            })
            toDos[inArray] = todo;
            
            toDosUpdated = toDos;
            

            
            
            
        }
        toDoArticle.appendChild(todoCardContainer);
        
        toDosContainer.appendChild(toDoArticle)
        
    })
     
}
    /* project rendering */
    function renderProjects(projectsArray, toDos) {
        
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
        if (projectsArray.length > 0) {
            projectsArray.forEach(project => {
            
            
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
        
    
        
        projectsSection.appendChild(projectsContainer)
        
        
    }
    }
    



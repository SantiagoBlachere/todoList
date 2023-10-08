


export default function projects(projects, toDoArray) {
    
    console.log(toDoArray)
    toDoArray.forEach(el => {
        console.log(el.title)
    })

    const previousContainer = document.querySelector('.projectsContainer')
    if(previousContainer) {
        previousContainer.remove();
    }
    
    const projectsContainer = document.createElement('div');
    projectsContainer.classList.add('projectsContainer');
    projects.forEach(project => {
        
        
        const projectBtn = document.createElement('button');
        projectBtn.innerText = project
        

        projectsContainer.appendChild(projectBtn)
    });
    const root = document.querySelector('#root');
    root.appendChild(projectsContainer)
    
  
}

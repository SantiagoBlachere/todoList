export default function projects(projects) {
    
    

    const previousContainer = document.querySelector('.projectsContainer')
    if(previousContainer) {
        previousContainer.remove();
    }
    
    const projectsContainer = document.createElement('div');
    projectsContainer.classList.add('projectsContainer');
    projects.forEach(project => {
        
        
        const projectBtn = document.createElement('button');
        projectBtn.innerText = project.name;
        projectBtn.classList.add('projectBtn')
        

        projectsContainer.appendChild(projectBtn)
    });

function handleClick(e){
    e.preventDefault;
    
}

    const root = document.querySelector('#root');
    root.appendChild(projectsContainer)
    
  
}

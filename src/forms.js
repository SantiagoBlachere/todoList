export const forms = (function() {
    
    function createProjectForm() {
      // Create and return the HTML for the project form
      (function checkIfItExists() {
        let previousForm = document.querySelectorAll('.form');
        console.log(previousForm)
        if (previousForm.length > 0) {
            previousForm.forEach((form) => {
                form.remove();
            })
            
        } 
      })();
      let projectForm = document.createElement('form');
      projectForm.classList.add('form')
      
      projectForm.innerText = 'asd'
        
      return projectForm;
    }
  
    function createToDoForm() {
      // Create and return the HTML for the to-do form
      let toDoForm; /* me falta hacer lo mismo que hice con el form de arriba! */
      return toDoForm;
    }
  
    // Expose the functions you want to make public
    return {
      projectForm: createProjectForm,
      toDoForm: createToDoForm,
    };
  })();
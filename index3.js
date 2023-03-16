window.addEventListener('load', function(){
   let todos=JSON.parse(this.localStorage.getItem('todos')) || []
   const form=this.document.querySelector('.form')
   const input=this.document.querySelector('.message')
  
  

form.addEventListener('submit',function(e){
e.preventDefault()
const task=input.value;
if(!task){
   alert('заполните поле')
}

const todo={
   content:task,
   checked: false,
   createdAt: new Date().getTime
 }
 todos.push(todo)
 displayTodo()
 localStorage.setItem('todos',JSON.stringify(todos))
 
 e.target.reset()
    })
    function displayTodo(){
      const taskEl= this.document.querySelector('.taskEl')
      taskEl.innerHTML=''
      
      todos.forEach(todo => {
         

const taskli= document.createElement('div');
taskli.classList.add("taskd1");
taskli.innerHTML=todo.content


const taskcheced= document.createElement('input');
taskcheced.classList.add("text333");
taskcheced.type='checkbox'
taskcheced.checked=todo.checked
taskcheced.value=todo.content
if(todo.checked===true){
   taskli.style=' text-decoration-line: line-through; co'
   
   }
   if(todo.checked===false){
     taskli.style=''
     /////////
    }
    taskcheced.addEventListener('change',function(e){
    
      todo.checked=e.target.checked
      localStorage.setItem('todos',JSON.stringify(todos))
      displayTodo()
    })



const taskedelete= document.createElement('button');
taskedelete.classList.add("delete");
taskedelete.innerHTML="Delete"
input.value='';
taskli.append(taskcheced)
taskli.append(taskedelete)
      
      taskEl.append(taskli)
      
        taskedelete.addEventListener('click', function(event){
         event.preventDefault()
         todos=todos.filter(t=>t !=todo)
         localStorage.setItem('todos',JSON.stringify(todos))
         displayTodo()
      })
       
})
}
displayTodo()
})

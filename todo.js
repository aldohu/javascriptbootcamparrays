const toDo = [
    {
        text:"Eat",
        completed: true
    },
    {
        text:"Sleep",
        completed:false
    },
    {
        text:"Train",
        completed:true
    },
    {
        text:"Learn",
        completed:false
    },
    {
        text:"Have Sex",
        completed: false
    }

];
/*
const deleteTodo = function(arr, prop) {
   const index = arr.findIndex(e=> e.text.toLowerCase() == prop.toLowerCase());
   arr.splice(index, 1);
}*/

//1. convert array of objects  text and completed prop

//2. create function to remove todo by text value

//sort edit original array and dont return anything


//find todos with completed = true value

const sortTodos = notes=> notes.sort((a,b)=> a.completed - b.completed)
console.log(sortTodos(toDo));
/*const getThingsTodo = (todo) => {
   return todo.filter(e=>
     e.completed === false)
        
    

}*/
//deleteTodo(toDo, 'sleep')

//console.log(toDo);

//console.log(getThingsTodo(toDo))




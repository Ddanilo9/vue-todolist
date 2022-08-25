const todos = [
    {
        text:'Fare i compiti',
        done: false
    },
    {
        text:'Fare la spesa',
        done: false
    },
    {
        text:'Fare la doccia',
        done: false
    },
    {
        text:'Dare da mangiare al cane',
        done: false
    },
]

const app = new Vue ({
    el: '#app',
    data: {
        todos: todos,
        newTask: '',
        
    },
    methods: {
       isDoneOnOff(todo){
        todo.done = !todo.done
       },
       addNewTask(){
        if (this.newTask != this.newTask.length<0){           
            this.todos.push({
                text: this.newTask,
                done: false
            })
            this.newTask = ''
        }
       },
       enterF(event){
        if (event.key ==='Enter' && this.newTask != this.newTask.length<0){
            this.todos.push({
                text: this.newTask,
                done: false
            })
        }
       }
    },
})
const todos = [
    {
        text:'Fare i compiti',
        done: true
    },
    {
        text:'Fare la spesa',
        done: false
    },
    {
        text:'Fare la doccia',
        done: true
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
    },
    methods: {
       
    },
})
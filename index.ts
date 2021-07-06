import axios from 'axios'


const url = "https://jsonplaceholder.typicode.com/todos/1"

interface Todo {
    id: number;
    kind: 'dddd'
}

type B = Boolean

interface Todo {
    title: string | number;
    completed: B;
}

axios.get(url).then(res => {
    const todo: Todo = res.data
    const ID = todo.id
    const title = todo.title
    const finished = todo.completed

    console.log(`
    
    The dodo with ID: ${ID}
    title ${title}
    finished ${finished}
    
    `)
})


const mk1:any = 45
const mk: unknown = 45

// let mqwe:  = [];

// console.log(mqwe)


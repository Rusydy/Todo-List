import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

class App extends React.Component {
    constructor() {
        super()

        this.state = {
            todos: todosData
        }
    }

    render() {
        // const TextItem = this.state.todos.map(
        //     todo => <TodoItem todo={{todo: todo.text, completed: todo.completed}} />
        // )
        
        // const TextItem = todosData.map(item => <TodoItem key={item.id} item={{item: item.text}}/>)

        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}/>) // you should pass a param as an object, because (open TodoItem.js)

        return (
            <div className="todo-list">
                {/* {TextItem} */}
                {todoItems}
            </div>
        )
    }
}

export default App

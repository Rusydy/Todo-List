import React from "react"

function TodoItem(props) {
    return (
        <div className="todo-item">
            {/*             
            {
                props.todo && (
                    <div>
                        <input type="checkbox" checked={props.todo.completed}/>
                        <p>{props.todo.text}</p>
                    </div>
                )
            } */}
            <input type="checkbox" checked={props.item.completed}/>
            <p>{props.item.text}</p>
        </div>
    )
}

export default TodoItem

// <input type="checkbox" checked={props.item.completed}/>
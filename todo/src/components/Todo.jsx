import React from 'react'

const Todo = ({ todo, removeTodo, complet }) => {
  return (
    <div className="todo">
        <div className="content">
            <p>{todo.text}</p>
            <p className="category">({todo.category})</p>
        </div>
        <div>
            <button className="complete" onClick={() => }>Completar</button>
            <button className="remove" onClick={() => removeTodo(todo.id)}>X</button>
        </div>
    </div>
  )
}

export default Todo
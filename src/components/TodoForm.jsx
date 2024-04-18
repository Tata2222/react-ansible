import { useState } from 'react'

const TodoForm = ({ createTodo }) => {
  const [newTitle, setNewTitle] = useState('')
  const [currentBoard, setCurrentBoard] = useState('All')
  const newTodo = {
    title: newTitle,
    board: currentBoard,
    completed: false
  }

  return (
    <div className='h-auto w-auto'>
      <input type="text" placeholder="New Task" className="input input-bordered input-primary w-full max-w-xs" onChange={e => setNewTitle(e.target.value.trim())} />
      <button className="btn btn-square btn-primary ml-3 text-2xl text-white" onClick={(e) => createTodo(e, newTodo)}>+</button>
      <select className="select select-info w-full max-w-xs mt-4" value={currentBoard} onChange={setCurrentBoard}>
        <option disabled selected>Select Board</option>
        <option>All</option>
        <option>Work</option>
        <option>Home</option>
      </select>
    </div>
  )
}

export default TodoForm;
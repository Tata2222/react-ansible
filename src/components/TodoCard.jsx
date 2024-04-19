import { IconCheck } from './icons';
import { gradients } from '../helpers/vars'
import DropDown from './DropDown';

const TodoCard = ({ todo, deleteTodo, toggleTodo, editTodo, ind }) => {
  return (
    <div key={todo.id} className={`card w-96 bg-primary text-primary-content mb-3 ${gradients[ind-1]} relative`}>
      <div className="card-body flex flex-row pt-10">
        <button className="flex" onClick={()=>toggleTodo(todo)} >
            <span 
              className={`justify-center items-center rounded-full border-gray-300 flex border w-8 h-8 ${todo.completed ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500' : ''} `} 
            >
              {todo.completed && (
                  <IconCheck />
              )}
            </span>    
        </button>
      
        <p className={`card-title text-gray-200 ml-2 text-base`} >{todo.title}</p>
      </div>
      <DropDown todoId={todo.id} del={deleteTodo} edit={editTodo} />
    </div>
  )
}

export default TodoCard;
import TodoCard from './TodoCard'
import TodoFilter from './TodoFilter';

const TodoList = ({ todos, setform, deleteTodo, toggleTodo, editTodo, createTodo }) => {
  const count = todos.filter(todo => !todo.completed).length
  return(
    <section className="w-1/2">
      <div className='flex flex-row items-center gap-2'>
        <div className="badge badge-secondary h-8 w-8 text-white">{count}</div>
        <p className="text-2xl">Tasks</p>
      </div>
      <TodoFilter setform={setform} createTodo={createTodo} />
      <div className="py-6 px-2 flex flex-col items-center justify-center gap-2 mb-6 bg-white rounded-md dark:bg-slate-800">
      {todos.map((todo,id)=>(
        <TodoCard key={id} todo={todo}  toggleTodo={toggleTodo} deleteTodo={deleteTodo} editTodo={editTodo}/>
      ))}
      </div>
    </section>
  )
} 

export default TodoList;
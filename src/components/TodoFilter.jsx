import TodoForm from './TodoForm';
import Modal from './Modal';

const TodoFilter = ({ boards, setform, createTodo }) => {
  return (
    <section className="mt-4 bg-white dark:bg-slate-800 transition-all duration-1000 rounded-md py-4 px-2 flex justify-right gap-2 mb-6 ">
      <button onClick={()=>setform('all')} className="btn btn-outline btn-info">All</button>
      <button onClick={()=>setform('active')} className="btn btn-outline btn-error"> Active</button>
      <button onClick={()=>setform('completed')} className="btn btn-outline btn-success">Done</button>
      <Modal>
        <TodoForm boards={boards} createTodo={createTodo} />
      </Modal>
    </section>
    )
}

export default TodoFilter;
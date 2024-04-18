import TodoForm from './TodoForm';
import Modal from './Modal';
import DropDown from './DropDown';
import TodoPanel from './TodoPanel';
import { gradient } from '../helpers/vars';


const TodoBoards = ({ boards }) => {
  return(
    <section className="w-1/2">
      <div className='flex flex-row items-center gap-2'>
        <div className="badge badge-primary h-8 w-8 text-white">{boards.length}</div>
        <p className="text-2xl">Boards</p>
      </div>
      
      <TodoPanel>
        <Modal>
          <TodoForm />
        </Modal>
      </TodoPanel>
      <div className="py-6 px-2 flex flex-col items-center justify-center gap-2 mb-6 bg-white rounded-md dark:bg-slate-800">
        {boards.map((board) => (
          <div key={board.id} className={`card w-96 bg-primary text-primary-content mb-3 ${gradient()}`}>
            <div className="card-body flex flex-row">
              <div className="radial-progress bg-primary text-primary-content border-4 border-primary w-14 h-14" style={{"--value":70}} role="progressbar">70%</div>
              <p className={`card-title text-gray-200 ml-2`} >{board.title}</p>
              <DropDown />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 

export default TodoBoards;
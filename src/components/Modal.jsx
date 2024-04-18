const Modal = ({ children, cb=()=>{} }) => {
  return (
    <div className='w-full'>
      <button 
        className="rounded-full ml-auto flex items-center justify-center h-12 w-12 bg-blue-500 text-white text-2xl" 
        onClick={() => document.getElementById('my_modal_5').showModal()}>
        +
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle ">
        <div className="modal-box bg-slate-200 dark:bg-slate-800">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">{children}</p>
          <div className="modal-action">
            <form method="dialog">
              <button onClick={cb} className="btn mr-2 bg-slate-200 dark:bg-slate-800">Create</button>
              <button className="btn bg-slate-200 dark:bg-slate-800">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  )
}

export default Modal;


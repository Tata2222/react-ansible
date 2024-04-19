const TodoPanel = ({ children }) => {
  return (
    <section className="mt-4 bg-white dark:bg-slate-800 transition-all duration-1000 rounded-md py-4 px-2 flex justify-right gap-2 mb-6 ">
      {children}
    </section>
    )
}

export default TodoPanel;
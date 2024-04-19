const DropDown = ({ todoId, del, edit }) => {
  return (
    <div className="dropdown dropdown-end absolute right-3 top-2">
      <div tabIndex={0} role="button" className="btn border-0 bg-transparent text-lg text-white h-1 min-h-1">{`...`}</div>
      <ul tabIndex={0} className="dropdown-content bg-gray-200 z-[1] menu p-2 shadow rounded-box w-52">
        <li><a><button className="text-stale-900 text-end text-base" onClick={() => edit(todoId)}>Edit</button></a></li>
        <li><a><button className="text-stale-900 text-end text-base" onClick={() => del(todoId)}>Delete</button></a></li>
      </ul>
    </div>
  )
}

export default DropDown;


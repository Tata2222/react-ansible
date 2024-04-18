import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header'
import TodoList from './components/TodoList';
import TodoBoards from './components/TodoBoards';
import { getDate } from './helpers/vars';

const todosArray = [
  {
    id: 1,
    title: 'Haircut',
    board: 'Pesonal',
    completed: true
  }, {
    id: 2,
    title: 'Do dishes',
    board: 'Home',
    completed: false
  }, {
    id: 3,
    title: 'Create new todo',
    board: 'All',
    completed: false
  }, {
    id: 4,
    title: 'English courses',
    board: 'All',
    completed: false
  }, {
    id: 5,
    title: 'Take a shower',
    board: 'All',
    completed: false
  },
]

const boardArray = [
  {
    id: 1,
    title: 'All',
    taskIds: [...todosArray.map(todo => todo.id)]
  }, {
    id: 2,
    title: 'Work',
    taskIds: [1, 3]
  }
]

function App() {
  const [todos, setTodos] = useState(todosArray);
  const [boards, setBoards] = useState(boardArray);
  const [form, setform] = useState('all')
  const { day, date, month, year } = getDate();
  const ids = todos.length ? todos.map(todo => todo.id) : []
  const allBoard = {
    id: new Date(),
    title: 'All',
    taskIds: [...ids]
  }
  

  const createBoards = useCallback(() => {
    let types = new Set()
    let boards = [allBoard]
    todos.forEach(todo => types.add(todo.board));
    Array.from(types).map((type, ind) => {
      let taskIds = todos.filter(todo => todo.board == type).map(item => item.id)
      const obj = {
        id: ind + 1,
        board: type,
        taskIds
      }
      boards.push(obj)
    })
    setBoards(boards)
  }, [todos])
  
  const fetchTasks = () => {
    console.log('Fetching...')
    try {
      axios.get("http://127.0.0.1:8000/todos").then(res => 
      setTodos(res.data));
    } catch(error) {
      console.log(error);
    }
  }

  const createTodo = (todo) => {
    let url = 'http://127.0.0.1:8000/todo-create/'

    axios.post(url, todo).then((res) => {console.log(res); fetchTasks()}).catch((error) => 
      { console.log(error);
        const newTodo = {
          id: Date.now(),
          title: todo.title.trim(),
          completed: false
        }
        setTodos([...todos, newTodo])
      }
    )
  }

  const editeTodo = (todo) => {
    let url = `http://127.0.0.1:8000/todo-update/${todo.id}/`

    axios.put(url, todo).then((res) => {console.log(res); fetchTasks()}).catch((error) => { console.log(error);
    const newArray = todos.map(currentTodo => {
      if (currentTodo.id === todo.id) {
        return {id: currentTodo.id, ...todo }
      }
      return newArray
    });
    setTodos(newArray);
    })
  }

  const toggleTodo = (todo) => {
    const task = {...todo, completed: !todo.completed}
    createTodo(task, true)
  }

  const deleteTodo = (id) => {
    try {
      axios.delete(`http://127.0.0.1:8000/todo-delete/${id}/`).then((res) => {
        console.log(res);
        fetchTasks()
      })
    } catch(error) {
      console.log(error);
      setTodos(todos.filter(todo => todo.id !== id))
    }
  }

  const filterTodos = () => {
    if (form === 'all') {
      return todos
    } else if (form === 'completed') {
      return todos.filter(todo => todo.completed)
    } else if (form === 'active') {
      return todos.filter(todo => !todo.completed)
    } else {
      return todos
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  useEffect(() => {
    createBoards();
  }, [todos])


  console.log(todos);
  console.log(boards);
  console.log('rest: ',7 % 6)
  return (
  <div className="flex bg-gray-200 dark:bg-gradient-to-bl from-slate-900 to-slate-700 min-h-full min-w-full" >
    <main className="container rounded-md mx-auto my-8 px-10 py-2 max-w-[900px] border-solid border-2 border-white dark:border-slate-700 box-content">
      <Header />
      <h1 className='text-2xl uppercase'>
        {day}
      </h1>
      <span className='text-xl'>{date} {month} {year}</span>
      <button className="btn" onClick={() => editeTodo({id: 8, title: 'editedTask', board: 'All', completed: true})}>Create</button>
      <div className="flex flex-row w-full gap-4 mt-14">
        <TodoBoards boards={boards} setBoards={setBoards} />
        {todos.length && ( 
          <TodoList 
            todos={filterTodos()} 
            setform={setform}
            deleteTodo={deleteTodo}
            editTodo={editeTodo} 
            createTodo={createTodo}
            toggleTodo={toggleTodo} 
        />)}        
      </div>
      </main>
    </div>
  )
}

export default App

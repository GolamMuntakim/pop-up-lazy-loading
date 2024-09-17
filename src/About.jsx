import  { useState } from 'react'

export default function About() {
  const [todosList, setTodosList] = useState([])
  return (
    <>
      <h1 className="text-xl">We are ProCodrrs</h1>
      <div className='flex justify-center gap-10'>
      <button
        onClick={() => {
          import('./data').then((module) => setTodosList(module.todos))
        }}
        className='btn bg-black text-white p-2 rounded-xl'
      >
        Load Data
      </button>
      <button onClick={()=>{setTodosList([])}}   className='btn bg-black text-white p-2 rounded-xl'>Close data</button>
      </div>
      <ul>
        {todosList.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  )
}

import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Header'
import { Suspense } from 'react'

function App() {

  return (
    <>
    <Header></Header>
    <Suspense fallback={<h1 className='flex justify-center items-center text-red-700 min-h-screen'>Loading...</h1>}>
    <Outlet></Outlet>
    </Suspense>
    </>
  )
}

export default App

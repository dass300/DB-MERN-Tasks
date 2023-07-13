import {  useState } from 'react'
import './App.css' 
import Title from './components/Title'

export default function App() {

  const [toggle,setToggle] = useState(false)

  return (

    <div className="App">
{toggle && <Title/> }
<button onClick={()=> setToggle((prev) => !prev)} >Toggle</button>
    
    
    </div>
  )
}

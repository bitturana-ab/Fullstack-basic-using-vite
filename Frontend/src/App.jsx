import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [name,setName]=useState([]);

  // useEffect(()=>{
  //   axios.get('http://localhost:3000/api/name')
  //   .then((response)=>{
  //     setName(response.data)
  //   })
  //   .catch((error)=>{
  //     console.log(error)
  //   })
  // })

  useEffect(()=>{
    axios.get('/api/name')
    .then((response)=>{
      setName(response.data)
    }).catch((error)=>{
      console.log(error)
    })
  })

  return (
    <>
      <h1>A Bittu Rana Project</h1>
      <p>NAME: {name.length}</p>
      {
        name.map((n,index)=>(
          <div key={n.id}>
            <h3>{n.title}</h3>
            <p>{n.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App

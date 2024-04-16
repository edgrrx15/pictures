import React from 'react'
import {useState } from 'react'
import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList'
import ImageShow from './components/ImageShow'

import './App.css'

const [images, setImages] = useState('')

const handleSubmit = async(term) =>{
  console.log('usted esta buscado: ' , term)
}

function App() {
  return (
    <div>
        <h1>App</h1>
        <SearchBar onSubmit ={handleSubmit}/>
    </div>
  )
}

export default App

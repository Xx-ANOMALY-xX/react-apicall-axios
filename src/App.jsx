import axios from 'axios';
import React from 'react'

const App = () => {
  const data = async () => {
    try {
    
      const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
      console.log(data)

    } catch (error) {

      console.error(error);
    
    }
  }
  return (
    <button style={{padding: '12px 24px', backgroundColor: 'lightblue', borderRadius: '10px', border: '2px solid black'}} onClick={data}><b>DATA</b></button>
  )
}

export default App
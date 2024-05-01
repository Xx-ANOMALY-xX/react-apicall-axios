import axios from '../Helpers/axios'
import { useState } from 'react'

const home = () => {
  const [users, setusers] = useState([])
    const getusers = async () => {
        try {
        
          const { data } = await axios.get('/users')
          setusers(data)
    
        } catch (error) {
    
          console.error(error);
        
        }
      }

      let renderusers = 
      users.map((user) =>{
          return (
          <div key={user.id} style={{height: 'auto', width: '20vw', backgroundColor: 'lightblue', padding: '1rem', borderRadius: '20px', marginBottom: '10px'}}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
          )
      })
  return (
    <div>
      <button style={{padding: '12px 24px', backgroundColor: 'lightblue', borderRadius: '10px', border: '2px solid black'}} onClick={getusers}><b>GET USERS</b></button>
      <hr />
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', margin: 'auto'}}>
        {renderusers}
      </div>
    </div>
  )
}

export default home
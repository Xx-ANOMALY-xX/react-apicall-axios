import { useState } from 'react'
import axios from '../Helpers/axios'

const Posts = () => {
  const [posts, setposts] = useState([])  
  const getposts = async () => {
        try {
        
          const {data} = await axios.get('/posts')
          setposts(data)
    
        } catch (error) {
    
          console.error(error);
        
        }
      } 

  let renderposts = 
  posts.map((post) =>{
      return (
      <div key={post.id} style={{height: 'auto', width: '20vw', backgroundColor: 'lightblue', padding: '1rem', borderRadius: '20px', marginBottom: '10px'}}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
      )
  })

  return (
    <div>
      <button style={{padding: '12px 24px', backgroundColor: 'lightblue', borderRadius: '10px', border: '2px solid black'}} onClick={getposts}><b>GET POSTS</b></button>
      <hr />
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', margin: 'auto'}}>
        {renderposts}
      </div>
    </div>
  )
}

export default Posts
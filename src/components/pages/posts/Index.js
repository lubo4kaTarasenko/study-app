import React, {useState, useLayoutEffect } from 'react'
import axios from 'axios'


const Index = () => {
  const[posts, setPosts] = useState([])
  useLayoutEffect(() => { getPosts() }, [])


  const getPosts = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function(resp) {
        setPosts(resp.data)        
      });
  }

  return (
    <div className='container blog-cont'>
      {posts?.length > 0 && posts.map((post) => 
        <div className='post-cont flex' key={post.id }>
          <div className='post-title'>
            {post.title}
          </div>
          <div className='post-body'>
            {post.body}
          </div>
        </div>
      )}
      
    </div>
  )
}

export default Index

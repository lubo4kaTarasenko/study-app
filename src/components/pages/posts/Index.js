import React, {useState, useLayoutEffect } from 'react'
import axios from 'axios'


const Index = () => {
  const[posts, setPosts] = useState([])
  useLayoutEffect(() => { getPosts() }, [])

  const payload = {
    token: process.env.REACT_APP_FAKE_JSON_TOKEN,
    data: {
      name: "stringWords",
      description: "stringLong",
      body: "stringWords|50,200",
      _repeat: 20
    }
  };

  const getPosts = () => {
    axios({
      method: "post",
      url: "https://app.fakejson.com/q",
      data: payload
    }).then(function(resp) {
      setPosts(resp)        
    });
  }

  return (
    <div>
      
    </div>
  )
}

export default Index

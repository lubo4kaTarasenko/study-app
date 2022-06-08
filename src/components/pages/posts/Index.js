import React from 'react'
import axios from 'axios'


const Index = () => {

  console.log(process.env.FAKE_JSON_TOKEN)
  let payload = {
    token: process.env.FAKE_JSON_TOKEN,
    data: {
      name: "nameFirst",
      email: "internetEmail",
      phone: "phoneHome",
      _repeat: 20
    }
};

axios({
  method: "post",
  url: "https://app.fakejson.com/q",
  data: payload
}).then(function(resp) {
    
  });

  return (
    <div>
      
    </div>
  )
}

export default Index

import React, {useState} from 'react'
import Input from '../inputs/Input'

const Login = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: ""
  })

  const inputs = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      placeholder: 'username',
      errorMessage: 'name shoud be 3-10 characters',
      label: 'Username', 
      pattern: "^[A-Za-z0-9]{3, 10}$",
      required: true
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'email',
      errorMessage: 'it should be valid email',
      label: 'Email',
      required: true
    },
    {
      id: 3,
      name: 'birthday',
      type: 'date',
      placeholder: 'birthday',
      label: 'Birthday'
    },
    {
      id: 4,
      name: 'password',
      type: 'password',
      placeholder: 'password',
      errorMessage: 'It should be valid password',
      label: 'Password',
      required: true
    },
    {
      id: 5,
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'confirm password',
      errorMessage: 'It should be equal password',
      label: 'Confirm password',
      required: true
    }

  ]

  const handleFormSubmit = (e) => {
    e.preventDefault()
    // const data = new FormData(e.target)
  }

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value })
  } 

  return (
    <div className='login-cont'>
      <form>
        <h1> Register </h1>
        { inputs.map((input) => 
          <Input key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
        )}
        <div className='btn-cont'>
          <button type='submit' className='btn outlined'> Register </button>
        </div>
      </form>
      
    </div>
  )
}

export default Login

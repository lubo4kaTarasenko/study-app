import './App.css';
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout';
import Index from './components/pages/posts/Index';
import NewPost from './components/pages/posts/NewPost';
import About from './components/pages/About';
import ErrorPage from './components/pages/ErrorPage';
import Login from './components/auth/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Index/>}/>
          <Route path='post'>
            <Route index element={<NewPost/>}/>
            <Route path='/post/:id'/>
          </Route>
          <Route path='about' element={<About/>}/>
          <Route path='login' element={<Login/>}/>

          <Route path='*' element={<ErrorPage/>}/>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;

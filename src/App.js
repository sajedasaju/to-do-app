import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import Header from './pages/Home/Header';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/Login/Signup';
import ToDo from './pages/ToDo/ToDo';
import AddTask from './pages/ToDo/AddTask';
import EditTask from './pages/ToDo/EditTask';
import RequireAuth from './pages/Login/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/todo' element={
          <RequireAuth>
            <ToDo></ToDo>
          </RequireAuth>
        }></Route>
        <Route path='/addtask' element={
          <RequireAuth>
            <AddTask></AddTask>
          </RequireAuth>
        }></Route>
        <Route path='/task/:taskId' element={
          <RequireAuth>
            <EditTask></EditTask>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Signup></Signup>}></Route>

      </Routes>

    </div>
  );
}

export default App;

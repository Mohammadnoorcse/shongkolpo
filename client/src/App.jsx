import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Navbar from './components/layout/Navbar'
import Home from './page/Home';
import Footer from './components/layout/Footer';
import Course from './page/Course';
import CourseDetails from './components/course/CourseDetails';
import Profile from './page/Profile';
import Attendance from './page/Attendance';
import SignUp from './components/layout/SignUp';
import Register from './components/layout/Register';
import Blog from './page/Blog';
import Deshboard from './page/Deshboard';
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/course' element={<Course/>}/>
        <Route path='/course/:id' element={<CourseDetails/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/attendance' element={<Attendance/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/deshboard' element={<Deshboard/>}/>

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App
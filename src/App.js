import React from 'react';
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CourseDetail from "./components/CourseDetail"
import Courses from "./components/Courses"
import CreateCourse from "./components/CreateCourse"
import UpdateCourse from "./components/UpdateCourse"
import DeleteCourse from "./components/DeleteCourse"
import UserSignUp from "./components/UserSignUp"
import UserSignIn from "./components/UserSignIn"
import UserSignOut from "./components/UserSignOut"

import './App.css';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
        <Route path="/signout" component={UserSignOut} />
        <Route path="/signup" component={UserSignUp} />
        <Route path="/signin" component={UserSignIn} />
        <Route path="/delete-course/:id" component={DeleteCourse} exact />
        <Route path="/courses/update-course/:id" component={UpdateCourse} exact />
        <Route path="/create-course/" component={CreateCourse} />
        <Route path="/courses/:id" component={CourseDetail} />
        <Route path="/" component={Courses} exact/>
        
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

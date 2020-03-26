import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CourseDetail from "./components/CourseDetail"
import Courses from "./components/Courses"
import CreateCourse from "./components/CreateCourse"
import UpdateCourse from "./components/UpdateCourse"
import DeleteCourse from "./components/DeleteCourse"
import UserSignUp from "./components/UserSignUp"
import UserSignIn from "./components/UserSignIn"
import UserSignOut from "./components/UserSignOut"
import withContext from "./Context"
import Error from "./components/Error"
// const AuthWithContext = withContext(Authenticated);



import './App.css';


const UserSignUpWithContext = withContext(UserSignUp);
const UserSignInWithContext = withContext(UserSignIn);
const UserSignOutWithContext = withContext(UserSignOut);



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
        <Route path="/signin" component={UserSignInWithContext} />
        <Route path="/signup" component={UserSignUpWithContext} />
        <Route path="/signout" component={UserSignOutWithContext} />
        <Route path="/error" component={Error} />
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

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
import PrivateRoute from './PrivateRoute';
import Forbidden from "./components/Forbidden"
// const AuthWithContext = withContext(Authenticated);



import './App.css';


const UserSignUpWithContext = withContext(UserSignUp);
const UserSignInWithContext = withContext(UserSignIn);
const UserSignOutWithContext = withContext(UserSignOut);
const CreateCourseWithContext = withContext(CreateCourse)
const CourseDetailWithContext = withContext(CourseDetail)
const DeleteCourseWithContext = withContext(DeleteCourse)
const ForbiddenWithContext = withContext(Forbidden)
const CoursesWithContext = withContext(Courses)
const UpdateCourseWithContext = withContext(UpdateCourse)



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
        <Route path="/signin" component={UserSignInWithContext} />
        <Route path="/signup" component={UserSignUpWithContext} />
        <Route path="/signout" component={UserSignOutWithContext} />
        <Route path="/error" component={Error} />
        <Route path="/forbidden" component={ForbiddenWithContext} />
        <Route path="/delete-course/:id" component={DeleteCourseWithContext} exact />
        <PrivateRoute path="/courses/update-course/:id" component={UpdateCourseWithContext} exact />
        <PrivateRoute path="/create-course/" component={CreateCourseWithContext} />
        <Route path="/courses/:id" component={CourseDetailWithContext} />
        <Route path="/" component={CoursesWithContext} exact/>
        
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

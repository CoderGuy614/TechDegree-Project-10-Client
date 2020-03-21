import React from 'react';
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CourseDetail from "./components/CourseDetail"
import Courses from "./components/Courses"
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/courses/:id" component={CourseDetail} />
          <Route path="/" component={Courses} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

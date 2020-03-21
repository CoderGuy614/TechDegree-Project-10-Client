import React, { Component } from 'react'
import axios from 'axios';
import "../styles/global.css";
export default class Courses extends Component {
    state = {
        courses: []
    };
    componentWillMount() {
        axios.get('http://localhost:5000/api/courses').then(res => {
            this.setState({courses:res.data})
            })      
    }

    render() {
        return (
            
            <div id="root">
            <div>
              <div class="header">
                <div class="bounds">
                  <h1 class="header--logo">Courses</h1>
                  <nav><a class="signup" href="sign-up.html">Sign Up</a><a class="signin" href="sign-in.html">Sign In</a></nav>
                </div>
              </div>

              <div class="bounds">
              {this.state.courses.map( (c,i) => {
                  return (<div class="grid-33"><a class="course--module course--link" href="course-detail.html">
                    <h4 class="course--label">Course</h4>
                    <h3 class="course--title">{c.title}</h3>
                  </a></div>)
              })}
                
            
                <div class="grid-33"><a class="course--module course--add--module" href="create-course.html">
                    <h3 class="course--add--title"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        viewBox="0 0 13 13" class="add">
                        <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon>
                      </svg>New Course</h3>
                  </a></div>
              </div>
            </div>
          </div>
          
        )
    }
}

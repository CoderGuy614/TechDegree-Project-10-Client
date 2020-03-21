import React, { Component } from 'react'
import axios from 'axios';
import "../styles/global.css";

const ReactDOM = require('react-dom')
const ReactMarkdown = require('react-markdown')
export default class CourseDetail extends Component {
    state = {
        course: {}
        
    };
    componentDidMount() {
        axios.get(`http://localhost:5000/api/courses/${this.props.match.params.id}`).then(res => {
            this.setState({course: res.data})
            })    
    }

    render() {
        return (
            <div id="root">
    <div>
      <div className="header">
        <div className="bounds">
          <h1 className="header--logo">Courses</h1>
          <nav><span>Welcome Joe Smith!</span><a className="signout" href="index.html">Sign Out</a></nav>
        </div>
      </div>
      <div>
        <div className="actions--bar">
          <div className="bounds">
            <div className="grid-100"><span><a className="button" href="update-course.html">Update Course</a><a className="button" href="#">Delete Course</a></span><a
                className="button button-secondary" href="index.html">Return to List</a></div>
          </div>
        </div>
        <div className="bounds course--detail">
          <div className="grid-66">
            <div className="course--header">
              <h4 className="course--label">Course</h4>
              <h3 className="course--title">{this.state.course.title}</h3>
              <p>By Sally Smith </p>
            </div>
            <div className="course--description">
              <p>{this.state.course.description}</p>
            </div>
          </div>
          <div className="grid-25 grid-right">
            <div className="course--stats">
              <ul className="course--stats--list">
                <li className="course--stats--list--item">
                  <h4>Estimated Time</h4>
                  <h3>{this.state.course.estimatedTime}</h3>
                </li>
                <li className="course--stats--list--item">
                  <h4>Materials Needed</h4>
                  <ul>
                    <ReactMarkdown source={this.state.course.materialsNeeded} />
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

            )
    }
}

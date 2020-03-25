import React, { Component } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import Header from "./Header"
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
        <Header />
      <div>
        <div className="actions--bar">
          <div className="bounds">
            <div className="grid-100"><span><Link className="button" to={`update-course/${this.state.course.id}`}>Update Course</Link><Link className="button" to={`/delete-course/${this.state.course.id}`}>Delete Course</Link></span><Link
                className="button button-secondary" to="/">Return to List</Link></div>
          </div>
        </div>
        <div className="bounds course--detail">
          <div className="grid-66">
            <div className="course--header">
              <h4 className="course--label">Course</h4>
              {/* <h4 className="course--label">Course Id {this.props.match.params.id}</h4> */}
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

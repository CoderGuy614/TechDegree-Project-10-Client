import React, { Component } from 'react'
import axios from 'axios';
import { Link, Redirect } from "react-router-dom";
import withContext from "../Context"
import Header from "../components/Header"


import "../styles/global.css";
const HeaderWithContext = withContext(Header);

const ReactMarkdown = require('react-markdown')
export default class CourseDetail extends Component {
    state = {
        redirect: false, 
        course: {
          user:{}
        }
        
    };
    componentDidMount() {
        axios.get(`http://localhost:5000/api/courses/${this.props.match.params.id}`).then(course => {
          if(course.data){
            this.setState({course: course.data})
          } else {
            this.setState({redirect:true})
          }
            })      
    }

    render() {
      if(this.state.redirect){
        return <Redirect to ="/notfound" />
      } else {
      const { context } = this.props;
      const authUser = context.authenticatedUser;
      const courseOwnerId=this.state.course.user.id
        return (
            <div id="root">
    <div>
        <HeaderWithContext />
      <div>
        <div className="actions--bar">
          <div className="bounds">
            <div className="grid-100">
            {authUser && authUser.id === courseOwnerId ? 
            <React.Fragment>
              <span> 
                <Link className="button" to={`update-course/${this.state.course.id}`}>Update Course</Link>
                <Link className="button" to={`/delete-course/${this.state.course.id}`}>Delete Course</Link>
              </span>
              <Link className="button button-secondary" to="/">Return to List</Link>
            </React.Fragment> 
            :
            <React.Fragment>
              <Link className="button button-secondary" to="/">Return to List</Link>
            </React.Fragment> 
            }
            </div>
          </div>
        </div>
        <div className="bounds course--detail">
          <div className="grid-66">
            <div className="course--header">
              <h4 className="course--label">Course</h4>
              {/* <h4 className="course--label">Course Id {this.props.match.params.id}</h4> */}
              <h3 className="course--title">{this.state.course.title}</h3>
              <p>By {this.state.course.user.firstName} {this.state.course.user.lastName} </p>
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
}

import React, { Component } from 'react'
import axios from "axios"
import { Link } from "react-router-dom";
import withContext from "../Context"
import Header from "../components/Header"


import "../styles/global.css";
const HeaderWithContext = withContext(Header);

export default class UpdateCourse extends Component {
    state = {
        course: {}
    }
    componentDidMount() {
        axios.get(`http://localhost:5000/api/courses/${this.props.match.params.id}`).then(res => {
            this.setState({course: res.data})
            })      
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value})
      };
    
      handleClear = e => {
          e.preventDefault();
        this.setState({title:"", description:"", materialsNeeded:"", estimatedTime:""})
      }
      handleCancel = e => {
        e.preventDefault();
        this.setState({title:"", description:"", materialsNeeded:"", estimatedTime:""})
        this.props.history.push("/");
    }
  
    render() {
        return (
    <div id="root">
    <div>
      <HeaderWithContext/>
      <div className="bounds course--detail">
        <h1>Update Course</h1>
        <div>
          <div>
          { this.state.error &&
            <h3 className="validation-errors"> { this.state.error } </h3> }
            </div>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="grid-66">
              <div className="course--header">
                <h4 className="course--label">Course</h4>
                <div><input onChange={this.handleChange} id="title" name="title" type="text" className="input-title course--title--input" placeholder={this.state.course.title}
                    value={this.state.title}></input></div>
                <p>By Joe Smith</p>
              </div>
              <div className="course--description">
                <div><input value={this.state.description} onChange={this.handleChange} id="description" name="description" className="" placeholder={this.state.course.description}></input></div>
              </div>
            </div>
            <div className="grid-25 grid-right">
              <div className="course--stats">
                <ul className="course--stats--list">
                  <li className="course--stats--list--item">
                    <h4>Estimated Time</h4>
                    <div><input onChange={this.handleChange} id="estimatedTime" name="estimatedTime" type="text" className="course--time--input"
                        placeholder={this.state.course.estimatedTime} value={this.state.estimatedTime}></input></div>
                  </li>
                  <li className="course--stats--list--item">
                    <h4>Materials Needed</h4>
                    <div><input value={this.state.materialsNeeded} onChange={this.handleChange} id="materialsNeeded" name="materialsNeeded" className="" placeholder={this.state.course.materialsNeeded}></input></div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid-100 pad-bottom"><button onSubmit={this.handleSubmit} className="button" type="submit">Update Course</button>
            <button className="button button-secondary" onClick={this.handleClear}>Clear Form</button>
            <button className="button button-secondary" onClick={this.handleCancel}>Cancel</button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  
        )
    }
}

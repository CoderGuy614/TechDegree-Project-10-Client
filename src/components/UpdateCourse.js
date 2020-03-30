import React, { Component } from 'react'
import axios from "axios"
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

    handleChange = ({target: {name, value}}) => {
    this.setState(prevState => ({
        course: { ...prevState.course, [name]: value }
    }));
  }
    
    handleClear = ({target: {name, value}}) => {
      this.setState( prevState => ({
        course: { ...prevState.course, [name]: ""}
      }))
    }

      handleCancel = e => {
        e.preventDefault();
        this.setState({title:"", description:"", materialsNeeded:"", estimatedTime:""})
        this.props.history.push("/");
    }


    handleSubmit = e => {
      e.preventDefault();
      const {context} = this.props
      const authUser = context.authenticatedUser
      const email = authUser.emailAddress
      const pw = authUser.password
      const updatedCourse  = this.state.course
      if (this.state.title === "" || this.state.description === "") {
        this.setState({ error: "Title and Description are Required" });
      } else {
        context.data.updateCourse(updatedCourse,email,pw )
        .then(response => {
          console.log(`User ${context.authenticatedUser.emailAddress} updated this course: ${updatedCourse}`);
          this.props.history.push('/');
      })
      .catch(err => {
          console.log(err)
          this.setState({ err });
          this.props.history.push('/error');
      });
      }
    };
  
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
                <div><input defaultValue={this.state.course.title} onChange={this.handleChange.bind(this)} id="title" name="title" type="text" className="input-title course--title--input"
                    ></input></div>
                <p>By Joe Smith</p>
              </div>
              <div className="course--description">
                <div><input defaultValue={this.state.course.description} onChange={this.handleChange} id="description" name="description" className=""></input></div>
              </div>
            </div>
            <div className="grid-25 grid-right">
              <div className="course--stats">
                <ul className="course--stats--list">
                  <li className="course--stats--list--item">
                    <h4>Estimated Time</h4>
                    <div><input onChange={this.handleChange} id="estimatedTime" name="estimatedTime" type="text" className="course--time--input"
                        defaultValue={this.state.course.estimatedTime}></input></div>
                  </li>
                  <li className="course--stats--list--item">
                    <h4>Materials Needed</h4>
                    <div><input defaultValue={this.state.course.materialsNeeded} onChange={this.handleChange} id="materialsNeeded" name="materialsNeeded" className=""></input></div>
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

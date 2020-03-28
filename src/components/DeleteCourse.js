import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Header from "./Header"
import "../styles/global.css";
import withContext from "../Context"
const HeaderWithContext = withContext(Header);

export default class DeleteCourse extends Component {
  deleteCourse = id => {
    const {context} = this.props
    const authUser = context.authenticatedUser
    const email = authUser.emailAddress
    const pw = authUser.password
     context.data.deleteCourse(id,email,pw )
      .then(result => {
            console.log(`Course has been successfully deleted`);
            this.props.history.push('/');
        }).catch(err => {
        console.log(err)
        this.props.history.push('/error');
    })
  }
    render() {
        return (
            <>
            <HeaderWithContext />
            <div id="root">
            <div className="actions--bar">
            <div className="bounds">
            <div className="course--description"> <em>Are you sure that you want delete course {this.props.match.params.id} ? </em></div> 
              <div className="grid-100">    
                <span><Link to={`/courses/${this.props.match.params.id}`} className="button">No, Go Back</Link></span>
                <div onClick={ () => this.deleteCourse(this.props.match.params.id)} className="button"> Yes, I'm Sure </div>
                <Link className="button button-secondary" to="/">Return to List</Link></div>

                  
            </div>
            
          </div>
          </div>
          </>
        )
    }
  }

import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Header from "./Header"
import "../styles/global.css";
import axios from 'axios';

export default class DeleteCourse extends Component {

    deleteCourse(id) {
        axios.delete(`http://localhost:5000/courses/${id}`).then(response => {console.log(response)}).catch( err => {console.log(err)})
    }
    render() {
        return (
            <>
            <Header />
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

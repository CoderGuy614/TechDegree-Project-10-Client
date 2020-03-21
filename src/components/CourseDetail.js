import React, { Component } from 'react'
import axios from 'axios';
import "../styles/global.css";
export default class CourseDetail extends Component {
    state = {
        course: []
    };
    componentWillMount() {
        axios.get(`http://localhost:5000/api/courses/${this.props.match.params.id}`).then(res => {
            this.setState({course:res.data})
            })      
    }

    render() {
        return (
          <div>
            CourseDetail
          </div>
            )
    }
}

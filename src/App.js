import React, { Component } from 'react';
import AddProject from './Components/AddEducation';
import uuid from 'uuid';
import './App.css';
import Projects from './Components/EducationComponent'

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects  : []
    }
  }

  componentWillMount() {
    this.setState({projects:[
      {
        id: uuid.v4(),
        title: 'BE',
        category: 'Mechanical Engg'
      },
      {
        id: uuid.v4(),
        title: 'MBBS',
        category: 'Dental'
      },
      {
        id: uuid.v4(),
        title: 'MBA',
        category: 'Finance'
      }
    ]});
  }

  handleAddProject(project) {
    let projects = this.state.projects;
    projects.push(project);
    this.setState({project: projects});
  }

  handleDeleteProject(id) {
    let projects = this.state.projects;
    let index = projects.findIndex(x =>x.id === id);
    projects.splice(index, 1);
    this.setState({project: projects});
  }
  render() {
    return (
      <div className="App">
       <AddProject  addProject={this.handleAddProject.bind(this)}/>
       <Projects onDelete= {this.handleDeleteProject.bind(this)} projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;

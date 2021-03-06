import React, { Component } from 'react';
import ProjectItem from './EducationData';

class Projects extends Component {
  deleteProject(id) {
    this.props.onDelete(id);
  }
  render() {
    let projectItems;
    if(this.props.projects) {
      projectItems = this.props.projects.map(project => {
          return(
            <ProjectItem key={project.title} project={project} onDelete={this.deleteProject.bind(this)}/>
          )
      });
    }  
    return (
      <div className="projects">
       {projectItems} 
      </div>
    );
  }
}

export default Projects;

import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {
  constructor() {
      super();
      this.state = {
          newProject: {}
      }
  }  
  static defaultProps = {
      categories:['MBA', 'MBBS', 'BE']
  }
  handleSubmit(e) {
    this.setState({
        newProject: {
            id: uuid.v4(),
            title: this.refs.title.value,
            category: this.refs.category.value
        }
    }, () => {
        this.props.addProject(this.state.newProject);
    })  
    e.preventDefault();
  }
  render() { 
    let categoryOptions = this.props.categories.map(category => {
        return <option key={category} value={category}>{category}</option>
    });  
    return (
       <div>
            <h3>Add Education</h3>
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div>
                    <label>Specialization</label><br />
                    <input type="text" ref="title" />
                </div>
                <div>
                    <label>Categoty</label><br />
                    <select ref="category">{categoryOptions}</select>
                </div>
                <input type="submit" value="Submit"/>
            </form>
      </div> 
    );
  }
}

export default AddProject;

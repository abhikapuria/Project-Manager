import React, { Component } from 'react';
import uuid                 from 'uuid';
import $                    from 'jquery';
import Projects             from './Components/Projects';
import AddProject           from './Components/AddProject';
import Todos                from './Components/Todos';
import                           './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      todos: []
    }
  }

  getTodos() {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({ todos: data}, function(){
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, error){
        console.log(error);
      }.bind(this)
    });
  }

  getProjects() {
    this.setState({
      projects: [{
        id: uuid.v4(),
        title: 'Business Website',
        category: 'Web Design'
      },
      {
        id: uuid.v4(),
        title: 'Social App',
        category: 'Mobile Development'
      },
      {
        id: uuid.v4(),
        title: 'ECommerce Shopping Cart',
        category: 'Web Development'
      }
      ]
    });
  }

  componentWillMount() {
    this.getProjects();
    this.getTodos();
  }

  componentDidMount() {
    this.getTodos();
  }

  handleAddProject(project) {
    let projects = this.state.projects;
    projects.push(project);
    this.setState({ projects: projects });
  }

  handleDeleteProject(id) {
    let projects = this.state.projects;
    let index;
    for(let i = 0; i< projects.length; i++){
      if(projects[i].id === id){
        index = i;
        break;
      }
    }
    projects.splice(index, 1);
    this.setState({ projects: projects });
  }

  handleDeleteTodoItem(id){
    let todos = this.state.todos;
    let index;
    for(let i = 0; i< todos.length; i++){
      if(todos[i].id === id){
        index = i;
        break;
      }
    }
    todos.splice(index, 1);
    this.setState({todos: todos});
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
        <Todos todos={this.state.todos} onDelete={this.handleDeleteTodoItem.bind(this)}/>
      </div>
    );
  }
}

export default App;

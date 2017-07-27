import React, { Component } from 'react';

class TodoItem extends Component {
    deleteToDoItem(id){
        console.log(id);
        this.props.onDelete(id);
    }   
    render() {
        return (
            <li className="TodoItem">
                <strong>{this.props.todo.title}</strong> 
                &nbsp;<a href="#" onClick={this.deleteToDoItem.bind(this, this.props.todo.id)}>Delete</a>              
            </li>
        );
    }
}

export default TodoItem;

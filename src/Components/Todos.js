import React, { Component } from 'react';
import TodoItem from './TodoItem'

class Todos extends Component {
    deleteToDo(id){
        console.log("Delete from Todos " + id);
        this.props.onDelete(id);
    }
    render() {
        let todoItems;
        if (this.props.todos) {
            todoItems = this.props.todos.map(todo => {
                return (
                    <TodoItem key={todo.id} todo={todo} onDelete={this.deleteToDo.bind(this)}/>
                );
            });
        }
        return (
            <div className="Todos">
                <h4>Latest Todos</h4>
                {todoItems}
            </div>
        );
    }
}

export default Todos;

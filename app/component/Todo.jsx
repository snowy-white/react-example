import React, {Component} from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoSel from './TodoSel';
import TodoCount from './TodoCount';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: [], flag: "all"
        };
        this.handleChange = this.handleChange.bind(this);
    }
    render() {
        return (
            <div>
                <h1>ToDoMVC System</h1>
                <TodoForm task={this.state.task} addTask={this.handleChange} states={this.state.flag}/>
                <TodoList task={this.state.task} delTask={this.handleChange} states={this.state.flag}/>
                <TodoSel task={this.state.task} selTask={this.handleChange} states={this.state.flag}/>
                <TodoCount task={this.state.task}/>
            </div>
        );
    }

    handleChange(data,flag) {
        this.setState({
            task: data, flag: flag
        });
    }
}

export default Todo;
import React, {Component, PropTypes} from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';
import TodoCount from './TodoCount';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [], filterType: "ALL"
        };
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDel = this.handleDel.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
        this.handleDone = this.handleDone.bind(this);
    }
    render() {
        return (
            <div>
                <h1>ToDoMVC System</h1>
                <TodoForm addTask={this.handleAdd} />
                <TodoList tasks={this.state.tasks} filterType={this.state.filterType} delTask={this.handleDel} doneTask={this.handleDone} />
                <TodoFilter filterHandler={this.handleFilter}/>
                <TodoCount tasks={this.state.tasks}/>
            </div>
        );
    }

    handleAdd(data) {
        let {tasks} = this.state;
        tasks.push(data);
        this.setState({ tasks });
    }

    handleDel(delindex) {
        let {tasks} = this.state;
        tasks.splice(delindex, 1);
        this.setState({ tasks });
    }

    handleDone(doneindex) {
        let {tasks} = this.state;
        tasks[doneindex].flag=false;
        this.setState({ tasks });
    }

    handleFilter(filterType) {
        this.setState({ filterType });
    }
}

export default Todo;

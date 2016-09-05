import React, {Component, PropTypes} from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';
import TodoCount from './TodoCount';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [], filterType: "all"
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
                <TodoList task={this.state.tasks} filterType={this.state.filterType} delTask={this.handleDel} doneTask={this.handleDone} />
                <TodoFilter filterTask={this.handleFilter}/>
                <TodoCount task={this.state.tasks}/>
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
        let index = 0;
        
        tasks.map((item, i) => {
            if (item.taskid === delindex) {
                index = i;
            }
        });
         tasks.splice(index,1);
        this.setState({ tasks});
    }

    handleDone(doneindex) {
        let {tasks} = this.state;
        
        tasks.map((item) => {
            if (item.taskid == doneindex) {
                item.flag = false;
            }
        });
        this.setState({ tasks });
    }

    handleFilter(filterType) {
        this.setState({ filterType });
    }
}

export default Todo;

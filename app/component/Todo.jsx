import React, {Component, PropTypes} from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';
import TodoCount from './TodoCount';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: [], flag: "all"
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
                <TodoList task={this.state.task} mark={this.state.flag} delTask={this.handleDel} doneTask={this.handleDone} />
                <TodoFilter selTask={this.handleFilter}/>
                <TodoCount task={this.state.task}/>
            </div>
        );
    }

    handleAdd(data) {
        let {task} = this.state;
        task.push(data);
        this.setState({ task: task });
    }

    handleDel(id) {
        let {task} = this.state;
        let index = 0;
        for (let i = 0; i < task.length; i++) {
            if (id == task[i].id) {
                index = i;
                break;
            }
        }
        /* task.map((item, i) => {
             console.log(i);
             if (id == item.id) {
                 index = i;
             }
         });*/
        delete task[index];
        this.setState({ task: task });
    }

    handleDone(id) {
        let {task} = this.state;
        for (let i = 0; i < task.length; i++) {
            if (id == task[i].id) {
                task[i].flag = false;
                break;
            }
        }
        /* task.map((item, i) => {
             if (id == item.id) {
                 item.flag = false;
             }
         });*/
        this.setState({ task: task });
    }

    handleFilter(flag) {
        this.setState({ flag: flag });
    }
}

export default Todo;

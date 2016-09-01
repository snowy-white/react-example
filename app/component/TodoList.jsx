import React, {Component} from 'react';

class TodoList extends Component {
    constructor(props) {
        super(props);
    }
    handleDel(e) {
        var index = 0;
        var delIndex = e.target.getAttribute('data-key');
        this.props.task.map((item, i) =>{
            if (item.id == delIndex) {
                index = i;
            }
        });
        delete this.props.task[index];
       // this.props.task.length--;
        this.props.delTask(this.props.task, this.props.states);
    }
    handleDone(e) {
        var index = e.target.getAttribute('data-key');
        var node = document.getElementById(index);
        this.props.task.map((item)=> {
            if (item.id == index) {
                item.flag = false;
            }
        });
        this.props.delTask(this.props.task, this.props.states);
    }
    handleFilterU(element) {
        return element.flag == true;
    }
    handleFilterF(element) {
        return element.flag == false;

    }
    render() {
        var arr = [];
        if (this.props.states == "all") {
            arr = this.props.task;
            //console.log(this.props.task);
        }
        else if (this.props.states == "finish") {
            arr = this.props.task.filter(this.handleFilterF);
        }
        else if (this.props.states == "undo") {
            arr = this.props.task.filter(this.handleFilterU);
        }
        return (
            <div>
                <ul id="todo-list">
                    {
                        arr.map((item)=> {
                            return (
                                <TodoItem item={item} key={item.id} Done={this.handleDone.bind(this) } Del={this.handleDel.bind(this) }/>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

class TodoItem extends Component {
    handleStyle(item) {
        if (item.flag == true) {
            return "font3";
        }
        else {
            return "font2";
        }
    }
    render() {
        return (
            <div>
                <li>
                    <lable id={this.props.item.id} className={this.handleStyle(this.props.item) }>{this.props.item.text}</lable>
                    <button className="done" onClick={this.props.Done} data-key={this.props.item.id}>Done</button>
                    <button className="delete" onClick={this.props.Del} data-key={this.props.item.id}>Remove</button>
                </li>
            </div>
        );
    }
}
export default TodoList;

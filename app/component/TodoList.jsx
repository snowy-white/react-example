import React, {Component, PropTypes} from 'react';

class TodoList extends Component {
    constructor(props) {
        super(props);
    }
    handleDel(e) {
        let delIndex = e.target.getAttribute('data-key');
        this.props.delTask(delIndex);
    }
    handleDone(e) {
        let index = e.target.getAttribute('data-key');
        this.props.doneTask(index);
    }
    render() {
        let arr = [];
        const {task,mark}=this.props;
        if (mark == "all") {
            arr = task;
        }
        else if (mark == "finish") {
            arr = task.filter((element)=>{
                return element.flag == false;
            });
        }
        else if (mark == "undo") {
            arr = task.filter((element)=>{
                return element.flag == true;
            });
        }
        return (
            <div>
                <ul id="todo-list">
                    {
                        arr.map((item)=> {
                            return (
                                <TodoItem item={item} key={item.id} Done={this.handleDone.bind(this) } 
                                Del={this.handleDel.bind(this) }/>
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

TodoList.PropTypes = {
    delTask: PropTypes.func.isRequired,
    doneTask: PropTypes.func.isRequired,
    task:PropTypes.array.isRequired,
    mark:PropTypes.string.isRequired
};

export default TodoList;

import React, {Component, PropTypes} from 'react';

class TodoList extends Component {
    constructor(props) {
        super(props);
    }
    handleDel(e) {
        let delIndex = e.target.getAttribute('data-key');
        this.props.delTask(parseInt(delIndex));
    }
    handleDone(e) {
        let index = e.target.getAttribute('data-key');
        this.props.doneTask(parseInt(index));
    }
    render() {
        let arr = [];
        const {task,filterType}=this.props;
        if (filterType === "all") {
            arr = task;
        }
        else if (filterType === "finish") {
            arr = task.filter((element)=>{
                return element.flag == false;
            });
        }
        else if (filterType === "undo") {
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
                                <TodoItem item={item} key={item.taskid} Done={this.handleDone.bind(this) } 
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
        if (item.flag === true) {
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
                    <lable id={this.props.item.taskid} className={this.handleStyle(this.props.item) }>{this.props.item.text}</lable>
                    <button className="done" onClick={this.props.Done} data-key={this.props.item.taskid}>Done</button>
                    <button className="delete" onClick={this.props.Del} data-key={this.props.item.taskid}>Remove</button>
                </li>
            </div>
        );
    }
}

TodoList.propTypes = {
    delTask: PropTypes.func.isRequired,
    doneTask: PropTypes.func.isRequired,
    task:PropTypes.array.isRequired,
    filterType:PropTypes.string.isRequired
};

export default TodoList;

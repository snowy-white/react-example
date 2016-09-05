import React, {Component, PropTypes} from 'react';

class TodoList extends Component {
    constructor(props) {
        super(props);
    }
    handleDel(idx) {
        // let delIndex = e.target.getAttribute('data-key');
        // console.log(delIndex);
        this.props.delTask(idx);
    }
    handleDone(idx) {
        // let index = e.target.getAttribute('data-key');
        this.props.doneTask(idx);
    }
    render() {
        let arr = [];
        const {tasks,filterType}=this.props;

        return (
            <div>
                <ul id="todo-list">
                    {
                        this.generateDisplayList(filterType, tasks).map((item, idx)=> {
                            return (
                                <TodoItem item={item} key={idx} Done={this.handleDone.bind(this, idx) }
                                Del={this.handleDel.bind(this, idx) }/>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }

    generateDisplayList(filterType, tasks) {
      switch(filterType) {
        case 'FINISH':
          return tasks.filter((element)=>{
              return element.flag == false;
          });

        case 'UNDO':
          return tasks.filter((element)=>{
              return element.flag == true;
          });
        default:
          return tasks;
      }
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
                    <lable className={this.handleStyle(this.props.item) }>{this.props.item.text}</lable>
                    <button className="done" onClick={this.props.Done}>Done</button>
                    <button className="delete" onClick={this.props.Del}>Remove</button>
                </li>
            </div>
        );
    }
}

TodoList.propTypes = {
    delTask: PropTypes.func.isRequired,
    doneTask: PropTypes.func.isRequired,
    tasks:PropTypes.array.isRequired,
    filterType:PropTypes.string.isRequired
};

export default TodoList;

import React, {Component, PropTypes} from 'react';

class TodoCount extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let undo = 0;
        let finish = 0;
        const {task}=this.props;
        task.map((item)=> {
            if (item.flag == true) {
                undo++;
            }
            else {
                finish++;
            }
        });
        let all=undo+finish;
        return (
            <div className="num">
                <p> Total task: {all}    |    Finished task：{finish}    |    Undo task：{undo}</p>
            </div>
        );
    }
}

TodoCount.PropTypes = {
    task:PropTypes.arrayisRequired
};

export default TodoCount;

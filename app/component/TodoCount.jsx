import React, {Component, PropTypes} from 'react';

class TodoCount extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let numofUndoTask = 0;
        let numofFinishTask = 0;
        const {tasks}=this.props;
        tasks.map((item)=> {
            if (item.flag === true) {
                numofUndoTask++;
            }
            else {
                numofFinishTask++;
            }
        });
        return (
            <div className="count">
                <p> Total task: {tasks.length}    |    Finished task：{numofFinishTask}    |    Undo task：{numofUndoTask}</p>
            </div>
        );
    }
}

TodoCount.propTypes = {
    tasks:PropTypes.array.isRequired
};

export default TodoCount;

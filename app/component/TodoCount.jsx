import React, {Component} from 'react';

class TodoCount extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var count1 = 0; // variable name semantization
        var count2 = 0; // variable name semantization
        this.props.task.map((item)=> {
            if (item.flag == true) {
                count1++;
            }
            else {
                count2++;
            }
        })
        return (
            <div className="num">
                <p> Total task: {count1+count2}    |    Finished task：{count2}    |    Undo task：{count1}</p>
            </div>
        );
    }
}

export default TodoCount;

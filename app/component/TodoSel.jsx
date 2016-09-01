import React, {Component} from 'react';

class TodoSel extends Component {
    constructor(props) {
        super(props);
    }
    handleSel() {
        var obj = document.getElementsByName("radio");
        for (var i = 0; i < obj.length; i++) {
            if (obj[i].value == "all" && obj[i].checked) {
                this.props.selTask(this.props.task, "all");
            }
            else if (obj[i].value == "finish" && obj[i].checked) {
                this.props.selTask(this.props.task, "finish");
            }
            else if (obj[i].value == "undo" && obj[i].checked) {
                this.props.selTask(this.props.task, "undo");
            }
        }
    }
    render() {
        return (
            <div>
                <div className="ra">
                    <input type="radio" name="radio" value="all"  onClick={this.handleSel.bind(this) }/>All
                    <input type="radio" name="radio" value="finish" onClick={this.handleSel.bind(this) }/>Finished
                    <input type="radio" name="radio" value="undo" onClick={this.handleSel.bind(this) }/>Undo
                </div>
            </div>
        );
    }
}

export default TodoSel;
import React, {Component, PropTypes} from 'react';

class TodoFilter extends Component {
    constructor(props) {
        super(props);
    }
    handleSel() {
        let obj = document.getElementsByName("radio");
        for (let i = 0; i < obj.length; i++) {
            if (obj[i].value == "all" && obj[i].checked) {
                this.props.selTask("all");
            }
            else if (obj[i].value == "finish" && obj[i].checked) {
                this.props.selTask("finish");
            }
            else if (obj[i].value == "undo" && obj[i].checked) {
                this.props.selTask("undo");
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

TodoFilter.PropTypes={
    selTask:PropTypes.func.isRequired
}

export default TodoFilter;

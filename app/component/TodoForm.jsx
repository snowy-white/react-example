import React, {Component} from 'react';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }
    handleChangeValue(event) {
        this.setState({ value: event.target.value });
    }
    render() {
        var value = this.state.value;
        return (
            <div>
                <form onSubmit={this.handleAdd.bind(this) }>
                    <input type="text" ref="inputnew" id="todo-new" placeholder="typing a newthing todo"  value={value} onChange={this.handleChangeValue.bind(this) }/>
                </form>
            </div>
        );
    }
    handleAdd(e) {
        e.preventDefault();
        var newthing = this.refs.inputnew.value.trim();
        var rows = this.props.task;
        var d = new Date();
        var t = d.getTime();
        if (newthing != '') {
            rows.push({ id: t, text: newthing, flag: true });
            this.props.addTask(rows, "all");
        }
    }
}

export default TodoForm;
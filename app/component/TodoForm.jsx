import React, { Component, PropTypes } from 'react';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }
  handleChangeValue(event) {
    this.setState({value: event.target.value});
  }

  // Does it chinglish? 'typing a newthing todo'
  render() {
    // var value = this.state.value;
    return (
      <div>
        <form onSubmit={this.handleAdd.bind(this)}>
          <input type="text" ref="inputnew" id="todo-new" placeholder="typing a newthing todo" value={this.state.value} onChange={this.handleChangeValue.bind(this)}/>
        </form>
      </div>
    );
  }
  handleAdd(e) {
    e.preventDefault();
    // var newthing = this.refs.inputnew.value.trim();
    // var newthing = this.state.value;
    // var rows = this.props.task;
    let taskName = this.state.value.trim();
    let { task } = this.props;


    // var d = new Date();
    // var t = d.getTime();
    if (taskName != '') {
      // rows.push({id: t, text: newthing, flag: true});
      task.push({id: (new Date()).getTime(), text: taskName, flag: true});
      this.props.addTask(task, "all");
    }

    this.setState({value: ''});
  }
}

TodoForm.propTypes = {
  addTask: PropTypes.func.isRequired
};

export default TodoForm;

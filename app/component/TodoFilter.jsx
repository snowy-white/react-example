import React, {Component, PropTypes} from 'react';

class TodoFilter extends Component {
    constructor(props) {
        super(props);
    }
    handleFilter(e) {
        let value=e.target.getAttribute('value');
        if (value === "all") {
            this.props.filterTask("all");
        }
        else if (value === "finish") {
            this.props.filterTask("finish");
        }
        else if (value === "undo") {
            this.props.filterTask("undo");
        }

    }
    render() {
        return (
            <div>
                <div className="filter">
                    <input type="radio" name="radio" value="all"  onClick={this.handleFilter.bind(this) }/>All
                    <input type="radio" name="radio" value="finish" onClick={this.handleFilter.bind(this) }/>Finished
                    <input type="radio" name="radio" value="undo" onClick={this.handleFilter.bind(this) }/>Undo
                </div>
            </div>
        );
    }
}

TodoFilter.propTypes = {
    filterTask: PropTypes.func.isRequired
};

export default TodoFilter;

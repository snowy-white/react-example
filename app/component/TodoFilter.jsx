import React, {Component, PropTypes} from 'react';

class TodoFilter extends Component {
    constructor(props) {
        super(props);
    }
    handleFilter(type) {
        this.props.filterHandler(type);
    }
    render() {
        return (
            <div>
                <div className="filter">
                    <input type="radio" name="radio" value="ALL"  onClick={this.handleFilter.bind(this, "ALL") }/>All
                    <input type="radio" name="radio" value="FINISH" onClick={this.handleFilter.bind(this, "FINISH") }/>Finished
                    <input type="radio" name="radio" value="UNDO" onClick={this.handleFilter.bind(this, "UNDO") }/>Undo
                </div>
            </div>
        );
    }
}

TodoFilter.propTypes = {
    filterHandler: PropTypes.func.isRequired
};

export default TodoFilter;

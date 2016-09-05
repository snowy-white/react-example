import React, {Component, PropTypes} from 'react';

class TodoFilter extends Component {
    constructor(props) {
        super(props);
    }
    handleFilter(type) {
        // let value=e.target.getAttribute('value');
        // if (value === "all") {
        //     this.props.filterTask("all");
        // }
        // else if (value === "finish") {
        //     this.props.filterTask("finish");
        // }
        // else if (value === "undo") {
        //     this.props.filterTask("undo");
        // }
        this.props.filterHandler(type);
    }
    render() {

        return (
            <div>
                <div className="filter">
                    <input type="radio" name="radio" value="ALL"  onClick={this.handleFilter.bind(this, 'ALL') }/>All
                    <input type="radio" name="radio" value="FINISH" onClick={this.handleFilter.bind(this, 'FINISH') }/>Finished
                    <input type="radio" name="radio" value="UNDO" onClick={this.handleFilter.bind(this, 'UNDO') }/>Undo
                </div>
            </div>
        );
    }
}

TodoFilter.propTypes = {
    filterHandler: PropTypes.func.isRequired
};

export default TodoFilter;

import React from 'react'
import PropTypes from 'prop-types';

class AddTodo extends React.Component {


    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: ''});
    }

    _handleKeyDown = (e) => {
        if(e.key === 'Enter')
        {
            this.onSubmit(e)
        }
    }

    onChange = (e) => this.setState({ title: e.target.value });

    render() {
        return (
            <div>
                <input 
                className="todo-input" 
                name="todo" 
                type="text" 
                placeholder="Enter a todo..."
                value={this.state.title}
                onChange={this.onChange}
                onKeyPress={this._handleKeyDown}
                />
            </div>
        )
    }

}

    //Proptypes
    AddTodo.propTypes = {
        addTodo: PropTypes.func.isRequired
        }

export default AddTodo;
import React from 'react';
import PropTypes from 'prop-types';

class TodoItem  extends React.Component {

    getStyle = () => {
        return this.props.todo.completed ? 'line-through' : 'none'
    }

    render() {

        const {id, title} = this.props.todo;

        return (
            <div className="todo-item">     
                    <div className="TodoItem">
                    <input onChange={this.props.markComplete.bind
                        (this, id)} type="checkbox"></input> 
                    <span className={this.getStyle()} >{title}</span>
                    <button className="delete" onClick={this.props.delete.bind(this, id)}>x</button>
                    </div>
            </div>
        );
    }
}

//Proptypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired
}

export default TodoItem;
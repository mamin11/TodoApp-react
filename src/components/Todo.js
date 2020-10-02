import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todo  extends React.Component {
    render() {

        return this.props.todos.map((todo) => (
            <TodoItem  key={todo.id} todo={todo} markComplete={this.props.markComplete} delete={this.props.delete}></TodoItem>
        ));
    }
}

//Proptypes
Todo.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired
}

export default Todo;
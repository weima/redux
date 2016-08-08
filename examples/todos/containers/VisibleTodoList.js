import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import * as actionTypes from '../actions/actionTypes';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case actionTypes.ACTION_SHOW_ALL:
      return todos;
    case actionTypes.ACTION_SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case actionTypes.ACTION_SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
  }
};

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList

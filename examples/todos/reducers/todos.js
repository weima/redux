import * as actionTypes from '../actions/actionTypes';

const newTodo = ({id, text}, state) => {
    return {id, text, completed: false};
};

const addOneMoreToDo = (action, state) =>{
    return [...state, newTodo(action, undefined)];
};

const noChange = (action, state) => state;

const toggleState = (action, state) => {
    if(action.id !== state.id){
        return state;
    }else{
        return Object.assign({}, state, {completed: !state.completed});
    }
};

const toggleStates = (action, states) => {
    return states.map(s => toggleState(action, s));
};

const todos = (state = [], action) => {
    const reducers = {
        [actionTypes.ACTION_ADD_TODO]:addOneMoreToDo,
        [actionTypes.ACTION_TOGGLE_TODO]:toggleStates
    };

    let reducer = reducers[action.type] || noChange;
    return reducer(action, state);
};

export default todos

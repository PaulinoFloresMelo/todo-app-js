import { Todo } from '../todos/models/todo.model'

const Filter = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending'
}


const state = {
    todos: [
        new Todo('Pedra del alma'),
        new Todo('Piedra del infinito'),
        new Todo('Piedra del tiempo'),
        new Todo('Piedra del poder'),
        new Todo('Piedra de la realidad'),
    ],
    filter: Filter.All,
}

const initStore = () => {
    console.log(state);
    console.log('InitStore');
}

const loadStore = () =>{
    throw new Error('Not implemented');
}

const getTodos = (filter = Filter.All ) => {

    switch( filter ) {
        case Filter.All:
            return [...state.todos];

        case Filter.Completed:
            return state.todos.filter( todo => todo.done );

        case Filter.Pending:
            return state.todos.filter( todo => !todo.done);

        default:
            throw new Error(`Option ${ filter } in not valid`)
    }
}

/**
 * 
 * @param {String} description 
 */
const addTodo = ( description ) => {
    if ( !description ) throw new Error('Description is required')
    state.todos.push( new Todo( description ))
}

/**
 * 
 * @param {String} todoId 
 */
const toggleTodo = ( todoId ) => {
    
    state.todos = state.todos.map( todo => {
        if( todo.id === todoId ){
            todo.done = !todo.done;
        }
        return todo;
    })
}

const deleteTodo = ( todoId ) => {
    state.todos = state.todos.filter( todo => todo.id !== todoId );
}

const deleteCompleted = ( todoId ) => {
    state.todos = state.todos.filter( todo => todo.done );
}

/**
 * 
 * @param {Filter} newFilter 
 */
const setFilter = ( newFilter = Filter.All ) => {
    state.filter = newFilter;
}

const getCurrentFilter = () => {
    return state.filter;
}

export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
}
import todoStore, { Filters } from "../../store/todo.store";

let element;
/**
 * 
 * @param {String} elementID 
 */
export const renderPending = ( elementID ) => {
    
    if( !element )
        element = document.querySelector( elementID );

    if ( ! element )
        throw new Error(`Element ${ element } not fount`);

    element.innerHTML = todoStore.getTodos(Filters.Pending ).length;
}
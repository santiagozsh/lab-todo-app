import { createTodoHTML } from "./";

export const renderTodos = ( elementId, todos = [] ) =>{
    // TODO: referencia
    const element = document.querySelector( elementId );
    todos.forEach( todo => {
        element.append( createTodoHTML(todo) )
    } )

}
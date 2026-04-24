import React from 'react';


const TodosPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await res.json();
    console.log(todos);

    return (
        <div>
            <h2>Total Todos Data : {todos.length}</h2>
        </div>
    );
};

export default TodosPage;
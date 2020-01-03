const Todo = (title, description, dueDate, priority = 1, id = 0) => {
    return {
        title, 
        description,
        dueDate, 
        priority,
        id
    }
};

export {Todo}
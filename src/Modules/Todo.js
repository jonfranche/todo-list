const Todo = (title, description, dueDate, priority = 1) => {
    return {
        title, 
        description,
        dueDate, 
        priority
    }
};

export {Todo}
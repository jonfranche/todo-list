const Project = (title, description, id = 0) => {
    return {
        title,
        description,
        todos: [],
        id
    }
}

export {Project}
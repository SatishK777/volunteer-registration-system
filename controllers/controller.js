let todoStore = [];

const defaultController = (req, res) => {
    res.render('index', { todos: todoStore });
}

const addTodoController = (req, res) => {

    console.log("Add Todo");
    console.log("body", req.body);

    let todoObj = {
        id: todoStore.length + 1,
        todo: req.body.todo,
        email: req.body.email,
        number: req.body.number,
        skill: req.body.skill
    }

    console.log("Obj", todoObj);

    todoStore = [...todoStore, todoObj]
    console.log("Store", todoStore);

    res.redirect('/');
}

const editTodoController = (req, res) => {
    console.log(req.params);
    let { id } = req.params
    let singleTodo = todoStore.find((todo) => {
        return todo.id == id
    })

    console.log("Single Todo..???", singleTodo);

    res.render('editTodo', { singleTodo });
}

const updateTodoController = (req, res) => {

    let { id } = req.params

    let updateTodo = todoStore.map((todo) => {
        if (todo.id == id) {
            todo.todo = req.body.todo
            todo.email = req.body.email
            todo.number = req.body.number
            todo.skill = req.body.skill
        }
        return todo
    })

    todoStore = updateTodo

    console.log("Update Todo", updateTodo);
    console.log('Todo Updated');

    res.redirect('/');

    console.log("BODY >>>", req.body);
}

const deleteTodoController = (req, res) => {

    let { id } = req.params
    let deleteTodo = todoStore.filter((todo) => {
        return todo.id != id
    })

    todoStore = deleteTodo

    console.log("Todo Store", todoStore);
    console.log("Delete Todo", deleteTodo);
    console.log('Todo Deleted');

    res.redirect('/');

    console.log("BODY >>>", req.body);
}

module.exports = { defaultController, addTodoController, editTodoController, updateTodoController, deleteTodoController }
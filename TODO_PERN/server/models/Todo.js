module.exports = (sequalize, Sequalize) => {
    const Todo = sequalize.define("todo", {
        description: {
            type: Sequalize.STRING
        },
        createdAt: {
            type: Sequalize.DATEONLY
        }
    });
    return Todo;
}

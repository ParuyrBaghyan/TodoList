function TodoFooter({todos,onClearCompleted}){

    const complitedSize = todos.filter(todo => todo.isCompleted).length
    return(
        <div>
            <span>{complitedSize}/{todos.length} Completed</span>
            <button onClick={(e) => {

            }}>Clear Complated</button>
        </div>
    )
}


export default TodoFooter

const TodoList = (props) => {
    const deletetodoHandler = (id) =>{
        props.setTodos(props.todos.filter((el)=>el.id!==id));
    }
    const donetodoHandler = (id) =>{
        props.setTodos(props.todos.filter((el)=>el.id!==id));
        alert("Congratulations! you have finished a task!");
    }
    return (
        <div className="TodoList">
            <ul>
                {props.todos.map((item)=>(
                    <li key={item.id}><span className="todo_txt">- {item.text}</span> <span className="icons">
                        <i  onClick={()=>deletetodoHandler(item.id)} className="fa fa-minus-square-o fa-3x" aria-hidden="true"></i><i onClick={()=>donetodoHandler(item.id)} className="fa fa-check-square-o fa-3x" aria-hidden="true"></i>
                        </span></li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;

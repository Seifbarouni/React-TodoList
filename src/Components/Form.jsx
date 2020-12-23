
const Form = (props) => {
    const inputHandler=(e)=>{
        props.setInput(e.target.value);
    }
    const addTodoHandler = (e) =>{
        e.preventDefault();
        if(props.input!=="")
        {
            /* const newList = props.todos.concat(props.input);
            props.setTodos(newList);
            console.log(props.todos); */
            props.setTodos([
                ...props.todos,{text:props.input,id:Math.random()*1000+69}
            ]);
        }
        
        props.setInput("");
    }
    return (
        <div>
           <form>
            <input value={props.input} className="text_input" onChange={inputHandler} type="text"/>   
            <i onClick={addTodoHandler} className="far fa-plus-square fa-3x"></i>
            </form> 
        </div>
    );
}

export default Form

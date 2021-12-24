import React, { useState } from 'react'

const TodoInput = () => {
    const [input, setInput] = useState("")
    const [todos, setTodos] = useState([])
   
 
    //1. New Todo  Handler 

    const inputHandler=(e)=>{
        setInput(e.target.value)       
    }

    //2. Add Todos Handler
    const addHandler=()=>{
    //Empty field Validation  
        if(!input){
            alert('Plz fill field')
        }else{
            setTodos([...todos,{bool:true,todo:input}])
            setInput("")
        }
    }
    //3. onChange Todos Handler

    const handleChange=(e,index)=>{
    todos[index].todo=e.target.value
    setTodos([...todos])
    }
    
    // 4. Edit value Handler
    
    const editHandler=(index)=>{
        todos[index].bool=false
        setTodos([...todos])
        
    }

    // 5. update value Handler

    const updateHandler=(index)=>{
        todos[index].bool=true
        setTodos([...todos])
        
    }
    // 6. Delete value Handlerl

    const deleteHandler=(id)=>{
        const filterDelete= todos.filter((e,i)=>id!==i)
        setTodos(filterDelete)

    }

    // console.log("input",input);
    // console.log("todos",todos);
    // // console.log("editable",editable);
    return (
        <div style={{marginTop:16}}>
          <input type="text" value={input} onChange={inputHandler} />  
          <button onClick={addHandler}>Add</button>
          {todos.map((ele,i)=>{
             return <div key={i} style={{marginTop:16}}>
                 <span style={{marginRight:15}}>{i}:</span>  
                 <input  type="text" disabled={ele.bool?true:false}  onChange={(e)=>handleChange(e,i)} value={ele.todo} />
                 <button onClick={()=>{ele.bool?editHandler(i):updateHandler(i)}} style={{marginLeft:16}}>{ele.bool?'edit':'add'}</button>
                 <button onClick={()=>deleteHandler(i)} style={{marginLeft:16}}>Delete</button>                            
             </div> 
          })}
        </div>
    )
}

export default TodoInput

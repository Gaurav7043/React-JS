import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { Button, Input, Label } from 'reactstrap'

export default function Single_Input() {
  let [todo, set_todo] = useState("")
  let [all_todo, set_all_todo] = useState([])

  // get data from input
  const get_data = (ele)=>{
    // console.log("ele", ele, typeof ele, typeof ele.target.value, ele.target.value)
    // ele.target = information of input element
    // ele.target.value = input value
    set_todo(ele.target.value)
  }
  
  // add task to arry
  const add_task = ()=>{
    if(todo.length > 0){
      // why use [...all_todo, todo] => to copy old data and add new data
      set_all_todo([...all_todo, todo])
      // to empty input after click on add todo button
      set_todo("")
      toast.success("Todo is Added")
    }else{
      toast.error("Please Fill The Input")
    }
  }

  return (
    <>
      {/* <h1>{todo}</h1> */}
      <div className='w-50 border border-1 dark rounded-3 p-4 mt-5'>
        <h1 className='text-center'>Add Todo</h1>
        <hr />
        <Label>Todo</Label>
        {/* value = to manage input value */}
        <Input value={todo} placeholder='Add your Task' onChange={(e)=>get_data(e)}/>
        <Button color='danger' className='w-100 mt-3' onClick={()=>add_task()}>Add</Button>
      </div>

      {
        all_todo.length > 0 ?
        <div className='w-50 border border-1 dark rounded-3 p-4 mt-5'>
          <h3 className='text-center'>Your Todo List</h3>
          <hr />
          {
            all_todo.map((e, i)=>{
              return <h6 key={i} className='border-bottom border-1 dark pb-2'>{i + 1}. {e}</h6>
            })
          }
        </div> :
        (
          <h1>Please Add Some Todo</h1>
        ) 
      }
    </>
  )
}

import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { Button, Input, Label } from 'reactstrap'

export default function Single_Input_Task() {
    let [car, set_car] = useState("")
    let [all_car, set_all_todo] = useState([])

    // get data from input
    const car_data = (ele)=>{
        // ele.target = information of input element
        // ele.target.value = input value
        set_car(ele.target.value)
    }

    // add task to array
    const car_task = ()=>{
        if(car.length > 0){
            // why use [...all_car, car] => to copy old data and add new data
            set_all_todo([...all_car, car])
            // to empty input after click on add todo button
            set_car("")
            toast.success("Car Name Add")
        }else{
            toast.error("Please Fill The Input")
        }
    }

    return (
        <>
        {/* <h1>{car}</h1> */}
            <div className='w-50 border border-1 dar rounded-3 p-4 mt-5'>
                <h1 className='text-center'>ADD CAR NAME</h1>
                <hr />
                <Label>Car</Label>
                {/* value = to manage input value */}
                <Input value={car} placeholder='Add your Task' onChange={(e)=>car_data(e)}/>
                <Button color="danger" className='w-100 mt-3' onClick={()=>car_task()}>Add</Button>
            </div>

            {
                all_car.length > 0 ?
                <div className='w-50 border border-1 dark rounded-3 p-4 mt-5'>
                    <h3 className='text-center'>Your Car List</h3>
                    <hr />
                    {
                        all_car.map((e, i)=>{
                            return <h6 key={i} className='border-bottom border-1 dark pb-2'>{i + 1}. {e}</h6>
                        })
                    }
                </div> :
                (
                    <h1>Please Add Some Car Name</h1>
                )
            }
        </>
    )
}

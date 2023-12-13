import React, { useState } from 'react'
import { Button } from 'reactstrap';

export default function Use_State_Fun() {
    let [count, set_count] = useState(10);
    /*
    x = count
    set_count = "=" // method
    useState(100) = 100 is intial value
    */
    let x = 0

    const increment_count = () =>{
        x += 1
        console.log("x:", x)
        set_count(count + 1)
        console.log("count:", count)
    }

    return (
        <div>
            <h1>X is {x}</h1>
            <h1>Count is {count}</h1>
            <Button color="danger" onClick={()=> increment_count()}>Inc</Button>
            {/* <Button color="danger" onClick={increment_count}>Inc</Button> */}
        </div>
      )
}

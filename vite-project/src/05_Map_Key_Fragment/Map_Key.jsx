import React, { useId } from 'react'

export default function Map_Key() {
    let name_arr = ["Gaurav", "Harsh", "Ankush", "om"]
    // console.log("----===--=======>");
    return (
        <div>
            <h1>Map Key</h1>
            {name_arr.map((e, i)=>{
                let id = useId()
                // console.log("------>");
                // console.log("id", id)
                return(
                    <h1 key={id}>{i + 1}. {e}</h1>
                )
            })}
        </div>
    )
}
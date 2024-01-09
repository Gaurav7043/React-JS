import React, { useState } from 'react'
import { Input, Label } from 'reactstrap'

let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H"]

export default function Check_Box() {
    let [selectIndex, setSelectIndex] = useState([])

    const selectHandler = (index)=>{
        let available = selectIndex.includes(index)
        if(available){
            let filter = selectIndex?.filter((e)=> e !== index)
            setSelectIndex(filter)
        }else{
            setSelectIndex([...selectIndex, index])
        }
    }

    return (
        <>
            <div className='d-flex align-items-center gap-4 justify-content-center m-0'>
                {
                    alphabet?.map((e, i)=>{
                        return(
                            <div key={i} className='d-flex gap-1 align-items-center justify-content-center'>
                                <Input className='m-0' type='checkbox' checked={selectIndex?.includes(i)} onChange={()=>selectHandler(i)} />
                                <Label className='m-0'><h3 className='m-0'>{e}</h3></Label>
                            </div>
                        )
                    })
                }
            </div>

            <div className='d-flex gap-3 align-align-items-center justify-content-center'>
                {
                    alphabet?.map((e, i)=>{
                        return(
                            <div key={i}>
                                {
                                selectIndex?.includes(i) && <h1>{e}</h1>
                                }
                            </div>
                        )
                        // if(selectIndex?.includes(i)){
                        //     return <h1 key={i}>{e}</h1>
                        // }
                    })
                }
            </div>
        </>
    )
}

import React, { useMemo, useState } from 'react'
import { Button } from 'reactstrap'

function fun(count) {
    console.log("----generateArr------->");
    for (let i = 0; i < 1000000000; i++) { }
    let arr = [count, count + 1, count + 2]
    return arr
}

export default function Use_Memo() {
    let [count, setCount] = useState(0)
    let [amount, setAmount] = useState(0)

    let next3NumberArr = useMemo(() => {
        return fun(count)
    }, [count])

    // let next3NumberArr = useMemo(() => {
    //     console.log("----generateArr------->");
    //     for (let i = 0; i < 1000000000; i++) { }
    //     let arr = [count, count + 1, count + 2]
    //     return arr
    // }, [count])
    // console.log("====>", next3NumberArr)

    return (
        <>
            <div className='text-center'>
                <h3>Number = {next3NumberArr[0]}</h3>
                <h3>Number + 1 = {next3NumberArr[1]}</h3>
                <h3>Number + 2 = {next3NumberArr[2]}</h3>
                <hr className='mt-3 mb-2' style={{ width: "25%", margin: "auto" }} />
                <h2>Count is {count}</h2>
                <Button color='danger' onClick={() => setCount(count + 1)}>Inc</Button>
                <hr className='mt-3 mb-2' style={{ width: "25%", margin: "auto" }} />
                <h2>Amount is {amount}</h2>
                <Button color='danger' onClick={() => setAmount(amount + 1)}>Inc</Button>

            </div>
        </>
    )
}

/*
export default function Use_Memo() {
    let [count, setCount] = useState(0)
    let [amount, setAmount] = useState(0)

    const generateArr = () => {
        console.log("----generateArr------->");
        for (let i = 0; i < 1000000000; i++) { }
        let arr = [count, count + 1, count + 2]
        return arr
    }

    // let next3NumberArr = generateArr()
    let next3NumberArr = useMemo(generateArr, [count])
    // console.log("====>", next3NumberArr)

    return (
        <>
            <div className='text-center'>
                <h3>Number = {next3NumberArr[0]}</h3>
                <h3>Number + 1 = {next3NumberArr[1]}</h3>
                <h3>Number + 2 = {next3NumberArr[2]}</h3>
                <hr className='mt-3 mb-2' style={{ width: "25%", margin: "auto" }} />
                <h2>Count is {count}</h2>
                <Button color='danger' onClick={() => setCount(count + 1)}>Inc</Button>
                <hr className='mt-3 mb-2' style={{ width: "25%", margin: "auto" }} />
                <h2>Amount is {amount}</h2>
                <Button color='danger' onClick={() => setAmount(amount + 1)}>Inc</Button>

            </div>
        </>
    )
}
*/
import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
const name_1 = ["om", "urvish", "meet", "manhor", "saif", "vivek", "nimesh", "nidhipriya", "gaurav"];
const name_2 = ["saif", "nimesh", "gaurav"];

export default function Use_Effect_Pro() {
    const [index, set_index] = useState(0);

    useEffect(() => {
        const current_name = name_1[index];
        if (name_2.includes(current_name)) {
            alert(`The name ${current_name} exists in both arrays!`);
        }
    }, [index]);

    const increment = () => {
        set_index(index + 1);
        if (index > name_1.length - 2) {
            set_index(0);
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "150px" }}>
            <h1>mach elements of both arrays</h1>
            <h1>{name_1[index]}</h1>
            <Button color="danger" onClick={()=>increment()}>check mach Name</Button>
        </div>
    );
}
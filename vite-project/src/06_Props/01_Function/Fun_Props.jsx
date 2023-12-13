import React from 'react'

export default function Fun_Props({color, name, age}) {
  return (
    <div>
      <h1 style={{color: color}}>My Name is {name}</h1>
      <h2>and My Age is {age}</h2>
    </div>
  )
}

// export default function Fun_Props(props) {
//   console.log("props:", props)
//   return (
//     <div>
//       <h1 style={{color: props.color}}>My Name is {props.name}</h1>
//       <h2>and My Age is {props.age}</h2>
//     </div>
//   )
// }

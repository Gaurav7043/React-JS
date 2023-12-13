import React from 'react'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap'

// with object
// export default function Card_Com(props) {
//     return (
//         <div>
//             <Card style={{width: '18rem'}}>
//                 <img alt="Sample" src="https://picsum.photos/300/200"/>
//                 <CardBody>
//                     <CardTitle tag="h5">{props?.data?.title || "Title Unavailable"}</CardTitle>
//                     <CardSubtitle className="mb-2 text-muted" tag="h6">{props?.data?.price} Rs.</CardSubtitle>
//                     <CardText>{props?.data?.description}</CardText>
//                     <Button color='danger' className='w-100'>Button</Button>
//                 </CardBody>
//             </Card>
//         </div>
//     )
// }

// without object
// export default function Card_Com(props) {
//     return (
//         <div>
//             <Card style={{width: '18rem'}}>
//                 <img alt="Sample" src="https://picsum.photos/300/200"/>
//                 <CardBody>
//                     <CardTitle tag="h5">{props.name || "Title Unavailable"}</CardTitle>
//                     <CardSubtitle className="mb-2 text-muted" tag="h6">{props.price} Rs. Price</CardSubtitle>
//                     <CardText>{props.discription}</CardText>
//                     <Button color='danger' className='w-100'>Button</Button>
//                 </CardBody>
//             </Card>
//         </div>
//     )
// }

// with discount
export default function Card_Com(props) {
    return (
        <div>
            <Card style={{width: '18rem'}}>
                <img alt="Sample" src="https://picsum.photos/300/200"/>
                <CardBody>
                    <CardTitle tag="h5">{props.name || "Title Unavailable"}</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">{props.price} Rs. Price</CardSubtitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">{props.discountPercentage || "0"} Rs. Discount Percentage</CardSubtitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">{props.after.toFixed(2) || props.price} Rs. After Discount Price</CardSubtitle>
                    <CardText>{props.discription}</CardText>
                    <Button color='danger' className='w-100'>Button</Button>
                </CardBody>
            </Card>
        </div>
    )
}
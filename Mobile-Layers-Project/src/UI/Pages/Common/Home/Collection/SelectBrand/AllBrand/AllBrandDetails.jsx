// import React from 'react'
// import { Modal, ModalHeader, ModalBody } from 'reactstrap'

// export default function AllBrandDetails({ isOpen, toggle, details }) {
//     return (
//         <Modal isOpen={isOpen} toggle={toggle} backdrop='static'>
//             <ModalHeader toggle={toggle}>Product Details</ModalHeader>
//             <ModalBody>
//                 {
//                     details && (
//                         <>
//                             <div className='text-center p-2'>
//                                 <img src={details?.thumbnail} alt="" width="200px" height="250px" />
//                             </div>
//                             <div className='border dark rounded-2'>
//                                 <div className="d-flex justify-content-between border-bottom dark" style={{ padding: "05px 11px" }}>
//                                     <div><span className='fw-bold'>Title:-</span> {details?.title}</div>
//                                     <div><span className='fw-bold'>Description:-</span> {details?.description}</div>
//                                 </div>
//                                 <div className="d-flex justify-content-between border-bottom dark" style={{ padding: "05px 11px" }}>
//                                     <div><span className='fw-bold'>Price:-</span> {details?.price}</div>
//                                     <div><span className='fw-bold'>Discount:-</span> {details?.discountPercentage || 0} %</div>
//                                 </div>
//                                 <div className="d-flex justify-content-between border-bottom dark" style={{ padding: "05px 11px" }}>
//                                     <div>
//                                         <span className='fw-bold'>Final price:-</span>
//                                         {details?.price - ((details?.price * details?.discountPercentage) / 100).toFixed(1) || "not discount"}
//                                     </div>
//                                     <div><span className="fw-bold">Available Stock:-</span> {details?.availableStock}</div>
//                                 </div>
//                             </div>
//                         </>
//                     )
//                 }
//             </ModalBody>
//         </Modal>
//     )
// }


// import React from 'react'
// import { Outlet } from 'react-router-dom';

// export default function AllBrandDetails({ detail }) {
//     // console.log("========>")
//     // if (!details) {
//     //     return null; // Render nothing if detail is not provided
//     // }

//     return (
//         <>
//             {/* {
//                 details && (
//                     <>
//                         <div className='text-center p-2'>
//                             <img src={details?.thumbnail} alt="" width="200px" height="250px" />
//                         </div>
//                         <div className='border dark rounded-2'>
//                             <div className="d-flex justify-content-between border-bottom dark" style={{ padding: "05px 11px" }}>
//                                 <div><span className='fw-bold'>Title:-</span> {details?.title}</div>
//                                 <div><span className='fw-bold'>Description:-</span> {details?.description}</div>
//                             </div>
//                             <div className="d-flex justify-content-between border-bottom dark" style={{ padding: "05px 11px" }}>
//                                 <div><span className='fw-bold'>Price:-</span> {details?.price}</div>
//                                 <div><span className='fw-bold'>Discount:-</span> {details?.discountPercentage || 0} %</div>
//                             </div>
//                             <div className="d-flex justify-content-between border-bottom dark" style={{ padding: "05px 11px" }}>
//                                 <div>
//                                     <span className='fw-bold'>Final price:-</span>
//                                     {details?.price - ((details?.price * details?.discountPercentage) / 100).toFixed(1) || "not discount"}
//                                 </div>
//                                 <div><span className="fw-bold">Available Stock:-</span> {details?.availableStock}</div>
//                             </div>
//                         </div>
//                     </>
//                 )
//             } */}
//             <h1>dnmmmmmmmmmmmmmmm</h1>
//             <Outlet />
//         </>
//     )
// }

// import React from 'react'
// import { Outlet } from "react-router-dom"

// export default function AllBrandDetails({ detail }) {
//     // Check if `detail` is null or undefined
//     if (!detail) {
//         return <p>Loading...</p>; // Display a loading message or component if `detail` is not available
//     }

//     return (
//         <>
//             <h1>gaurav</h1>
//             <h1>{detail.title}</h1>
//             <div>
//                 <img src={detail.thumbnail} alt={detail.title} style={{ maxWidth: '100%', height: 'auto' }} />
//             </div>
//             <p>Description: {detail.description}</p>
//             <p>Price: ${detail.price}</p>
//             {/* Additional details can be rendered here based on the `detail` object */}
//             <Outlet/>
//         </>
//     );
// }


import React from 'react';

export default function AllBrandDetails({ detail }) {

    return (
        <>
        <h1>gaurav</h1>
        <h1>harsh</h1>
            <h1>{detail?.title}</h1>
            <div>
                <img src={detail?.thumbnail} alt={detail?.title} style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            <p>Description: {detail?.description}</p>
            <p>Price: ${detail?.price}</p>
        </>
    )
}

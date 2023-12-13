import React from 'react'

export default function Body() {
  return (
    <div className='d-flex mt-2' style={{height: "300px"}}>
      <div className='w-25 border border-2 border-black d-grid align-items-center justify-content-center text-success fs-1 p-5 me-2'>Content</div>
      <div className='w-50 border border-2 border-black d-grid align-items-center justify-content-center text-success fs-1 p-5 me-2'>
        <div style={{width : "140px", textAlign : "center"}}>Main Content</div>
      </div>
      <div className='w-25 border border-2 border-black d-grid align-items-center justify-content-center text-success fs-1 p-5'>Content</div>
    </div>
  )
}

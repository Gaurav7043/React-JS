import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <>
        <div className='text-center fs-1 p-2 border border-2 border-black text-success mt-2'>Header</div>
        <div className='text-center fs-1 border border-2 border-black p-2 text-success mt-2'>Navigation Menu</div>
      </>
    )
  }
}

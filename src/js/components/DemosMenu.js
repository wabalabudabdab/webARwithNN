import React from 'react'
import { Link } from 'react-router-dom'

export default function DemoMenu(props) {
  return (
    <div className='demoMenusContent'>
      <h1>Object recognize webAR</h1>

      <p>Models:</p>
      <ul>
        {/*<li><Link to='/sprite'>33CL Sprite can</Link></li>*/}
        {/*<li><Link to='/ARCoffee'>AR Coffee</Link></li>*/}
        <li><Link to='/keyboard'>Oldschool Keyboard SLAM</Link></li>
      </ul> 

      {/*<p>Private demos (require neural networks not included in this repository):</p>*/}
      {/*<ul>*/}
      {/*  <li><Link to='/coin'>Coin detection</Link></li>*/}
      {/*</ul>*/}
    </div>
  )
}
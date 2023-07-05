import React, { useLayoutEffect } from 'react'
import '../../styles/DropDown.scss'


export const DropDown = () => {



  return (

    <div className='dropdown-cont'>
        <ul>
            <li><a href='/en/services'>All Services</a></li>
            <li><a>Accounting</a></li>
            <li><a>Bookeeping</a></li>
            <li><a>Audit</a></li>
            <li><a>Taxes</a></li>
            <li><a>Programming</a></li>
            <li><a>Career</a></li>
        </ul>
    </div>
)}

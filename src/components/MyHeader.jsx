import './MyHeader.scss'
import {logo} from '../icons'
import { useState } from 'react'



const MyHeader = (props) => {
  const [isOpen, setIsOpen ] = useState(false);

  const toggleHandler = () => {
    setIsOpen(!isOpen)
    console.log(isOpen)
  }

 return  (
    <header>
      <div className='header-container'>
        <div className="header-start">
          <img 
            className='logo' 
            src={logo} 
            alt="company-logo" 
          />
          <div 
            className={`burger-icon ${isOpen ? 'open' : ''}`}
            onClick={toggleHandler}
          >
            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
            </svg>
          </div>
          {/* <img src="" alt=""> */}
        </div>
        <nav className={`header-mid ${isOpen ? 'open' : ''}`}>
          <ul>
            <li><a href={`/${props.lang}/home`}>Home</a></li>
            <li><a href={`/${props.lang}/services`}>Services</a></li>
            <li><a href={`/${props.lang}/courses`}>Courses</a></li>
            <li><a href={`/${props.lang}/about`}>About</a></li>
            <li><a href={`/${props.lang}/contact`}>Contact</a></li>
          </ul>
        </nav>
        <div className={`header-end ${isOpen ? 'open' : ''}`}>
          <button className='btn-stroke-yellow' type="button">sign in</button> 
          <button className='btn-stroke-white' type="button">join our team</button> 
        </div>
      </div>
    </header>
  )
}
export default MyHeader

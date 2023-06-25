import '../styles/MyHeader.scss';
import {logo} from '../icons';
import { useEffect, useState } from 'react';

const MyHeader = (props) => {
  const [isOpen, setIsOpen ] = useState(false);
  const [isSticky, setIsSticky ] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = 70;
      const scrollPosition = window.scrollY

      if(scrollPosition >= headerHeight) {
        setIsSticky(true)
      }else {
        setIsSticky(false)
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll)
    };
  }, []);
  const toggleHandler = () => {
    setIsOpen(!isOpen)
    console.log(isOpen)
  }

 return  (
    <header className={isSticky ? 'sticky show' : 'sticky'}>
      <div className='header-container'>
        <div className="header-start">
          <a src={`/${props.lang}`} >
          <img 
            className='logo' 
            src={logo} 
            alt="company-logo" 
          /></a>
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
          <a  className='btn-stroke-yellow'>sign in</a> 
          <a href={`/${props.lang}/job-application`} className='btn-stroke-white' type="button">Apply for job</a> 
        </div>
      </div>
    </header>
  )
}
export default MyHeader

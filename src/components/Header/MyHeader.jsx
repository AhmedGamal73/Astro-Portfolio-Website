import "../../styles/MyHeader.scss";
import { logo } from "../../icons";
import { useEffect, useState } from "react";
import { DropDown } from "./DropDown";
import { useMediaQuery } from "react-responsive";

const MyHeader = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  let icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <g transform="rotate(180 12 12)">
        <path fill="white" d="m7 10l5 5l5-5z" />
      </g>
    </svg>
  );

  if (openServices) {
    icon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path fill="white" d="m7 10l5 5l5-5z" />
      </svg>
    );
  }
  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = 70;
      const scrollPosition = window.scrollY;

      if (scrollPosition >= headerHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    console.log(isDesktopOrLaptop);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={isSticky ? "sticky show" : "sticky"}>
      <div className="header-container">
        <div className="header-start">
          <a href={`/${props.lang}/`}>
            <img className="logo" src={logo} alt="company-logo" />
          </a>
          <div
            className={`burger-icon ${isOpen ? "open" : ""}`}
            onClick={toggleHandler}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          </div>
        </div>
        <nav className={`header-mid ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href={`/${props.lang}/home`}>Home</a>
            </li>
            {!isDesktopOrLaptop ? (
              <li>
                <a href={`/${props.lang}/services`}>Services</a>
              </li>
            ) : (
              <li
                className="service-item"
                onClick={() => setOpenServices((prev) => !prev)}
                style={{ position: "relative" }}
              >
                <div className="navbar-services">
                  <span>Services</span>
                  {icon}
                </div>
              </li>
            )}

            <li>
              <a href={`/${props.lang}/about`}>About</a>
            </li>
            <li>
              <a href={`/${props.lang}/contact`}>Contact</a>
            </li>
            <li>
              <a href={`/${props.lang}/blog`}>Blog</a>
            </li>
            <li>
              <a href={`/${props.lang}/career`}>Jobs</a>
            </li>
            <li>
              <a href={`/${props.lang}/faq`}>FAQs</a>
            </li>
            {openServices && <DropDown lang={props.lang} />}
          </ul>
        </nav>
        <div className={`header-end ${isOpen ? "open" : ""}`}>
          <a href={`/${props.lang}/cpanel-login`} className="btn-stroke-yellow">
            Log in
          </a>
          <a
            target="_blank"
            href={`/${props.lang}/job-application`}
            className="btn-stroke-white"
            type="button"
          >
            Apply for job
          </a>
        </div>
      </div>
    </header>
  );
};
export default MyHeader;

import "../../styles/MyHeader.scss";
import { logo } from "../../icons";
import { useState } from "react";
import { DropDown } from "./DropDown";
import { useMediaQuery } from "react-responsive";

const MyHeader = (props) => {
  const [isOpen, setIsOpen] = useState(false);
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

  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
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

            <li>
              <a href={`/${props.lang}/services`}>Services</a>
            </li>

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
          </ul>
        </nav>
        <div className={`header-end ${isOpen ? "open" : ""}`}>
          <a
            href={`/${props.lang}/job-application`}
            className="btn-stroke-yellow"
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

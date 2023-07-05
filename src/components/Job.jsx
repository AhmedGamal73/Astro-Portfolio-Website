import React from "react";
import "../styles/Jobs.scss";

export const Job = () => {
  return (
    <div className="job-cont">
      <div className="first">
        <h2>Product Designer</h2>
        <h3>Apply</h3>
      </div>
      <div className="job-desc">
        <p>We,re looking for a mid-level product designer to join our team.</p>
      </div>
      <div className="last">
        <div className="job-statue">
          <div className="statue 1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="200"
              viewBox="0 0 24 24"
            >
              <path
                fill="#152040"
                d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Z"
              />
            </svg>{" "}
            <p>1OO% remote</p>
          </div>
          <div className="statue 2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="200"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#152040"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0m9 0h3.5M12 7v5"
              />
            </svg>
            <p>Full-time</p>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useLayoutEffect } from "react";
import "../../styles/DropDown.scss";

export const DropDown = () => {
  return (
    <div className="dropdown-cont">
      <ul>
        <li>
          <a href="/en/services" style={{ textDecoration: "none" }}>
            All Services
          </a>
        </li>
        <li>
          <a href="/en/services/# " style={{ textDecoration: "none" }}>
            Accounting
          </a>
        </li>
        <li>
          <a style={{ textDecoration: "none" }} href="/en/services/bookkeeping">
            Bookeeping
          </a>
        </li>
        <li>
          <a style={{ textDecoration: "none" }} href="/en/services/audit">
            Audit
          </a>
        </li>
        <li>
          <a style={{ textDecoration: "none" }} href="/en/services/taxes">
            Taxes
          </a>
        </li>
        <li>
          <a style={{ textDecoration: "none" }} href="/en/services">
            Programming
          </a>
        </li>
        <li>
          <a style={{ textDecoration: "none" }} href="/en/services/jobs">
            Career
          </a>
        </li>
      </ul>
    </div>
  );
};

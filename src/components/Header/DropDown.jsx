import React, { useLayoutEffect } from "react";
import "../../styles/DropDown.scss";

export const DropDown = ({ lang }) => {
  return (
    <div className="dropdown-cont">
      <ul>
        <li>
          <a href={`/${lang}/services`} style={{ textDecoration: "none" }}>
            All Services
          </a>
        </li>
        <li>
          <a
            style={{ textDecoration: "none" }}
            href={`/${lang}/services/taxes`}
          >
            Taxes
          </a>
        </li>
        <li>
          <a
            style={{ textDecoration: "none" }}
            href={`/${lang}/services/accounting`}
          >
            Accounting
          </a>
        </li>

        <li>
          <a
            style={{ textDecoration: "none" }}
            href={`/${lang}/services#our-programes`}
          >
            Programming
          </a>
        </li>
        <li>
          <a style={{ textDecoration: "none" }} href={`/${lang}/career`}>
            Career
          </a>
        </li>
      </ul>
    </div>
  );
};

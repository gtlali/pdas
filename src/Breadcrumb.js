/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function Breadcrumb() {
  return (
    <div>
      <nav className='breadcrumb has-arrow-separator' aria-label='breadcrumbs'>
        <ul>
          <li>
            <a href='#'>Bulma</a>
          </li>
          <li>
            <a href='#'>Documentation</a>
          </li>
          <li>
            <a href='#'>Components</a>
          </li>
          <li className='is-active'>
            <a href='#' aria-current='page'>
              Breadcrumb
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

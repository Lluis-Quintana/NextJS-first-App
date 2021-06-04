/* eslint-disable react/jsx-filename-extension */
import React from 'react';

export default function HomePage() {
  return (
    <>
      <nav className="nav-top">
        <h2>INICIO</h2>
      </nav>
      <nav className="nav-bottom" />
      <style jsx>
        {`
        nav{
          position:fixed;
          width:100vw;
          height:3rem;
          background-color: #f2f2f2;
          display: flex;
          align-items:center;
        }
        .nav-top{
          top:0;
          border-bottom:1px solid #c1c0c0
        }
        .nav-bottom{
          bottom:0;
          border-top:1px solid #c1c0c0
        }
        h2{
          font-size:1.2rem;
          font-weight:800;
        }
        `}
      </style>
    </>
  );
}

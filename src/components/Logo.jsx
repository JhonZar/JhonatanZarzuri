import React from 'react';
import './Logo.css'

const Logo = () => (
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 400 400"
    xmlSpace="preserve"
    className="logo-svg"
    aria-labelledby="logoTitle logoDesc"
    role="img"
  >
    <title id="logoTitle">JZdev Logo</title>
    <desc id="logoDesc">Modern and stylish logo for JZdev</desc>
    <g>
      <circle cx="200" cy="200" r="180" stroke="white" strokeWidth="10" fill="none"/>
      <path
        d="M 120 140 L 280 140 Q 260 180 220 220 L 180 260 Q 220 260 240 280 L 240 280 Q 260 300 220 320 L 180 320"
        stroke="white"
        strokeWidth="20"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M 180 140 L 220 180 Q 180 200 140 220 L 120 240"
        stroke="white"
        strokeWidth="20"
        fill="none"
        strokeLinecap="round"
      />
    </g>
  </svg>
);

export default Logo;

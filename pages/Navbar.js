import React, { useEffect, useRef, useState } from 'react'

export default function Navbar() {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
    if(ref.current){
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    }
  }, []);
  return (
    <div className={`sticky-wrapper${isSticky ? ' sticky' : ''}`} ref={ref}>
      <ul className="navbar sticky-inner">
        <li className="navLinks">Link 1</li>
        <li className="navLinks">Link 2</li>
        <li className="navLinks">Link 3</li>
        <li className="navLinks">Link 4</li>
      </ul>
    </div>
  )
}

import "./dropdown.scss";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "../link/link";

const Dropdown = ({ label, dopdownItems, className = "", labelClassName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const handleClick = useCallback ((e) => {
    // console.log(e.target)
    // console.log(ref.current)
    // console.log(ref.current.contains(e.target))
    // console.log(isOpen)
    if (!ref?.current?.contains(e.target) && isOpen) {
      setIsOpen(false)
    }
  }, [ref, isOpen]);

  useEffect(() => {
    window.addEventListener('click', handleClick, false)
    return () => {
      window.removeEventListener('click', handleClick)
    }
  },[handleClick]);

  return (
    <div ref={ref} className={`dropdown ${className} ${isOpen ? "open" : "close"}`}>
      <div
        className={`label ${labelClassName}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
      </div>
      <ul className="dropdown-items">
        {dopdownItems.map((el, i) => (
          <li className="nav-item" key={i}>
            <Link className="nav-link" {...el}>
              {el.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;

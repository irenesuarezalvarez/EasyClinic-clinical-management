import React, { useRef, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../utils/AuthContext";

function useOutsideListener(ref) {
    const contextAuth = useContext(AuthContext)
    const { setSidebar } = contextAuth;

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setSidebar(false)
      }
    }
   
    document.addEventListener("mousedown", handleClickOutside); // Bind the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);  // Unbind the event listener on clean up
    };
  }, [ref]);
}

//Component
function OutsideListener({children}) {
  const wrapperRef = useRef(null);
  useOutsideListener(wrapperRef);

  return <div ref={wrapperRef}>
    {children}
  </div>;
}

OutsideListener.propTypes = {
  children: PropTypes.element.isRequired
};

export default OutsideListener;

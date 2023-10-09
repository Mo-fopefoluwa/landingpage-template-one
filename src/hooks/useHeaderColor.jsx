import React, { useEffect, useState } from "react";

const useHeaderColor = () => {
  const [headerColor, setHeaderColor] = useState(false);
  //to handle shadow of header
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setHeaderColor("#ffffffb7");
      } else {
        setHeaderColor("#fff0");
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return headerColor;
};

export default useHeaderColor;

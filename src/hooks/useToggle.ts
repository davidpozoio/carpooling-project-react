import { useState } from "react";

const useToggle = (initialValue = true) => {
  const [toggle, setToggle] = useState(initialValue);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const setTrue = () => {
    setToggle(true);
  };

  const setFalse = () => {
    setToggle(false);
  };

  return { toggle, setFalse, setTrue, handleToggle };
};

export default useToggle;

import React, { useRef, Fragment } from "react";
import { Input } from "antd";
import "antd/lib/input/style/css";

const App = () => {
  const InputtRef = useRef();
  return (
    <Input
      ref={InputtRef}
      onMouseEnter={() => {
        InputtRef.current.input.classList.add("asdj");
      }}
    />
  );
};

export default App;

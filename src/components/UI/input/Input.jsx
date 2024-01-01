import React from "react";
import styled from "styled-components";

const CustomInput = styled.input`
  color: skyblue;
  padding: ${(padding) => padding || "10px"};
  border: none;
  outline: none;
  background: #f3f5f9;
  border-radius: 12px;
  box-shadow: 3px 2px 3px #fff;
  border: 3px solid skyblue;
`;

const Input = React.forwardRef((props, ref) => {
  return <CustomInput ref={ref} type="text" {...props} />;
});

export default Input;

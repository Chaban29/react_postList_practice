import React from "react";
import styled from "styled-components";

const CreatePostButton = styled.button`
  background: skyblue;
  padding: ${(props) => props.padding || "15px"};
  font-weight: 600;
  color: #fff;
  border: none;
  border-radius: 15px;
  cursor: pointer;
`;

const Button = ({ children, ...props }) => {
  return <CreatePostButton {...props}>{props.name}</CreatePostButton>;
};

export default Button;

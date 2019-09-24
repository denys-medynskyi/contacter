import React from "react";
import styled from "styled-components";

const ErrorStyled = styled.p`
  color: red;
`;

const Error = ({error}) => {
  if (!error || error === "") return null;

  return <ErrorStyled>{error}</ErrorStyled>;
};

export default Error;

import styled from "styled-components";

export const NextButton = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.basic.accentBackground};
  bottom: 0;
  right: 0;
  width: 180px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
  transition: 0.3s;
  user-select: none;

  &:hover {
    background-color: ${(props) => props.theme.basic.hoverAdditional};
  }

  &:active {
    border: none;
    outline: 0;
    background-color: ${(props) => props.theme.basic.hoverMain};
  }
`;

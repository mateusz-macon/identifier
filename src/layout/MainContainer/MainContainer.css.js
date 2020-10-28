import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.basic.mainColor};
  height: calc(500vh - 4*5vh)
  width: Calc(100%-5vh);
`;

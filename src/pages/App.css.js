import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.basic.mainBackgroundColor};
  height: calc(500vh - 4 * 5vh);
  overflow: hidden;
`;

import styled from "styled-components";
import mySelfImage from "../../images/iD-MYSELF-LOGO.jpg";

export const TestContainer = styled.div`
  background-color: ${(props) => props.theme.light.main};
  height: 500vh;

  background: url("${mySelfImage}");
`;

import styled from "styled-components";
import mySelfImage from "../../images/iD-MYSELF-LOGO.jpg";
import HoyaLogo from "../../images/logo.png";

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.basic.mainColor};
  height: 500vh;
`;

export const HorizontalNavContainer = styled.div`
  position: fixed;
  background-color: #428cac;
  top: 0;
  left: 0;
  width: 100%;
  height: 5vh;
  min-height: 40px;
  opacity: 100%;
  display: flex;
`;

export const VerticalNavContainer = styled.div`
  position: fixed;
  background-color: #428cac;
  top: 5vh;
  left: 0;
  height: 95vh;
  width: 5vh;
  min-width: 40px;
  opacity: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  div {
    background-color: blue;
    cursor: pointer;
    min-height: 50px;
    &:hover {
      background-color: #6f6259;
    }
  }
`;

export const MainContainer = styled.div`
  padding-top: 5vh;
  padding-left: 5vh;
`;
export const Logo = styled.div`
  height: 5vh;
  width: 10%;
  min-width: 130px;
  min-height: 40px;
  background: url("${HoyaLogo}");
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1;
`;

export const ButtonsContainer = styled.div`
  top: 0;
  right: 0;
  height: 100%;
  width: 90%;
  display: flex;
  justify-content: flex-end;

  button {
    text-transform: uppercase;
    height: 100%;
    border: none;
    background-color: transparent;
    color: white;
    font-weight: bold;
    padding: 0px 25px;

    &:hover {
      background-color: #988b8d;
    }

    &:active {
      border: none;
      outline: 0;
      background-color: #6f6259;
    }
    &:focus {
      outline: none;
      box-shadow: none;
    }
  }
`;
// export const EmptyContainer = styled.div`
//   top: 0;
//   right: 0;
//   height: 100%;
//   width: 30%;
// `;

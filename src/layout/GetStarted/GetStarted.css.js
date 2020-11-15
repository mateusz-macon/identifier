import styled from "styled-components";
import myselfImage from "../../images/iD-MYSELF-LOGO.jpg";
import mystyleImage from "../../images/iD-MyStyle-LOGO.jpg";
import workstyleImage from "../../images/iD-Workstyle-LOGO.jpg";

export const Container = styled.div`
  margin: 0;
  position: relative;
  top: 5vh;
  left: 5vh;
  width: calc(100% - 5vh);
  height: 95vh;
  color: ${(props) => props.theme.basic.textPrimary};
  background-color: transparent;
`;

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

export const Wrapper = styled.div`
  margin: 0;
  display: block;
  position: relative;
  top: 10%;
  left: 10%;
  width: 80%;
  height: 80%;
  background-color: transparent;

  h1 {
    margin: 0;
    padding: 50px 0;
    font-size: 4em;
    text-align: center;
    font-weight: normal;
  }
  p {
    font-size: 24px;
    padding: 10px 0;
  }
  input {
    border: 1px solid black;
    margin: 20px 0;
    height: 40px;
    width: 200px;
    font-size: 16px;

    &::placeholder {
      color: grey;
      opacity: 0.7;
      font-size: 12px;
    }
    &:focus {
      outline-style: solid;
      box-shadow: none;
    }
  }
  div.flexcontainer {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 20px 0 0 0;

    div {
      background-image: url(${myselfImage});
      width: 300px;
      height: 180px;
      background-position: center;
      background-size: cover;
      cursor: pointer;
      transition: 0.3s;
      opacity: 0.6;
      &:hover {
        opacity: 1;
      }
    }
    div + div {
      background-image: url(${mystyleImage});
      opacity: 0.5;
    }
    div + div + div {
      background-image: url(${workstyleImage});
    }
  }
`;

// &:after {
//   content: " ";
//   width: 300px;
//   height: 180px;
//   z-index: 0;
//   background-color: rgba(0, 0, 0, 0.3);
//   display: none;
// }
// &:hover:after {
//   display: block;
// }

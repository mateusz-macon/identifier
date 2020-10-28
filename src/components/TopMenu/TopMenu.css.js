import styled from "styled-components";
import mySelfImage from "../../images/iD-MyStyle-LOGO.jpg";

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
  z-index: 1;
`;
export const ButtonsContainer = styled.div`
  top: 0;
  right: 0;
  height: 100%;
  width: 90%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  line-height: 5vh;

  div {
    text-transform: uppercase;
    height: 100%;
    border: none;
    background-color: transparent;
    color: white;
    user-select: none;
    font-weight: bold;
    cursor: pointer;
    padding: 0px 25px;
    transition: 0.3s;
    // line-height: 5vh;

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

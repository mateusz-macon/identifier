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
`;
export const ButtonsContainer = styled.div`
  top: 0;
  right: 0;
  height: 100%;
  width: 90%;
  display: flex;
  justify-content: flex-end;
  vertical-align: middle;
  align-items: center;
  justify-content: center;

  div {
    text-transform: uppercase;
    height: 100%;
    border: none;
    background-color: transparent;
    color: white;
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

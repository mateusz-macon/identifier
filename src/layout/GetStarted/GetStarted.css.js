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

export const Wrapper = styled.div`
  margin: 0;
  display: block;
  position: relative;
  top: 10%;
  left: 15%;
  width: 70%;
  height: 80%;
  background-color: transparent;

  @media (max-width: 1000px) {
    top: 10%;
    left: 5%;
    width: 90%;
    height: 80%;
  }

  h1 {
    margin: 0;

    text-align: center;
    font-weight: normal;
  }
  p {
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
      border: 1px solid black;
      box-shadow: none;
    }
  }
  div.flexContainer {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: 20px 0 0 0;
    box-sizing: border-box;
    padding: 10px;
    border: 2px solid transparent;

    @keyframes border-pulsate {
      0% {
        border-color: red;
      }
      40% {
        border-color: transparent;
      }
      60% {
        border-color: transparent;
      }

      100% {
        border-color: red;
      }
    }

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

      @media (max-width: 1024px) {
        width: 200px;
        height: 120px;
      }
    }
    div + div {
      background-image: url(${mystyleImage});
      opacity: 0.5;

      @media (max-width: 1024px) {
        width: 200px;
        height: 120px;
      }
    }
    div + div + div {
      background-image: url(${workstyleImage});

      @media (max-width: 1024px) {
        width: 200px;
        height: 120px;
      }
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

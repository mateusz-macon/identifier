import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  top: 5vh;
  left: 5vh;
  width: calc(100% - 5vh);
  height: 95vh;

  background-color: transparent;

  -webkit-box-shadow: inset 0px 0px 8px 1px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: inset 0px 0px 8px 1px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0px 0px 8px 1px rgba(0, 0, 0, 0.3);
`;

export const Wrapper = styled.div`
  margin: 0;
  display: block;
  position: relative;
  top: 5%;
  left: 15%;
  width: 70%;
  height: 80%;
  background-color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LeftColumn = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      flex-direction: row;

      div {
        width: 40px;
      }
      div.Description {
        width: 70px;
        border: 1px solid transparent;
        margin: 0 10px;
        justify-content: center;
        border: 1px solid transparent;
        padding: 0;
        box-sizing: border-box;
      }

      input {
        width: 70px;
        height: 24px;
        margin: 0 10px;
        box-sizing:border-box;
        padding: 0;
        border: 1px solid black;
        font-size: 16px;
        &:focus {
          outline-style: solid;
          box-shadow: none;
        }
    }
  }
`;

export const RightColumn = styled.div`
flex-grow: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      flex-direction: row;

      div {
        width: 40px;
      }
      div.Description {
        width: 70px;
        border: 1px solid transparent;
        margin: 0 10px;
        background-color: blue;
        border: 1px solid transparent;
        padding: 0;
        box-sizing: border-box;
        justify-content: center;
      }

      input {
        width: 70px;
        height: 24px;
        margin: 0 10px;
        box-sizing:border-box;
        padding: 0;
        border: 1px solid black;
        font-size: 16px;
        &:focus {
          outline-style: solid;
          box-shadow: none;
        }
    }
  }
`;

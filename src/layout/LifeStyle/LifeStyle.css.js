import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  top: 5vh;
  left: 5vh;
  width: calc(100% - 5vh);
  height: 95vh;

  background-color: transparent;

  h1 {
    margin: 0;
    padding: 0px 0;
    font-size: 4em;
    text-align: center;
    font-weight: normal;
  }
`;

export const CircleButton = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background-color: ${(props) => props.theme.basic.textPrimary};
  color: ${(props) => props.theme.basic.mainBackgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  margin: 0 10px;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.basic.hoverAdditional};
  }
`;

export const Wrapper = styled.div`
  margin: 0;
  display: block;
  position: relative;
  top: 5%;
  left: 15%;
  width: 70%;
  height: 80%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  }
`;

export const FirstContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  align-items: center;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: 5px solid transparent;

    p {
      padding-right: 30px;
      line-height: 100px;
    }
  }
  div + div {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: 5px solid transparent;

    div {
      width: 100px;
      height: 100px;
      margin: 0 20px;
      align-items: center;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      &:hover {
        background-color: ${(props) => props.theme.basic.hoverAdditional};
      }
      p {
        font-size: 70px;
        line-height: 70px;
        margin: 0;
        padding: 0;
      }
      p + p {
        font-size: 16px;
        line-height: 16px;
      }
    }
  }
`;
export const SecondContainer = styled.div`
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border: 5px solid transparent;
  div {
    margin-right: 30px;
  }

  div + div {
    display: flex;
    justify-content: center;
    align-items: center; //3 above make good centration of objects (ver and hor)
    height: 60px;
    min-width: 140px;
    background-color: red;
    margin: 0 10px;
    text-align: center;
    flex-grow: 1;
    background-color: ${(props) => props.theme.basic.textPrimary};
    color: ${(props) => props.theme.basic.mainBackgroundColor};
    font-size: 24px;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme.basic.hoverAdditional};
    }
  }
`;
export const ThirdContainer = styled.div`
  display: flex;
  height: 100px;
  align-items: center;
  box-sizing: border-box;
  border: 5px solid transparent;

  div {
    margin-right: 30px;
  }

  div + div {
    display: flex;
    justify-content: center;
    align-items: center; //3 above make good centration of objects (ver and hor)
    min-width: 140px;
    max-width: 200px;
    height: 100px;
    background-color: red;
    margin: 0 10px;
    text-align: center;
    flex-grow: 1;
    color: ${(props) => props.theme.basic.mainBackgroundColor};
    font-size: 24px;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme.basic.hoverAdditional};
    }
  }
`;
export const FourthContainer = styled.div`
  display: flex;
  height: 100px;
  align-items: center;
  box-sizing: border-box;
  border: 5px solid transparent;
  div {
    margin-right: 30px;
  }

  div + div {
    display: flex;
    justify-content: center;
    align-items: center; //3 above make good centration of objects (ver and hor)
    min-width: 140px;
    max-width: 200px;
    height: 100px;
    background-color: blue;
    margin: 0 10px;
    text-align: center;
    flex-grow: 1;
    color: ${(props) => props.theme.basic.mainBackgroundColor};
    font-size: 24px;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme.basic.hoverAdditional};
    }
  }
`;
export const FifthContainer = styled.div`
  display: flex;
  height: 100px;
  align-items: center;
  box-sizing: border-box;
  border: 5px solid transparent;
  div {
    margin-right: 30px;
  }

  div + div {
    display: flex;
    justify-content: center;
    align-items: center; //3 above make good centration of objects (ver and hor)
    height: 60px;
    min-width: 140px;
    max-width: 240px;
    background-color: red;
    margin: 0 10px;
    text-align: center;
    flex-grow: 1;
    background-color: ${(props) => props.theme.basic.textPrimary};
    color: ${(props) => props.theme.basic.mainBackgroundColor};
    font-size: 24px;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme.basic.hoverAdditional};
    }
  }
`;
export const SixthContainer = styled.div`
  display: flex;
  height: 100px;
  align-items: center;
  box-sizing: border-box;
  border: 5px solid transparent;
  div {
    margin-right: 30px;
  }

  div + div {
    display: flex;
    justify-content: center;
    align-items: center; //3 above make good centration of objects (ver and hor)
    height: 100px;
    min-width: 140px;
    background-color: green;
    margin: 0 10px;
    text-align: center;
    flex-grow: 1;
    color: ${(props) => props.theme.basic.mainBackgroundColor};
    font-size: 24px;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme.basic.hoverAdditional};
    }
  }
`;

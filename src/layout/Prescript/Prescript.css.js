import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  top: 5vh;
  left: 5vh;
  width: calc(100% - 5vh);
  height: 95vh;
  background-color: transparent;
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
  flex-direction: row;

  @media (max-width: 1024px) {
    top: 10%;
    left: 5%;
    width: 90%;
    height: 80%;
  }

  @media (max-width: 1000px) {
    top: 10%;
    left: 0%;
    width: 90%;
    height: 80%;
  }

  }
`;

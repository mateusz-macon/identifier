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
  background-color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

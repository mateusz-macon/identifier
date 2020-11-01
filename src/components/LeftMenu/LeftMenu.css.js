import styled from "styled-components";

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
  z-index: 1;

  div {
    background-color: transparent;
    color: white;
    user-select: none;
    cursor: pointer;
    min-height: 50px;
    transition: 0.3s;
    font-size: 8px;
    display: block;
    text-align: center;
    &:hover {
      background-color: #6f6259;

      transform: scale(1.5) translatex(15%);
    }
  }
`;

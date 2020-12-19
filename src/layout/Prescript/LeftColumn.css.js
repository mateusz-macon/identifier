import styled from "styled-components";

export const LeftColumn = styled.div`
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  .Prescription {
    display: flex;
    flex-direction: row;

    .R {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 30px;
      .REye {
        display: flex;
        flex-direction: column;
        div {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding: 1px 0;
          line-height: 24px;
          div {
            padding: 0 5px;
          }

          input {
            width: 60px;
            height: 24px;
            border: 1px solid black;
            font-size: 16px;
            &:focus {
              outline-style: solid;
              box-shadow: none;
            }
          }
        }
      }
    }
    .equals {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      div {
        width: 30px;
        height: 30px;
        background-color: ${(props) => props.theme.basic.textPrimary};
        color: ${(props) => props.theme.basic.mainBackgroundColor};
        border-radius: 15px;
        line-height: 30px;
        text-align: center;
        cursor: pointer;
        &:hover {
          background-color: ${(props) => props.theme.basic.hoverAdditional};
        }
      }
    }

    .L {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 30px;
      .LEye {
        display: flex;
        flex-direction: column;
        div {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding: 1px 0;
          line-height: 24px;
          div {
            padding: 0 5px;
          }

          input {
            width: 60px;
            height: 24px;
            border: 1px solid black;
            font-size: 16px;
            &:focus {
              outline-style: solid;
              box-shadow: none;
            }
          }
        }
      }
    }
  }
  p.add {
    padding: 50px 0 20px 0;
  }

  .AdditionMeasurement {
    display: flex;
    flex-direction: column;

    .MuiRadio-colorPrimary {
      color: white;
    }
  }

  .Distance {
    input {
      -webkit-appearance: none; /* Override default CSS styles */
      appearance: none;
      height: 25px; /* Specified height */
      outline: none; /* Remove outline */
      opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
      -webkit-transition: 0.2s; /* 0.2 seconds transition on hover */
      transition: opacity 0.2s;
      width: 300px;
      height: 10px;
      background-color: ${(props) => props.theme.basic.hoverAdditional};
      &::-webkit-slider-thumb {
        -webkit-appearance: none; /* Override default look */
        appearance: none;
        width: 40px; /* Set a specific slider handle width */
        height: 40px; /* Slider handle height */
        background-color: ${(props) => props.theme.basic.textPrimary};
        cursor: pointer; /* Cursor on hover */
        border-radius: 50%;
      }

      @media (max-width: 1024px) {
        width: 250px;
      }
    }
    p {
      text-align: center;
    }
  }
`;

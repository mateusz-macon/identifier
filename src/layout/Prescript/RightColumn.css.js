import styled from "styled-components";

export const RightColumn = styled.div`
  background-color: transparent;
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  align-items: center;

  .PreviousLenses {
    margin: 20px 0;
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      flex-direction: row;
      line-height: 24px;
      background-color: transparent;
      margin: 2px 0;
      justify-content: space-between;

      select {
        width: 200px;
        height: 24px;
        margin: 5px 30px;
      }
    }
  }

  .Satisfaction {
    margin: 0 0 30px 0;
    border: 2px solid transparent;
    .Star {
      color: ${(props) => props.theme.basic.textPrimary};
      cursor: pointer;
      font-size: 30px;
      margin: 10px 5px;
    }
    .satisfactionText {
      text-align: center;
    }
  }

  .Addition {
    display: flex;
    flex-direction: column;
    .PrevAddition {
      display: flex;
      flex-direction: row;
      p {
        padding-right: 30px;
      }
    }
    .Inputs {
      display: flex;
      flex-direction: column;
      margin: 30px 0px;
      visibility: visible;

      div.InputsLabels {
        display: flex;
        flex-direction: row;
        div.Invisible {
          visibility: hidden;
        }
        div + div {
          width: 60px;
          margin: 0px 20px;
          border: 1px solid transparent;
          text-align: center;
        }
      }

      div.InputsFields {
        display: flex;
        flex-direction: row;
        div {
          line-height: 24px;
        }
        input {
          width: 60px;
          height: 24px;
          border: 1px solid black;
          font-size: 16px;
          margin: 0px 20px;
          padding: 0;
          &:focus {
            outline-style: solid;
            box-shadow: none;
          }
        }
      }
    }
  }
`;

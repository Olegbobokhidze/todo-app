import React from "react";
import styled from "styled-components";
import Check from "../svgs/Check";
const InputHolder = styled.div`
  width: 327px;
  height: 48px;
  background-color: ${(props) => props.theme.backBoxColor};
  box-shadow: ${(props) => props.theme.boxShadow};
  display: flex;
  justify-content: left;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 16px;
  @media screen and (min-width: 1440px) {
    width: 540px;
    height: 64px;
  }
`;
const InputBox = styled.input`
  width: 104px;
  height: 12px;
  background-color: ${(props) => props.theme.backBoxColor};
  border: none;
  font-size: 12px;
  font-weight: 400;
  color: ${(props) => props.theme.fontColor};
  ::placeholder {
    color: #979797;
  }
  &:focus {
    border: 0;
    outline: none;
  }
  @media screen and (min-width: 1440px) {
    width: 170px;
    height: 18px;
    font-size: 18px;
  }
`;
const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: solid 1px #979797;
  margin-left: 20px;
  margin-right: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => {
    if (props.completed === true) {
      return "linear-gradient(#55DDFF, #C058F3)";
    } else if (props.completed === false) {
      return props.theme.backBoxColor;
    }
  }};
  &:hover {
    border: solid #c058f3 1px;
  }
`;
export default function Input({
  text,
  handleSubmit,
  setText,
  completed,
  setCompleted,
}) {
  return (
    <>
      <InputHolder>
        <Circle
          completed={completed}
          onClick={() => setCompleted((prevMode) => !prevMode)}
        >
          {completed ? <Check /> : null}
        </Circle>
        <InputBox
          type="text"
          placeholder="Create a new todo..."
          value={text}
          onKeyDown={handleSubmit}
          onChange={(e) => setText(e.target.value)}
        />
      </InputHolder>
    </>
  );
}

import React from "react";
import styled from "styled-components";
import Check from "../svgs/Check";
import Cross from "../svgs/Cross";
export const BoxShadow = styled.div`
  box-shadow: ${(props) => props.theme.boxShadow};
`;
export const TodoContainer = styled.div`
  width: 327px;
  height: 48px;
  background-color: ${(props) => props.theme.backBoxColor};
  display: flex;
  justify-content: left;
  align-items: center;
  border-bottom: ${(props) => props.theme.bottom};
  position: relative;
  @media screen and (min-width: 1440px) {
    width: 540px;
    height: 64px;
  }
`;
export const TodoListBox = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: ${(props) => {
    if (props.todo.completed) {
      return props.theme.checkedColor;
    } else {
      return props.theme.fontColor;
    }
  }};
  text-decoration: ${(props) => {
    if (props.todo.completed) {
      return "line-through";
    } else {
      return;
    }
  }};
`;
export const TodoFooterMobile = styled.div`
  width: 327px;
  height: 48px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme.backBoxColor};
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;
export const Paragraph = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: ${(props) => props.theme.footerColorP};
  cursor: pointer;
  font-weight: 700;
  &:hover {
    color: ${(props) => props.theme.footerHoverP};
  }
  @media screen and (min-width: 1440px) {
    margin-right: 10px;
  }
`;
export const Paragraph1 = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: ${(props) =>
    props.filter === "all" ? "#3A7CFD" : props.theme.footerColorP};
  cursor: pointer;
  font-weight: 700;
  &:hover {
    color: ${(props) =>
      props.filter === "all" ? "#3A7CFD" : props.theme.footerHoverP};
  }
  @media screen and (min-width: 1440px) {
    margin-right: 10px;
  }
`;
export const Paragraph2 = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: ${(props) =>
    props.filter === "active" ? "#3A7CFD" : props.theme.footerColorP};
  cursor: pointer;
  font-weight: 700;
  &:hover {
    color: ${(props) =>
      props.filter === "active" ? "#3A7CFD" : props.theme.footerHoverP};
  }
  @media screen and (min-width: 1440px) {
    margin-right: 10px;
  }
`;
export const Paragraph3 = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: ${(props) =>
    props.filter === "completed" ? "#3A7CFD" : props.theme.footerColorP};
  cursor: pointer;
  font-weight: 700;
  &:hover {
    color: ${(props) =>
      props.filter === "completed" ? "#3A7CFD" : props.theme.footerHoverP};
  }
  @media screen and (min-width: 1440px) {
    margin-right: 10px;
  }
`;
export const ParagraphLength = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: ${(props) => props.theme.footerColorP};
  @media screen and (min-width: 1440px) {
    margin-left: 10px;
  }
`;
export const CrossDiv = styled.div`
  position: absolute;
  top: 15px;
  right: 20px;
  cursor: pointer;
  @media screen and (min-width: 1440px) {
    top: 23px;
  }
`;
export const CheckCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${(props) => {
    if (props.todo.completed) {
      return "linear-gradient(#55DDFF, #C058F3)";
    } else {
      return props.theme.backBoxColor;
    }
  }};
  border: solid 1px #979797;
  margin-left: 20px;
  margin-right: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    border: solid #c058f3 1px;
  }
`;
export const FooterSections = styled.div`
  width: 327px;
  height: 48px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme.backBoxColor};
  @media screen and (min-width: 1440px) {
  }
`;
export const FilterHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`;
export const ParaghraphDesktop = styled.p`
  display: none;
  font-size: 12px;
  font-weight: 400;
  color: ${(props) => props.theme.footerColorP};
  cursor: pointer;
  font-weight: 700;
  &:hover {
    color: ${(props) => props.theme.footerHoverP};
  }
`;
export const FooterSectionsMobile = styled.div`
  display: block;
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;
export const FooterSectionsDesktop = styled.div`
  display: none;
  background-color: ${(props) => props.theme.backBoxColor};
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 540px;
    height: 64px;
  }
`;
export default function Todo({ todos, deleteTodo, checked, filter }) {
  return (
    <>
      {filter === "all" &&
        todos.map((todo) => (
          <TodoContainer key={todo.id}>
            <CheckCircle todo={todo} onClick={() => checked(todo.id)}>
              {todo.completed ? <Check /> : ""}
            </CheckCircle>
            <TodoListBox todo={todo} key={todo.id}>
              {todo.text}
            </TodoListBox>
            <CrossDiv onClick={() => deleteTodo(todo.id)}>
              <Cross />
            </CrossDiv>
          </TodoContainer>
        ))}
    </>
  );
}
export function Completed({ todos, checked, deleteTodo, filter }) {
  return (
    <>
      {filter === "completed" &&
        todos.map(
          (todo) =>
            todo.completed && (
              <TodoContainer key={todo.id}>
                <CheckCircle todo={todo} onClick={() => checked(todo.id)}>
                  {todo.completed ? <Check /> : ""}
                </CheckCircle>
                <TodoListBox todo={todo} key={todo.id}>
                  {todo.text}
                </TodoListBox>
                <CrossDiv onClick={() => deleteTodo(todo.id)}>
                  <Cross />
                </CrossDiv>
              </TodoContainer>
            )
        )}
    </>
  );
}
export function Active({ todos, checked, deleteTodo, filter }) {
  return (
    <>
      {filter === "active" &&
        todos.map(
          (todo) =>
            !todo.completed && (
              <TodoContainer key={todo.id}>
                <CheckCircle todo={todo} onClick={() => checked(todo.id)}>
                  {todo.completed ? <Check /> : ""}
                </CheckCircle>
                <TodoListBox todo={todo} key={todo.id}>
                  {todo.text}
                </TodoListBox>
                <CrossDiv onClick={() => deleteTodo(todo.id)}>
                  <Cross />
                </CrossDiv>
              </TodoContainer>
            )
        )}
    </>
  );
}

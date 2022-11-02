import React, { useEffect, useState } from "react";
import Input from "./Input";
import Todo from "./Todo";
import {
  Completed,
  Active,
  TodoFooterMobile,
  ParagraphLength,
  Paragraph,
  Paragraph1,
  Paragraph2,
  Paragraph3,
  FooterSections,
  BoxShadow,
  FooterSectionsMobile,
  FooterSectionsDesktop,
} from "./Todo";
export default function TodoAndInput() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [completed, setCompleted] = useState(false);
  useEffect(() => {
    setTodos(todos);
  }, [todos]);
  function handleSubmit(e) {
    if (text && e.key === "Enter" && completed === false) {
      setText("");
      setTodos([
        ...todos,
        {
          id: Math.floor(Math.random() * 1000),
          text: text,
          completed: false,
        },
      ]);
    } else if (text && e.key === "Enter" && completed === true) {
      setText("");
      setTodos([
        ...todos,
        {
          id: Math.floor(Math.random() * 1000),
          text: text,
          completed: true,
        },
      ]);
    }
  }
  function deleteTodo(id) {
    const newArray = todos.filter((todo) => todo.id !== id);
    setTodos(newArray);
  }
  function checked(id) {
    const newTodo = todos.map((todo) => {
      if (todo.id === id && todo.completed === false) {
        return {
          ...todo,
          completed: true,
        };
      } else if (todo.id === id && todo.completed === true) {
        return {
          ...todo,
          completed: false,
        };
      }
      return todo;
    });
    setTodos(newTodo);
  }
  const onlyNotActive = todos.filter((todo) => !todo.completed);
  function clearCompleted() {
    setTodos(onlyNotActive);
  }
  const todosLength = todos.filter((todo) => !todo.completed);
  function Length() {
    if (filter === "all") {
      return todos.length;
    } else if (filter === "active") {
      return todosLength.length;
    } else if (filter === "completed") {
      const todoCompleted = todos.filter((todo) => todo.completed);
      return todoCompleted.length;
    }
  }
  return (
    <>
      <Input
        text={text}
        handleSubmit={handleSubmit}
        setText={setText}
        completed={completed}
        setCompleted={setCompleted}
      />
      <BoxShadow>
        {filter === "all" && (
          <Todo
            todos={todos}
            deleteTodo={deleteTodo}
            checked={checked}
            onlyNotActive={onlyNotActive}
            clearCompleted={clearCompleted}
            filter={filter}
            setFilter={setFilter}
          />
        )}
        {filter === "completed" && (
          <Completed
            todos={todos}
            checked={checked}
            deleteTodo={deleteTodo}
            filter={filter}
            clearCompleted={clearCompleted}
            setFilter={setFilter}
          />
        )}
        {filter === "active" && (
          <Active
            todos={todos}
            checked={checked}
            deleteTodo={deleteTodo}
            filter={filter}
            clearCompleted={clearCompleted}
            setFilter={setFilter}
          />
        )}
        <FooterSectionsMobile>
          <TodoFooterMobile>
            <ParagraphLength>{Length()} items left</ParagraphLength>
            <Paragraph onClick={() => clearCompleted()}>
              Clear Completed
            </Paragraph>
          </TodoFooterMobile>
          <FooterSections>
            <Paragraph1 filter={filter} onClick={() => setFilter("all")}>
              All
            </Paragraph1>
            <Paragraph2 filter={filter} onClick={() => setFilter("active")}>
              Active
            </Paragraph2>
            <Paragraph3 filter={filter} onClick={() => setFilter("completed")}>
              Completed
            </Paragraph3>
          </FooterSections>
        </FooterSectionsMobile>
        <FooterSectionsDesktop>
          <ParagraphLength>{Length()} items left</ParagraphLength>
          <FooterSections>
            <Paragraph1 filter={filter} onClick={() => setFilter("all")}>
              All
            </Paragraph1>
            <Paragraph2 filter={filter} onClick={() => setFilter("active")}>
              Active
            </Paragraph2>
            <Paragraph3 filter={filter} onClick={() => setFilter("completed")}>
              Completed
            </Paragraph3>
          </FooterSections>
          <Paragraph onClick={() => clearCompleted()}>
            Clear Completed
          </Paragraph>
        </FooterSectionsDesktop>
      </BoxShadow>
    </>
  );
}

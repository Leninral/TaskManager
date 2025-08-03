import StyleButton from "@/components/StyledButton";
import { COLORS } from "@/constants/ui";
import Header from "@/layout/Header";
import TodoCreator from "@/layout/TodoCreator";
import TodoList from "@/layout/TodoList/TodoList";
import { Todo } from "@/types/todo";
import { useState } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";

const defaultTodo: Todo[] = [
  {
    id: 1,
    title: "buy milk",
    isCompleted: false,
  },
  {
    id: 2,
    title: "do homework",
    isCompleted: false,
  },
  {
    id: 3,
    title: "fitness exercices",
    isCompleted: false,
  },
];

export default function Index() {
  const [todos, setTodos] = useState<Todo[]>(defaultTodo);
  const addTodo = (title: Todo["title"]) => {
    setTodos([...todos, { id: Number(new Date()), title, isCompleted: false }]);
  };
  const onPressDelete = (id: Todo["id"]) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const onCheckTodo = (id: Todo["id"]) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const onPressEdit = (id: Todo["id"], title: Todo["title"]) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, title } : todo)));
  };
  const completedTodos = todos.filter((todo) => todo.isCompleted);
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <Header
        totalTodos={todos.length}
        completedTodos={completedTodos.length}
      />
      <TodoCreator onAddTodo={addTodo} />
      <TodoList
        todos={todos}
        onCheckTodo={onCheckTodo}
        onPressDelete={onPressDelete}
        onPressEdit={onPressEdit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY_BACKGROUND,
  },
});

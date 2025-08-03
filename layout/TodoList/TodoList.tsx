import React from "react";
import { FlatList, Text, View } from "react-native";
import { Todo } from "@/types/todo";
import TodoItem from "../TodoItem";
import StyleButton from "@/components/StyledButton";

type TodoListProps = {
  todos: Todo[];
  onCheckTodo: (id: Todo["id"]) => void;
  onPressDelete: (id: Todo["id"]) => void;
  onPressEdit: (id: Todo["id"], title: Todo["title"]) => void;
};

const TodoList: React.FC<TodoListProps> = ({
  todos,
  onCheckTodo,
  onPressDelete,
  onPressEdit,
}) => {
  return (
    <View>
      <FlatList
        data={todos}
        keyExtractor={(todo) => todo.id.toString()}
        renderItem={({ item }) => (
          <TodoItem
            title={item.title}
            isCompleted={item.isCompleted}
            id={item.id}
            onCheck={onCheckTodo}
            onDelete={onPressDelete}
            onEdit={onPressEdit}
          />
        )}
      />
    </View>
  );
};

export default TodoList;

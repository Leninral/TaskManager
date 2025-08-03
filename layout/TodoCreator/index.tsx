import StyleButton from "@/components/StyledButton";
import StyledTextInput from "@/components/StyledTextInput";
import { COLORS } from "@/constants/ui";
import { Todo } from "@/types/todo";
import React, { useState } from "react";
import { Keyboard, StyleSheet, View } from "react-native";

type TodoCreatorProps = {
  onAddTodo: (title: Todo["title"]) => void;
};

const TodoCreator: React.FC<TodoCreatorProps> = ({ onAddTodo }) => {
  const [text, setText] = useState("");
  const [inputError, setInputError] = useState(false);

  const onPressAdd = () => {
    if (!text) {
      setInputError(true);
      return;
    }
    Keyboard.dismiss();
    onAddTodo(text);
    setText("");
  };
  return (
    <View style={styles.container}>
      <StyledTextInput
        placeholder="Add to ask..."
        value={text}
        onChangeText={setText}
      />
      <StyleButton label="+" onPress={onPressAdd} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    marginVertical: 30,
    paddingHorizontal: 20,
    gap: 15,
  },
});

export default TodoCreator;

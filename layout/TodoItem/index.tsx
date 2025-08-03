import StyleButton from "@/components/StyledButton";
import StyledCheckBox from "@/components/StyledCheckBox";
import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/ui";
import { Todo } from "@/types/todo";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import EditTodoModal from "../Modals/EditTodoModal";

type TodoItemProps = Todo & {
  onCheck: (id: Todo["id"]) => void;
  onDelete: (id: Todo["id"]) => void;
  onEdit: (id: Todo["id"], title: Todo["title"]) => void;
};

const TodoItem: React.FC<TodoItemProps> = ({
  title,
  isCompleted,
  id,
  onCheck,
  onDelete,
  onEdit,
}) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const onPressCheck = () => {
    onCheck(id);
  };
  const onPressDelete = () => {
    onDelete(id);
  };
  return (
    <View style={styles.container}>
      <StyledCheckBox
        checked={isCompleted}
        onCheck={() => {
          onPressCheck();
        }}
      />
      <StyledText
        style={[{ textDecorationLine: isCompleted ? "line-through" : "none" }]}
      >
        {title}
      </StyledText>
      <View style={styles.containerControls}>
        <StyleButton
          label="Edit"
          size="small"
          onPress={() => setIsEditModalOpen(true)}
        />
        <EditTodoModal
          title={title}
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          onUpdate={(title) => onEdit(id, title)}
        />
        <StyleButton
          label="Delete"
          size="small"
          variant="delete"
          onPress={onPressDelete}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    padding: 15,
    marginVertical: 8,
    backgroundColor: COLORS.SECONDARY_BACKGROUND,
  },
  containerControls: {
    flexDirection: "row",
    gap: 5,
  },
});
export default TodoItem;

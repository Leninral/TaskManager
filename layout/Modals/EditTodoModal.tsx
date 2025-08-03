import StyleButton from "@/components/StyledButton";
import StyledModal from "@/components/StyledModal";
import StyledText from "@/components/StyledText";
import StyledTextInput from "@/components/StyledTextInput";
import { COLORS } from "@/constants/ui";
import { Todo } from "@/types/todo";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

type EditTodoModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onUpdate: (title: string) => void;
  title: Todo["title"];
};

const EditTodoModal: React.FC<EditTodoModalProps> = ({
  isOpen,
  onClose,
  onUpdate,
  title,
}) => {
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [inputError, setInputError] = useState(false);
  const onPressSave = () => {
    if (!updatedTitle) {
      setInputError(true);
    }
    onUpdate(updatedTitle);
    onClose();
  };

  useEffect(() => {
    setUpdatedTitle(title);
  }, [isOpen]);

  return (
    <StyledModal isOpen={isOpen} onClose={onClose}>
      <View style={styles.modalContentContainer}>
        <StyledText style={{ fontSize: 32 }}>Edit Todo</StyledText>
        <View style={styles.inputComtainer}>
          <StyledTextInput
            value={updatedTitle}
            onChangeText={setUpdatedTitle}
            placeholder="Edit todo..."
          ></StyledTextInput>
        </View>
        <View style={styles.buttonsContainer}>
          <StyleButton label="Cancel" onPress={onClose} variant="secondary" />
          <StyleButton label="Save" onPress={onPressSave} />
        </View>
      </View>
    </StyledModal>
  );
};

const styles = StyleSheet.create({
  modalContentContainer: {
    gap: 20,
  },
  inputComtainer: {
    minHeight: 60,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 15,
  },
});

export default EditTodoModal;

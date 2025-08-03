import { COLORS } from "@/constants/ui";
import {
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

type StyledModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const StyledModal: React.FC<StyledModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  return (
    <Modal
      visible={isOpen}
      onRequestClose={onClose}
      animationType="fade"
      transparent={true}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalBackground}>
          <TouchableWithoutFeedback onPress={(e) => e.stopPropagation()}>
            <View style={styles.contentContainer}>{children}</View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "center",
    alignContent: "center",
  },
  contentContainer: {
    padding: 20,
    borderRadius: 10,
    width: "90%",
    backgroundColor: COLORS.PRIMARY_BACKGROUND,
  },
});

export default StyledModal;

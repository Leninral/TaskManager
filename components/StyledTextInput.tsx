import { COLORS } from "@/constants/ui";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";

type StyledInputProps = TextInputProps;

const StyledTextInput: React.FC<StyledInputProps> = ({ ...props }) => {
  return (
    <TextInput
      style={[styles.input, props.style]}
      {...props}
      placeholderTextColor={COLORS.PLACE_HOLDER}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    color: COLORS.PRIMARY_TEXT,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.PRIMARY_BORDER,
    flex: 1,
  },
});
export default StyledTextInput;

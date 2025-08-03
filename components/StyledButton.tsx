// onPress
// TouchebleOpacity
// Pressable

import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import StyledText from "./StyledText";
import { COLORS } from "@/constants/ui";

type StyledButtonProps = TouchableOpacityProps & {
  label?: string;
  size?: "default" | "small" | "large";
  variant?: "primary" | "secondary" | "delete";
};

const StyleButton: React.FC<StyledButtonProps> = ({
  label,
  size = "default",
  variant = "primary",
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.base,
        //Sizes
        size === "small" ? styles.small : null,
        //Variants
        variant === "delete" ? styles.delete : null,
        variant === "secondary" ? styles.secondary : null,
      ]}
      {...props}
    >
      {label && <StyledText>{label}</StyledText>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    backgroundColor: COLORS.PRIMARY_ACTIVE_BUTTON,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
  },
  //Sizez
  small: {
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  //Variants
  secondary: {
    backgroundColor: COLORS.SECONDARY_BACKGROUND,
    borderColor: COLORS.PRIMARY_ACTIVE_BUTTON,
  },
  delete: {
    backgroundColor: COLORS.PRIMARY_RED,
  },
});

export default StyleButton;

import { COLORS } from "@/constants/ui";
import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

type StyledCheckBoxProps = {
  checked: boolean;
  onCheck: () => void;
  label?: string;
};

const StyledCheckBox: React.FC<StyledCheckBoxProps> = ({
  checked,
  onCheck,
  label,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onCheck}>
      <View style={[styles.checkbox, checked && styles.checkedBox]}>
        {checked && <Text style={styles.checkmark}>✔</Text>}
      </View>
      {label && <Text style={styles.label}>{label}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: COLORS.PRIMARY_BORDER,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  checkedBox: {
    backgroundColor: COLORS.SUCCESS,
  },
  checkmark: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  label: {
    marginLeft: 8,
    fontSize: 16,
  },
});

export default StyledCheckBox;

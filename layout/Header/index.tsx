import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/ui";
import { StyleSheet, Text, View } from "react-native";

type HeaderProps = {
  totalTodos: number;
  completedTodos: number;
};

const Header: React.FC<HeaderProps> = ({ totalTodos, completedTodos }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headermainContent}>
        <StyledText>Task Manager</StyledText>
        <StyledText>July 22, 2025.</StyledText>
      </View>
      <StyledText>
        Completed {completedTodos}/{totalTodos}
      </StyledText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: COLORS.SECONDARY_BACKGROUND,
    marginBottom: 8,
  },
  headermainContent: {
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
});

export default Header;

import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";

const AppFooter = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        Crafted with ❤️ by <Text style={styles.footerName}>Tuğba Gündoğdu</Text>
      </Text>
      <Text style={styles.footerSubtext}>© 2026 All Rights Reserved</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    paddingVertical: 24,
    paddingHorizontal: 20,
    alignItems: "center",
    backgroundColor: COLORS.card,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    marginTop: 20,
  },
  footerText: {
    fontSize: 14,
    color: COLORS.textLight,
    textAlign: "center",
    marginBottom: 4,
  },
  footerName: {
    fontWeight: "700",
    color: COLORS.primary,
  },
  footerSubtext: {
    fontSize: 12,
    color: COLORS.textLight,
    fontStyle: "italic",
  },
});

export default AppFooter;

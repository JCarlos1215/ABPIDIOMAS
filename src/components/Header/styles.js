import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 1
  },
  icon: {
    height: 20,
    width: 20,
    marginHorizontal: 10
  },
  lives: {
    color: "red",
    fontWeight: "bold",
    fontSize: 18
  },
  closeIcon: {
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 10,
    color: "#bfbfbf"
  }
});

export default styles;
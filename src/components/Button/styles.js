import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0EA3FF",
    height: 50,
    marginVertical: 10,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderBottomWidth: 5,
    borderColor: "#0EA3FF"
  },
  text: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    textDecorationLine: "",
    borderColor: "#fff",
    borderBottomWidth: 1.5
  },
  disabledBtn: {
    backgroundColor: "lightgrey",
    borderColor: "grey"
  }
});

export default styles;
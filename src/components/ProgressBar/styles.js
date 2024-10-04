import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  background: {
    backgroundColor: "lightgrey",
    height: 40,
    borderRadius: 15,
    flex: 1,
  },
  foreground: {
    flex: 1,
    backgroundColor: "#4DFF53",
    borderRadius: 15
  },
  highlight: {
    backgroundColor: "#4DFF53",
    width: "90%",
    height: 5,
    borderRadius: 5,
    marginTop: 5,
    alignSelf: "center"
  }
});

export default styles;
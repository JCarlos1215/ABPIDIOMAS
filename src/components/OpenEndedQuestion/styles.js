import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "flex-start",
    

  },
  row: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    margin: 10,
    
  },
  mascot: {
    width: "30%",
    aspectRatio: 3 / 4,
    marginRight: 10,
    
  },
  sentenceContainer: {
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 10,
    padding: 10,
    marginBottom:40
  },
  sentence: {
    fontSize: 16,
  },
  textInput: {
    alignSelf: "stretch",
    flex: 1,
    backgroundColor: "#ebebeb",
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 20,
    padding: 15,
    fontSize: 16,
    margin:10,
    marginBottom: 150

  }
});

export default styles;
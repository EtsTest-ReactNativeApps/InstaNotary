import { StyleSheet, Dimensions } from "react-native";

const { width: winWidth, height: winHeight } = Dimensions.get("window");

export default StyleSheet.create({
  homeContainer: {
    flex: 1,
    flexDirection: "column",
    padding: 24,
    paddingTop: 48,
    backgroundColor: "#f5f5f5",
  },
  toolbarContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 12,
  },
  label: {
    fontSize: 18,
    marginTop: 18,
    color: "#363637",
  },
  notaryName: {
    fontSize: 18,
    borderWidth: 2,
    borderColor: "#15548b",
    borderRadius: 6,
    padding: 8,
    paddingLeft: 18,
    paddingRight: 18,
    marginVertical: 12,
  },
  notaryDescription: {
    fontSize: 18,
    borderWidth: 2,
    borderColor: "#15548b",
    borderRadius: 6,
    paddingLeft: 18,
    paddingRight: 18,
    marginVertical: 12,
  },
  fileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
    borderWidth: 2,
    borderColor: "#15548b",
    borderRadius: 8,
    padding: 8,
  },
  fileName: {
    fontSize: 15,
  },
  sendVerificationButton: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 36,
    borderRadius: 24,
    padding: 12,
    backgroundColor: "#15548b",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    elevation: 10,
    shadowRadius: 15,
    shadowOffset: { width: 2, height: 2 },
  },
  sendVerificationText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
});

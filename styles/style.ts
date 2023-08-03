import { Platform, StatusBar, StyleSheet } from "react-native";
import { theme } from "./theme";
import { OsTypes } from "../enums/OsEnum";

export const globalStyles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "transparent",
    marginTop: Platform.OS === OsTypes.Android ? StatusBar.currentHeight : 0,
  },
  ModalSafeAreaView: {
    flex: 1,
    backgroundColor: "transparent",
  },
  container_global: {
    backgroundColor: theme.background.primary,
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  avoid_view: {
    flex: 1,
    backgroundColor: "transparent",
  },
  container_global_space: {
    backgroundColor: theme.background.primary,
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    ...Platform.select({
      ios: {
        paddingBottom: 40,
      },
      android: {
        paddingBottom: 40,
      },
    }),
  },
  container_global_space_top: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 80,
  },
  container_default: {
    backgroundColor: theme.colors.white,
    flex: 1,
  },
  text_label: {
    fontSize: 16,
    fontWeight: "bold",
    color: theme.colors.textDark,
  },
  text_label_2: {
    fontSize: 16,
    fontWeight: "bold",
    color: theme.colors.textDark,
    marginBottom: 12,
  },
  spacer_20: {
    marginTop: 20,
    marginBottom: 20,
  },
  spacer_10: {
    marginTop: 10,
    marginBottom: 10,
  },
  h1: {
    fontSize: 30,
    fontWeight: "bold",
    color: theme.colors.primary,
  },
  h2: {
    fontSize: 26,
    fontWeight: "bold",
    color: theme.colors.primary,
  },
  shadow_box: {
    ...Platform.select({
      ios: {
        borderRadius: 10,
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.84,
        borderColor: "rgba(0, 0, 0, 0.01)",
      },
      android: {
        elevation: 3,
        borderWidth: 0.3,
        borderColor: "rgba(0, 0, 0, 0.01)",
      },
    }),
    backgroundColor: theme.colors.white,
    shadowColor: "rgba(0, 0, 0, 0.5)",
  },
  main_button_text: {
    color: theme.colors.text,
    fontSize: 14,
    fontWeight: "400",
  },
  main_button_text_2: {
    color: theme.colors.text,
    fontSize: 12,
    fontWeight: "400",
  },
  main_button_transparent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    borderRadius: 8,
    padding: 16,
    paddingTop: 10,
    paddingBottom: 10,
  },
  main_button_transparent_2: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    borderRadius: 8,
    padding: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
});

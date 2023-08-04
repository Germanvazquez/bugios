import { StyleSheet, View } from "react-native";
import CustomBackButton from "./BackButton/CustomBackButton";
import { ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import TextCustom from "../Ui/TextCustom";
import { theme } from "../../styles/theme";

interface Props {
  rightComponent: (() => JSX.Element) | null;
  navigation: NativeStackNavigationProp<ParamListBase, string, undefined>;
  title: string;
}

const CustomHeader = ({ rightComponent, navigation, title }: Props) => {
  const onNavigation = () => {
    if (navigation.canGoBack()) navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <CustomBackButton
        color={theme.colors.primary}
        handleClose={onNavigation}
      />
      <TextCustom style={styles.title}>{title}</TextCustom>
      {rightComponent ? (
        rightComponent()
      ) : (
        <View style={styles.right_icon_placeholder} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 15,
    marginBottom: 40,
    backgroundColor: theme.background.white,
  },
  title: {
    color: theme.colors.text_label,
    fontWeight: "bold",
    fontSize: 22,
  },
  right_icon_placeholder: {
    width: 40,
  },
});

export default CustomHeader;

import { MaterialIcons } from "@expo/vector-icons";

interface Props {
  color: string;
  handleClose: () => void;
}

const CustomBackButton = ({ color, handleClose }: Props) => {
  return (
    <MaterialIcons
      name="arrow-back"
      size={40}
      color={color}
      onPress={handleClose}
    />
  );
};

export default CustomBackButton;

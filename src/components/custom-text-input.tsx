import { ComponentProps } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  StyleProp,
  ViewStyle,
} from "react-native";
import { useController } from "react-hook-form";

type CustomTextInputProps = {
  label?: string;
  containerStyle?: StyleProp<ViewStyle>;
  name: string;
} & ComponentProps<typeof TextInput>;

export default function CustomTextInput({
  label,
  containerStyle,
  name,
  ...textInputProps
}: CustomTextInputProps) {
  const {
    field: { value, onBlur, onChange },
    fieldState: { error },
  } = useController({ name, rules: { required: `$${name} is required` } });

  return (
    <View style={containerStyle}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        {...textInputProps}
        value={value}
        onBlur={onBlur}
        onChangeText={onChange}
        style={[
          styles.input,
          textInputProps.style,
          error ? styles.errorInput : {},
        ]}
      />
      <Text style={styles.error} numberOfLines={1}>
        {error?.message}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: "gainsboro",
    borderWidth: 1,
    width: "100%",
    padding: 10,
    borderRadius: 5,
    color: "#ffffff",
    marginTop: 4,
    marginBottom: 2,
  },
  errorInput: {
    borderColor: "crimson",
  },
  error: {
    color: "crimson",
    height: 17,
  },
  label: {
    fontWeight: "600",
    color: "#ffffff",
  },
});

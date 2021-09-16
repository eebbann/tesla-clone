import React from "react";
import { View, Text, Pressable, ImageBackground } from "react-native";
import styles from "./styles";

const StyledButton = (props) => {
	const name = props.name;
	 const onPress = props.onPress;

	const type = props.type;
	const backgroundColor = type === "primary" ? "#171a20cc" : "#FFFFFFAC";
	const textColor = type === "primary" ? "#FFFFFFAC" : "#171a20cc";

	return (
		<View style={styles.container}>
			<Pressable
				style={[styles.button, { backgroundColor: backgroundColor }]}
				onPress={() => onPress()}>

				<Text style={[styles.text, { color: textColor }]}> {name} </Text>
			</Pressable>
		</View>
	);
};

export default StyledButton;

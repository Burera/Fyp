import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const BottomBtn = (props) => {

    const { onPress, title } = props;
    return (
        <TouchableOpacity style={styles.cont} onPress={onPress}>
            <Text style={styles.imageStyling} navigation={props.navigation}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cont: {
        flexDirection: "row",
        marginVertical: 20,
    },
    imageStyling: {
        backgroundColor: "#ff1744",
        color: "#fff",
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 40,

        paddingTop: 10,
        fontWeight: "300"

    },
});

export default BottomBtn;
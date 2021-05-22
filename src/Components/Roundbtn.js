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


    },
    imageStyling: {

        paddingVertical: 38,
        // borderRadius: 100,

        // paddingTop: 10,
        // fontWeight: "300"
        width: 100,
        height: 100,
        borderRadius: 100,
        justifyContent: 'center',

        textAlign: 'center',
        color: 'white',
        backgroundColor: "#ff1744",





    },
});

export default BottomBtn;
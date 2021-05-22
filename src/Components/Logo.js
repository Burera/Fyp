import React from "react";
import { StyleSheet, Text, View, Image ,  Dimensions} from "react-native";

const Logo = () => {
    return (

        <View style={styles.cont}>

            <Image
                source={require("../../assets/k.png")}

                style={styles.imageStyling}
            />


        </View>

    );
};
const {height} = Dimensions.get("screen");
const height_logo = height * 0.22;


const styles = StyleSheet.create({
 
    
    imageStyling: {

        width: height_logo,
        height: height_logo,
      
        alignSelf: "center",



    },


});

export default Logo;

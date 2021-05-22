

import React from 'react';
import {
    Text,
    View,
    Image,
    Button,
    StyleSheet
} from 'react-native';

import Roundbtn from '../components/Roundbtn'
import BottomBtn from './BottomBtn';







const Bottom = (props) => {
    const { onLeftPress, onRightPress } = props;
    return (
        <View style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: 'center',
            marginBottom: 2
        }}>

            <BottomBtn title="Back" onPress={onLeftPress}
            />
            <Roundbtn title="Confirm" />
            <BottomBtn title="Next" onPress={onRightPress} />
        </View>
    )
}

const styles = StyleSheet.create({



})
export default Bottom


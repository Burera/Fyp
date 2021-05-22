import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

const ScroolText = () => {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Text style={styles.text}>
                    Determine if existing control measures are adequate or if more should
                    be done. Create awareness of hazards and risk. Determine if existing
                    control measures are adequate or if more should be done. Create
                    awareness of hazards and risk. Determine if existing control measures
                    are adequate or if more should be done. Create awareness of hazards
                    and risk. Determine if existing control measures are adequate or if
                    more should be done. Determine if existing control measures are
                    adequate or if more should be done. Create awareness of hazards and
                    risk. Determine if existing control measures are adequate or if more
                    should be done. Create awareness of hazards and risk. Determine if
                    existing control measures are adequate or if more should be done.
                    Create awareness of hazards and risk. Determine if existing control
                    measures are adequate or if more should be done.
        </Text>
            </ScrollView>
        </View>
    );
};

export default ScroolText;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        // marginVertical: 0,
        // paddingVertical: 0
    },
    scrollView: {
        marginTop: 20,
        marginHorizontal: 20,
    },
    text: {
        fontSize: 18,
        color: 'grey',
        lineHeight: 30,
    },
});

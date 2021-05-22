import { CardItem } from 'native-base';
import React, { useState } from 'react';
import { Text, View, Image, Button, StyleSheet } from 'react-native';

import { ListItem, CheckBox, Card } from 'react-native-elements';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

const Quiz = () => {
    const questions = [
        {
            id: 1,
            questionText: 'What is the capital of France?',
        },
        {
            id: 2,
            questionText: 'Who is CEO of Tesla?',
        },
        {
            id: 3,
            questionText: 'The iPhone was created by which company?',
        },
        {
            id: 4,
            questionText: 'How many Harry Potter books are there?',
        },
        {
            id: 5,
            questionText: 'What is the capital of France?',
        },
        {
            id: 6,
            questionText: 'Who is CEO of Tesla?',
        },
        {
            id: 7,
            questionText: 'The iPhone was created by which company?',
        },
        {
            id: 8,
            questionText: 'How many Harry Potter books are there?',
        },
        {
            id: 9,
            questionText: 'How many Harry Potter books are there?',
        },
        {
            id: 10,
            questionText: 'How many Harry Potter books are there?',
        },
    ];
    const answerOptions = [
        { answerText: 'yes', isCorrect: true },
        { answerText: 'No', isCorrect: false },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [checked, setChecked] = useState({ backgroundColor: 'black' });
    const [pressStatus, setPressStatus] = useState(false);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = questions.length - 1;

        if (currentQuestion < nextQuestion) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowScore(true);
        }
    };

    return (
        <View>
            {showScore ? (
                <View
                    style={{
                        flex: 1,
                        alignSelf: 'center',
                        marginTop: 220,
                    }}>
                    <Text
                        style={{
                            fontSize: 25,
                            fontWeight: '300',
                            color: 'white',
                            backgroundColor: '#ff1744',
                            paddingVertical: 20,
                            paddingHorizontal: 20,
                            borderRadius: 50,
                        }}>
                        You scored {score} out of {questions.length}
                    </Text>
                </View>
            ) : (
                    <View style={{ flex: 1 }}>
                        {questions.map((l) => (
                            <ListItem key={l.id} containerStyle={{ paddingTop: 0 }}>
                                <ListItem.Content>
                                    <ListItem.Title>
                                        {' '}
                                        {l.id} : {l.questionText}
                                    </ListItem.Title>

                                    <FlatList
                                        data={answerOptions}
                                        horizontal
                                        renderItem={({ item, index }) => {
                                            return (
                                                <View
                                                    key={index}
                                                    style={{
                                                        flexDirection: 'row',
                                                        paddingHorizontal: 15,
                                                        paddingVertical: 10,
                                                    }}>
                                                    <TouchableOpacity
                                                        onPress={() =>
                                                            handleAnswerOptionClick(item.isCorrect)
                                                        }>
                                                        <Text
                                                            style={
                                                                currentQuestion === index - 1
                                                                    ? styles.buttonStyle
                                                                    : styles.buttonStyleClicked
                                                            }
                                                        />
                                                    </TouchableOpacity>

                                                    <Text style={{ fontWeight: '700', marginLeft: 7 }}>
                                                        {item.answerText}
                                                    </Text>
                                                </View>
                                            );
                                        }}
                                    />
                                </ListItem.Content>
                            </ListItem>
                        ))}
                    </View>
                )}
        </View>
    );
};
const styles = StyleSheet.create({
    buttonStyle: {
        flexDirection: 'row',
        color: '#fff',
        textAlign: 'center',

        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#ff1744',
        width: 20,
        height: 20,
    },
    buttonStyleClicked: {
        flexDirection: 'row',
        color: '#fff',
        textAlign: 'center',
        backgroundColor: '#ff1744',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#ff1744',
        width: 20,
        height: 20,
    },
});
export default Quiz;

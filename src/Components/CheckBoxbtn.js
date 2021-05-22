import { CardItem } from 'native-base';
import React, { useState } from 'react';
import { Text, View, Image, Button, StyleSheet } from 'react-native';

import { ListItem, CheckBox, Card } from 'react-native-elements';
import CheckBoxbtn from './CheckBoxbtn';

const Quiz = () => {
    const questions = [
        {
            id: 1,
            questionText: 'What is the capital of France?',
            answerOptions: [
                { answerText: 'yes', isCorrect: true },
                { answerText: 'No', isCorrect: false },
            ],
        },
        {
            id: 2,
            questionText: 'Who is CEO of Tesla?',
            answerOptions: [
                { answerText: 'No', isCorrect: false },
                { answerText: 'yes', isCorrect: true },
            ],
        },
        {
            id: 3,
            questionText: 'The iPhone was created by which company?',
            answerOptions: [
                { answerText: 'No', isCorrect: false },
                { answerText: 'yes', isCorrect: true },
            ],
        },
        {
            id: 4,
            questionText: 'How many Harry Potter books are there?',
            answerOptions: [
                { answerText: 'No', isCorrect: false },
                { answerText: 'yes', isCorrect: true },
            ],
        },
        {
            id: 5,
            questionText: 'What is the capital of France?',
            answerOptions: [
                { answerText: 'yes', isCorrect: true },
                { answerText: 'No', isCorrect: false },
            ],
        },
        {
            id: 6,
            questionText: 'Who is CEO of Tesla?',
            answerOptions: [
                { answerText: 'No', isCorrect: false },
                { answerText: 'yes', isCorrect: true },
            ],
        },
        {
            id: 7,
            questionText: 'The iPhone was created by which company?',
            answerOptions: [
                { answerText: 'No', isCorrect: false },
                { answerText: 'yes', isCorrect: true },
            ],
        },
        {
            id: 8,
            questionText: 'How many Harry Potter books are there?',
            answerOptions: [
                { answerText: 'No', isCorrect: false },
                { answerText: 'yes', isCorrect: true },
            ],
        },
        {
            id: 9,
            questionText: 'How many Harry Potter books are there?',
            answerOptions: [
                { answerText: 'No', isCorrect: false },
                { answerText: 'yes', isCorrect: true },
            ],
        },
        {
            id: 10,
            questionText: 'How many Harry Potter books are there?',
            answerOptions: [
                { answerText: 'No', isCorrect: false },
                { answerText: 'yes', isCorrect: true },
            ],
        },
    ];


    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [checked, setChecked] = useState(false)

    const handleAnswerOptionClick = (isCorrect) => {
        // const colorcheck = !checked
        // setChecked(colorcheck)
        if (isCorrect) {
            setScore(score + 1);
            setChecked(!checked)

        }

        const nextQuestion = questions.length;

        console.log(currentQuestion)
        if (currentQuestion < nextQuestion) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowScore(true);
        }
    };


    return (
        <View style={{ flexDirection: 'row' }}>

            {questions[0].answerOptions.map((answerOption) => (
                <ListItem.Subtitle
                >

                    <Text
                    ><View >

                            <CheckBox
                                containerStyle={{
                                    backgroundColor: '#fff',
                                }}
                                center
                                title={answerOption.answerText}
                                checkedIcon='dot-circle-o'
                                uncheckedIcon='circle-o'
                                checked={checked}
                                checkedColor="#ff1744"
                                uncheckedColor="#ff1744"
                                onPress={() =>
                                    handleAnswerOptionClick(answerOption.isCorrect)
                                }
                            />

                        </View></Text>

                </ListItem.Subtitle>
                // <View >

                //     <CheckBox
                //         containerStyle={{
                //             backgroundColor: '#fff',
                //         }}
                //         center
                //         title={answerOption.answerText}
                //         checkedIcon='dot-circle-o'
                //         uncheckedIcon='circle-o'
                //         checked={checked}
                //         checkedColor="#ff1744"
                //         uncheckedColor="#ff1744"
                //         onPress={() =>
                //             handleAnswerOptionClick(answerOption.isCorrect)
                //         }
                //     />

                // </View>
            ))}

        </View >
    );
};

export default Quiz;

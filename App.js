import React, {useState} from 'react';
import {StyleSheet, Text, View, Dimensions, Button, TextInput, Image} from 'react-native';
import PigGame from './PigGame';

const screenHeight = Dimensions.get('window').height;
let pigGame = new PigGame(0, 0, 0, 1);

const App = () => {
    const [die, setDie] = useState(0);
    const [player1Name, setPlayer1Name] = useState('Enter Name1');
    const [player2Name, setPlayer2Name] = useState('Enter Name2');
    const [rollDieButtonIsDisabled, disableDieButton] = useState(true);
    const [turnButtonIsDisabled, disableTurnButton] = useState(false);
    const [turnButtonText, setTurnButtonText] = useState('Start Turn');
    const [nextTurnText, setNextTurnText] = useState(`Let's Play!`);
    const [player1Score, setPlayer1Score] = useState(pigGame.player1Score);
    const [player2Score, setPlayer2Score] = useState(pigGame.player2Score);
    const [turnPoints, setTurnPoints] = useState(pigGame.turnPoints);
    const [currentPlayer, setCurrentPlayer] = useState(pigGame.currentPlayer);

    return (
        <View style={styles.container}>
            <View style={styles.gameBox}>
                <View style={styles.row}>
                    <View style={styles.box}><Text style={styles.text}>Player 1</Text></View>
                    <View style={styles.box}><Text style={styles.text}>Player 2</Text></View>
                </View>
                <View style={styles.row}>
                    <View style={styles.box}>
                        <TextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={styles.text}
                            value={player1Name}
                            onChangeText={x => setPlayer1Name(x)}
                        />
                    </View>
                    <View style={styles.box}>
                        <TextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={styles.text}
                            value={player2Name}
                            onChangeText={x => setPlayer2Name(x)}
                        />
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.box}><Text style={styles.text}>Score</Text></View>
                    <View style={styles.box}><Text style={styles.text}>Score</Text></View>
                </View>
                <View style={styles.row}>
                    <View style={styles.box}><Text style={styles.text}>{player1Score}</Text></View>
                    <View style={styles.box}><Text style={styles.text}>{player2Score}</Text></View>
                </View>
                <View style={styles.row}>
                    <View style={styles.box}>
                        <Text style={styles.text}>{nextTurnText}</Text>
                    </View>
                </View>
                <View style={{ ...styles.row, flex: 30 }}>
                    <View style={{ ...styles.box, width: '75%' }}>
                        <Image style={{ width: '90%', height: '90%', resizeMode: 'contain' }} source={
                            die === 0 ? require('./assets/pig.jpg') : (
                                die === 1 ? require('./assets/die1.png') : (
                                    die === 2 ? require('./assets/die2.png') : (
                                        die === 3 ? require('./assets/die3.png') : (
                                            die === 4 ? require('./assets/die4.png') : (
                                                die === 5 ? require('./assets/die5.png') : require('./assets/die6.png'))))))
                        }
                        />
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.box}><Text style={styles.text}>Points For This Turn</Text></View>
                </View>
                <View style={styles.row}>
                    <View style={styles.box}><Text style={{ ...styles.text, fontSize: screenHeight / 20 }}>{turnPoints}</Text></View>
                </View>
                <View style={styles.row}>
                    <View style={styles.box}>
                        <Button
                            title="Roll Die"
                            disabled={rollDieButtonIsDisabled}
                            onPress={() => {
                                setDie(pigGame.rollDie());
                                if (die === 1) {
                                    disableDieButton(true);
                                    setTurnButtonText('End Turn');
                                    pigGame.changeTurn();
                                }
                                setPlayer1Score(pigGame.player1Score);
                                setPlayer2Score(pigGame.player2Score);
                                setTurnPoints(pigGame.turnPoints);
                                setCurrentPlayer(pigGame.currentPlayer);
                            }}
                        />
                    </View>
                    <View style={styles.box}>
                        <Button
                            title={turnButtonText}
                            disabled={turnButtonIsDisabled}
                            onPress={() => {
                                if (turnButtonText === 'Start Turn') {
                                    setTurnButtonText('End Turn');
                                    disableDieButton(false);
                                } else {
                                    setTurnButtonText('Start Turn');
                                    disableDieButton(true);
                                    pigGame.changeTurn();
                                    setDie(0);
                                }
                                setPlayer1Score(pigGame.player1Score);
                                setPlayer2Score(pigGame.player2Score);
                                setTurnPoints(pigGame.turnPoints);
                                setCurrentPlayer(pigGame.currentPlayer);

                                // Check for a winner
                                if (pigGame.checkForWinner() !== -1) {
                                    switch (pigGame.checkForWinner()) {
                                        case 0:
                                            setNextTurnText('It is a tie!');
                                            break;
                                        case 1:
                                            setNextTurnText(`${player1Name} Wins!`);
                                            break;
                                        case 2:
                                            setNextTurnText(`${player2Name} Wins!`);
                                            break;
                                    }
                                    disableDieButton(true);
                                    disableTurnButton(true);
                                } else {
                                    setNextTurnText(`${currentPlayer === 1 ? player1Name : player2Name}'s Turn`);
                                }
                            }}
                        />
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.box}>
                        <Button
                            title="New Game"
                            onPress={() => {
                                pigGame = new PigGame(0, 0, 0, 1);
                                setDie(0);
                                disableDieButton(true);
                                setTurnButtonText('Start Turn');
                                disableTurnButton(false);
                                setPlayer1Score(pigGame.player1Score);
                                setPlayer2Score(pigGame.player2Score);
                                setTurnPoints(pigGame.turnPoints);
                                setCurrentPlayer(pigGame.currentPlayer);
                                setNextTurnText(`Let's Play!`);
                            }}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    gameBox: {
        flex: 0,
        backgroundColor: '#ffe',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        height: '85%',
        paddingTop: '5%'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        flex: 10,
        borderWidth: 1
    },
    box: {
        width: '35%',
        height: '90%',
        marginHorizontal: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fef'
    },
    text: {
        fontSize: screenHeight / 45
    }
});

export default App;

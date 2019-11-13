import React, {useState} from 'react';
import {StyleSheet, Text, View, Dimensions, Button, TextInput, Image} from 'react-native';
import PigGame from './PigGame';

const screenHeight = Dimensions.get('window').height;

const App = () => {
    const pigGame = new PigGame(0, 0, 0, 1);
    let die = 0;

    const [player1Name, setPlayer1Name] = useState('Enter Name');
    const [player2Name, setPlayer2Name] = useState('Enter Name');
    const [rollDieButtonIsDisabled, disableDieButton] = useState(true);
    const [turnButtonIsDisabled, disableTurnButton] = useState(false);
    const [turnButtonText, setTurnButtonText] = useState('Start Turn');

    pigGame.changeTurn();
    console.log(pigGame.currentPlayer);

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
                    <View style={styles.box}>
                        <Text style={styles.text}>{pigGame.currentPlayer === 1 ? player1Name : player2Name}'s Turn</Text>
                    </View>
                </View>
                <View style={{...styles.row, flex: 30}}>
                    <View style={{...styles.box, width: '75%'}}>
                        <Image style={{width: '90%', height: '90%'}} source={require('./assets/pig.jpg')}/>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.box}><Text style={styles.text}>Points For This Turn</Text></View>
                </View>
                <View style={styles.row}>
                    <View style={styles.box}><Text style={{...styles.text, fontSize: screenHeight / 20}}>0</Text></View>
                </View>
                <View style={styles.row}>
                    <View style={styles.box}>
                        <Button
                            title="Roll Die"
                            disabled={rollDieButtonIsDisabled}
                            onPress={() => pigGame.show()}
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
                                    pigGame.changeTurn();
                                    die = 0;
                                    console.log(pigGame.currentPlayer);
                                    disableDieButton(true);
                                }
                            }}
                        />
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.box}>
                        <Button title="New Game"/>
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
        paddingTop:'5%'
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

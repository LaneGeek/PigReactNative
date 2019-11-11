import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App = () => {
    return (
        <View style={styles.container}>
            <View style={styles.gameBox}>
                <View style={styles.row}>
                    <View style={styles.box}><Text>Player 1</Text></View>
                    <View style={styles.box}><Text>Player 2</Text></View>
                </View>
                <View style={styles.row}>
                    <View style={styles.box}><Text>Enter Name</Text></View>
                    <View style={styles.box}><Text>Enter Name</Text></View>
                </View>
                <View style={styles.row}>
                    <View style={styles.box}><Text>Player x's Turn</Text></View>
                </View>
                <View style={styles.row}>
                    <View style={styles.box}><Text>Image</Text></View>
                </View>
                <View style={styles.row}>
                    <View style={styles.box}><Text>Points For This Turn</Text></View>
                </View>
                <View style={styles.row}>
                    <View style={styles.box}><Text>0</Text></View>
                </View>
                <View style={styles.row}>
                    <View style={styles.box}><Text>Roll Die</Text></View>
                    <View style={styles.box}><Text>Start Turn</Text></View>
                </View>
                <View style={styles.row}>
                    <View style={styles.box}><Text>New Game</Text></View>
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
        justifyContent: 'space-around',
        width: '90%',
        height: '90%'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        height: '10%',
        borderWidth: 2
    },
    box: {
        width: '25%',
        height: '90%',
        marginHorizontal: '10%',
        borderWidth: 1
    }
});

export default App;

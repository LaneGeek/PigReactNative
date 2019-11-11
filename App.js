import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App = () => {
    return (
        <View style={styles.container}>
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
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    row: {
        flexDirection: "row"
    },
    box: {
        width: 100,
        height: 100,
        borderWidth: 1,
        alignItems: 'center'
    }
});

export default App;

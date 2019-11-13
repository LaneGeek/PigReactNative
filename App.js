import React from 'react';
import {StyleSheet, Text, View, Dimensions, Button, TextInput, Image} from 'react-native';

const screenHeight = Dimensions.get('window').height;

const App = () => {
    return (
        <View style={styles.container}>
            <View style={styles.gameBox}>
                <View style={styles.row}>
                    <View style={styles.box}><Text style={styles.text}>Player 1</Text></View>
                    <View style={styles.box}><Text style={styles.text}>Player 2</Text></View>
                </View>
                <View style={styles.row}>
                    <View style={styles.box}><TextInput style={styles.text}>Enter Name</TextInput></View>
                    <View style={styles.box}><TextInput style={styles.text}>Enter Name</TextInput></View>
                </View>
                <View style={styles.row}>
                    <View style={styles.box}><Text style={styles.text}>Player X's Turn</Text></View>
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
                        <Button title="Roll Die"/>
                    </View>
                    <View style={styles.box}>
                        <Button title="Start Turn"/>
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

import * as React from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, ImageBackground, Platform, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';

export default class StarMapScreen extends React.Component {
    constructor(){
        super();
        this.state = {
            latitude: 0,
            longitude: 0
        }
    }

    render(){
        const { latitude, longitude } = this.state;
        const path = `https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations
        =true&showstarlabels=true&gridlines_az=true&live=true&projection=stereo&showdate=false&showposition=false`;
        
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground
                style={styles.backgroundImage}
                source={require('../assets/stars.gif')}>
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>Star Map</Text>
                    </View>
                    <TextInput
                    style={styles.input}
                    placeholder="Enter your latitude"
                    placeholderTextColor="#fff"
                    onChangeText={(text) => {
                        this.setState({
                            latitude: text
                        });
                    }} />
                    <TextInput
                    style={styles.input}
                    placeholder="Enter your longitude"
                    placeholderTextColor="#fff"
                    onChangeText={(text) => {
                        this.setState({
                            longitude: text
                        });
                    }} />
                    <WebView
                    scalesPageToFit={true}
                    source={{uri: path}}
                    style={{marginTop: 20, marginBottom: 20}} />
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
    },
    titleBar: {
        flex: 0.15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white"
    },
    input: {
        marginTop: 20,
        height: 40,
        textAlign: 'center',
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 80
    }
});

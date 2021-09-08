import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, StatusBar, SafeAreaView, ImageBackground, Platform, Image, Alert, Linking } from 'react-native';
import axios from 'axios';

export default class DailyPicScreen extends React.Component {
    constructor(){
        super();
        this.state = {
            apod: {}
        }
    }

    componentDidMount(){
        this.getAPOD();
    }

    getAPOD = () => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=I9NceAanOgb6sV4R2VSyBXC7YbRJTyJsKAeouokZ")
            .then(response => {
                this.setState({
                    apod: response.data
                });
                console.log(response.data);
            })
            .catch(error => Alert.alert(error.message))
    }

    render(){
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground
                style={styles.backgroundImage}
                source={require('../assets/stars.gif')}>
                    <View style={styles.titleBar}>
                        <Text style={[styles.titleText, {fontSize: 40}]}>Astronomy Picture of the Day</Text>
                    </View>
                    <View style={styles.titleBar}>
                        <Text style={[styles.titleText, {fontSize: 30}]}>{this.state.apod.title}</Text>
                    </View>
                    <TouchableOpacity
                    style={styles.playButton}
                    onPress={() => {
                        Linking
                            .openURL(this.state.apod.url)
                            .catch(err => console.error("Couldn't load page", err))
                    }}>
                        <Image
                        style={{width: 50, height: 50}}
                        source={require('../assets/play-video.png')} />
                    </TouchableOpacity>
                    <Text style={styles.explanationText}>{this.state.apod.explanation}</Text>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
    },
    titleBar: {
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText: {
        fontWeight: "bold",
        color: "white"
    },
    playButton: {
        marginTop: 20,
        alignSelf: 'center'
    },
    explanationText: {
        marginTop: 20,
        fontSize: 15,
        color: "white"
    }
});

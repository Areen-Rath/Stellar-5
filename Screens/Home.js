import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, StatusBar, SafeAreaView, ImageBackground, Platform } from 'react-native';

export default class HomeScreen extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground
                style={styles.backgroundImage}
                source={require('../assets/stars.gif')}>
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>Stellar App</Text>
                    </View>
                    <Image
                    style={{alignSelf: 'center', width: 200, height: 200}}
                    source={require('../assets/main-icon.png')} />
                    <TouchableOpacity style={styles.routeCard} onPress={() => {this.props.navigation.navigate('SpaceCraft')}}>
                        <Text style={styles.routeText}>Space Crafts</Text>
                        <Image
                        style={styles.iconImage}
                        source={require('../assets/space_crafts.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.routeCard} onPress={() => {this.props.navigation.navigate('StarMap')}}>
                        <Text style={styles.routeText}>Star Map</Text>
                        <Image
                        style={styles.iconImage}
                        source={require('../assets/star_map.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.routeCard} onPress={() => {this.props.navigation.navigate('DailyPic')}}>
                        <Text style={styles.routeText}>Daily Pictures</Text>
                        <Image
                        style={styles.iconImage}
                        source={require('../assets/daily_pictures.png')} />
                    </TouchableOpacity>
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
    routeCard: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: "white"
    },
    routeText: {
        marginTop: 35,
        paddingLeft: 30,
        fontSize: 35,
        fontWeight: "bold",
        color: "black"
    },
    iconImage: {
        position: "absolute",
        left: 130,
        top: -40,
        width: 80,
        height: 80,
        resizeMode: "contain"
    }
});

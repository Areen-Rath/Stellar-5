import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, StatusBar, SafeAreaView, ImageBackground, Platform, Image, Alert, FlatList } from 'react-native';
import axios from 'axios';

export default class SpaceCraftScreen extends React.Component {
    constructor(){
        super();
        this.state = {
            spacecrafts: {}
        }
    }

    componentDidMount(){
        this.getData();
    }

    getData = () => {
        axios
            .get("https://ll.thespacedevs.com/2.0.0/config/spacecraft")
            .then(response => {
                this.setState({
                    spacecrafts: response.data.results
                });
            })
            .catch(error => Alert.alert(error.message))
    }

    renderItem = (item) => {
        console.log(item);

        
            if(item.item.agency.image_url){
                return (
                    <View style={styles.listContainer}>
                        <Image
                        style={styles.spaceCraftImage}
                        source={{uri: item.item.agency.image_url}} />
                    </View>
                );
            }
            return (
                <View style={styles.listContainer}>
                    <Text style={{marginTop: 20, fontWeight: "bold", fontSize: 20, color: "purple"}}>{item.item.name}</Text>
                    <Text style={{color: "#696969"}}>{item.item.agency.name}</Text>
                    <Text style={{marginTop: 20, fontSize: 15}}>{item.item.agency.description}</Text>
                </View>
            );
        
    }

    keyExtractor = (item, index) => index.toString();

    render(){
        let spacecraftArr = Object.keys(this.state.spacecrafts).map(spacecraft => {
            return this.state.spacecrafts[spacecraft];
        });
        let spacecrafts = [].concat.apply([], spacecraftArr);
        console.log(spacecrafts);

        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground
                style={styles.backgroundImage}
                source={require('../assets/stars.gif')}>
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>Spacecrafts</Text>
                    </View>
                    <FlatList
                    data={spacecrafts}
                    renderItem={this.renderItem}
                    keyExtractor={this.keyExtractor} />
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
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white"
    },
    listContainer: {
        borderWidth: 1,
        marginBottom: 10,
        backgroundColor: 'white',
        elevation: 10,
    },
    spaceCraftImage: {
        width: "100%",
        height: 200,
        marginTop: 15,
        marginBottom: 15,
    }
});
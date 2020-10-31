import React from 'react'
import { Component } from 'react'
import { render } from 'react-dom'
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Dimensions, LogBox, Image, TouchableWithoutFeedback, Linking } from 'react-native'
const { width, height } = Dimensions.get('window')

LogBox.ignoreAllLogs(true)

export default class news extends React.Component {

    state = {
        news: [],
        loading: true
    }
    fetchnews = () => {
        fetch('http://newsapi.org/v2/top-headlines?country=id&apiKey=2fe3979869f74779827aa51b567c67d2')
            .then((res) => res.json())
            .then((response) => {
                this.setState({
                    news: response.articles,
                    loading: false
                })

            })
    }
    componentDidMount() {
        this.fetchnews()
    }


    render() {
        if (this.state.loading) {
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#333' }}>
                    <ActivityIndicator size='small' color='#fff' />
                </View>
            );
        }
        else {
            return (
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Top</Text>
                        <Text style={styles.headerText}>Headline</Text>
                    </View>
                    <View style={styles.news}>
                        <FlatList
                            data={this.state.news}
                            renderItem={({ item }) => {
                                return (
                                    <TouchableWithoutFeedback onPress={() => Linking.openURL(item.url)}>
                                        <View style={styles.sizingNews}>
                                            <Image source={{ uri: item.urlToImage }} style={[StyleSheet.absoluteFill, { borderRadius: 15 }]} />
                                            <View style={styles.gradient}>
                                                <Text style={{ position: 'absolute', bottom: 0, color: '#fff', fontSize: 18, padding: 5 }}>{item.title}</Text>
                                            </View>

                                        </View>
                                    </TouchableWithoutFeedback>
                                );
                            }
                            }
                        />

                    </View>
                </View>
            )
        }



    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333'
    },
    header: {
        padding: 30
    },
    headerText: {
        fontSize: 35,
        color: '#fff'
    },
    news: {
        alignSelf: 'center'
    },
    sizingNews: {
        width: width - 50,
        height: 180,
        backgroundColor: '#fff',
        marginBottom: 15,
        borderRadius: 15
    },
    gradient: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 15
    }

})

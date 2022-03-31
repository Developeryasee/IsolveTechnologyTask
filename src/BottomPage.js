//import liraries
import React, { Component, useEffect, useState } from 'react';
import {
    View, Text, StyleSheet, Image,
    FlatList, TouchableOpacity,
    LayoutAnimation,
    UIManager, Platform
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'

// create a component
import { useSelector, useDispatch } from 'react-redux';
import { selectAllCart, dataItems } from './reducer/getData';

if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true)
    }
}
const BottomPage = () => {
    const dispatch = useDispatch()
    const [open, setopen] = useState('')
    const cartItemsList = useSelector(selectAllCart);
    useEffect(() => {
        dispatch(dataItems())
    }, [])

    const onPress = (id) => {
        if (id === open) {
            LayoutAnimation.easeInEaseOut();
            setopen("")
        } else {
            LayoutAnimation.easeInEaseOut();
            setopen(id)
        }
    }
    return (
        <>
            <View style={styles.container}>
                <View style={styles.profileContainer}>
                    <Text style={styles.Profiletitle}>
                        Overall Profile Strength: {<Text style={{ fontWeight: 'bold' }}>Bronze</Text>}
                    </Text>
                    <View style={styles.rating}>
                        <Image
                            source={require('./../assets/Images/ratings.png')}
                            style={{
                                width: 20,
                                height: 20,

                            }}
                            resizeMode='cover'
                        />
                        <View style={styles.ratingBox}>
                            {
                                [1, 2, 3, 4, 5].map((x) => (
                                    <View
                                        key={x}
                                        style={styles.splitRating}>

                                    </View>
                                ))
                            }



                        </View>
                    </View>
                </View>

                <View style={styles.DetailListViewContainer}>
                    <View style={styles.ViewSplitTitleContainer}>
                        <View>
                            <Text style={styles.ViewTitle}>
                                Time View
                            </Text>
                        </View>

                        {/* <Text style={{fontSize:20,fontWeight:'bold',marginLeft:5,marginRight:5}}>
                                        
                                    </Text> */}
                        <View style={{ borderBottomWidth: 2, borderBottomColor: '#77b2ba', marginLeft: 20 }}>
                            <Text style={styles.ViewTitle}>
                                List View
                            </Text>
                        </View>
                    </View>
                    <View style={styles.coin}>
                        <Text style={styles.coinTitle}>
                            AiScoin
                        </Text>
                        <Image
                            source={require('./../assets/Images/dollar.png')}
                            style={{
                                width: 20,
                                height: 20
                            }}
                        />
                    </View>
                    <Text style={{ ...styles.coinTitle, alignSelf: 'flex-end', fontSize: 20, color: '#9aa6b8', marginTop: 5 }}>
                        80
                    </Text>
                    <Text style={{ ...styles.accomdation, bottom: 10 }}>
                        Accomodations
                    </Text>
                    <View style={{ ...styles.profileContainer, backgroundColor: '#e0ab8c', bottom: 10 }}>
                        <Image
                            source={require('./../assets/Images/goal.png')}
                            style={{
                                width: 35,
                                height: 35,
                                bottom: 20
                            }}
                            resizeMode="cover"
                        />
                        <Text style={{ ...styles.Profiletitle, bottom: 20 }}>
                            Profile Strength: {<Text style={{ fontWeight: 'bold' }}>Bronze</Text>}
                        </Text>
                        <View style={{ ...styles.rating, bottom: 20 }}>
                            <Image
                                source={require('./../assets/Images/ratings.png')}
                                style={{
                                    width: 20,
                                    height: 20,

                                }}
                                resizeMode='cover'
                            />
                            <View style={styles.ratingBox}>
                                {
                                    [1, 2, 3, 4, 5].map((x) => (
                                        <View
                                            key={x}
                                            style={styles.splitRating}>

                                        </View>
                                    ))
                                }



                            </View>
                        </View>
                    </View>
                    <View style={{
                        flex: 1,
                    }}>
                        {
                            cartItemsList.length > 0 ? <>

                                <FlatList
                                    data={cartItemsList}
                                    keyExtractor={item => item.id}
                                    renderItem={({ item, index }) => (
                                        <TouchableOpacity style={{ width: '100%', backgroundColor: (index % 2) === 0 ? '#98be57' : '#e09b74', marginTop: 20, borderRadius: 20, padding: 10, justifyContent: 'center', flexDirection: 'row' }}
                                            onPress={() => onPress(item.id)}
                                        >
                                            <View style={{
                                                width: 100,
                                                height: 100,
                                            }}>
                                                <Image
                                                    source={{
                                                        uri: item.contentImgUrl
                                                    }}
                                                    style={{
                                                        flex: 1
                                                    }}
                                                    resizeMode='contain'
                                                />
                                            </View>
                                            <View style={{ flex: 1, padding: 10 }}>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                    <Text style={{ ...styles.Profiletitle }}>
                                                        {item.title}
                                                    </Text>
                                                    <View style={{ flexDirection: 'row' }}>
                                                        <Text style={{ ...styles.Profiletitle, marginRight: 5 }}>
                                                            {item.coinsEarned} AiScoin
                                                        </Text>
                                                        <Image
                                                            source={require('./../assets/Images/dollar.png')}
                                                            style={{
                                                                width: 20,
                                                                height: 20,
                                                            }}
                                                        />
                                                    </View>

                                                </View>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                                                    <Text style={{ ...styles.Profiletitle }}>
                                                        {item.createdDate} {item.createdTime}
                                                    </Text>
                                                    <Ionicons
                                                        name='chevron-down'
                                                        size={20}
                                                        color='#fff'
                                                        style={{
                                                            transform: [{
                                                                rotate: item.id === open ? '180deg' : '0deg'
                                                            }]
                                                        }}
                                                    />
                                                </View>
                                                <View style={{ flexDirection: 'row', }}>
                                                    <Text style={{ ...styles.Profiletitle }}>
                                                        {item.coinsEarned} AiScoin
                                                    </Text>
                                                    <Image
                                                        source={require('./../assets/Images/dollar.png')}
                                                        style={{
                                                            width: 20,
                                                            height: 20,
                                                            marginLeft: 5
                                                        }}
                                                        resizeMode='cover'
                                                    />
                                                </View>


                                                {
                                                    open === item.id ? <>
                                                        {
                                                            item.hideData.map((x,index) => (
                                                                <>
                                                                <View key={index}>
                                                                <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between' }}>
                                                                        <Text style={{ ...styles.Profiletitle, color: '#fff', fontSize: 12 }}>
                                                                            {x.createdDate} {x.createdTime} - {x.createdTime}
                                                                        </Text>
                                                                        <Feather
                                                                            name='clock'
                                                                            size={15}
                                                                            color='#fff'
                                                                        />
                                                                        <View style={{ flexDirection: 'row' }}>
                                                                            <Text style={{ ...styles.Profiletitle, color: '#fff', marginRight: 5, fontSize: 12 }}>
                                                                                {item.coinsEarned} AiScoin
                                                                            </Text>
                                                                            <Image
                                                                                source={require('./../assets/Images/dollar.png')}
                                                                                style={{
                                                                                    width: 20,
                                                                                    height: 20,
                                                                                }}
                                                                            />
                                                                        </View>
                                                                    </View>
                                                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginTop: 10,  }}>
                                                                        <Text style={{ ...styles.Profiletitle, color: '#fff', fontSize: 12 }}>
                                                                            {x.updatedDate} {x.updatedTime} - {x.updatedTime}
                                                                        </Text>
                                                                        <Feather
                                                                            name='clock'
                                                                            size={15}
                                                                            color='#fff'
                                                                        />
                                                                        <View style={{ flexDirection: 'row' }}>
                                                                            <Text style={{ ...styles.Profiletitle, color: '#fff', marginRight: 5, fontSize: 12 }}>
                                                                                {item.coinsEarned} AiScoin
                                                                            </Text>
                                                                            <Image
                                                                                source={require('./../assets/Images/dollar.png')}
                                                                                style={{
                                                                                    width: 20,
                                                                                    height: 20,
                                                                                }}
                                                                            />
                                                                        </View>
                                                                    </View>
                                                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginTop: 10,  }}>
                                                                        <Text style={{ ...styles.Profiletitle, color: '#fff', fontSize: 12 }}>
                                                                            {x.startDate} {x.startTime} - {x.startTime}
                                                                        </Text>
                                                                        <Feather
                                                                            name='clock'
                                                                            size={15}
                                                                            color='#fff'
                                                                        />
                                                                        <View style={{ flexDirection: 'row' }}>
                                                                            <Text style={{ ...styles.Profiletitle, color: '#fff', marginRight: 5, fontSize: 12 }}>
                                                                                {item.coinsEarned} AiScoin
                                                                            </Text>
                                                                            <Image
                                                                                source={require('./../assets/Images/dollar.png')}
                                                                                style={{
                                                                                    width: 20,
                                                                                    height: 20,
                                                                                }}
                                                                            />
                                                                        </View>
                                                                    </View>
                                                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginTop: 10, }}>
                                                                        <Text style={{ ...styles.Profiletitle, color: '#fff', fontSize: 12 }}>
                                                                            {x.endDate} {x.endTime} - {x.endTime}
                                                                        </Text>
                                                                        <Feather
                                                                            name='clock'
                                                                            size={15}
                                                                            color='#fff'
                                                                        />
                                                                        <View style={{ flexDirection: 'row' }}>
                                                                            <Text style={{ ...styles.Profiletitle, color: '#fff', marginRight: 5, fontSize: 12 }}>
                                                                                {item.coinsEarned} AiScoin
                                                                            </Text>
                                                                            <Image
                                                                                source={require('./../assets/Images/dollar.png')}
                                                                                style={{
                                                                                    width: 20,
                                                                                    height: 20,
                                                                                }}
                                                                            />
                                                                        </View>
                                                                    </View>

                                                                    <View style={{alignSelf:'center',height:35,width:"45%",borderRadius:10,backgroundColor:'#8f8e8b',justifyContent:'center',alignItems:'center',marginTop: 10,flexDirection:'row'}}>
                                                                        <Text style={{marginRight:3}}>
                                                                            View More
                                                                        </Text>
                                                                        <Ionicons
                                                                        name='open-outline'
                                                                        size={20}
                                                                        
                                                                        />
                                                                    </View>
                                                                </View>
                                                                   


                                                                </>


                                                            ))
                                                        }
                                                    </> : null

                                                }
                                            </View>



                                        </TouchableOpacity>
                                    )}
                                />

                            </> : null
                        }

                    </View>
                </View>
            </View>

        </>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profileContainer: {
        width: '100%',
        height: 60,
        backgroundColor: '#Ed9773',
        bottom: 30,
        borderTopRightRadius: 20,
        padding: 20,
        justifyContent: 'center',
    },
    Profiletitle: {
        fontSize: 14, color: '#fff'
    },
    rating: {
        flexDirection: 'row',
        right: 5
    },
    ratingBox: {
        height: 15,
        width: '95%',
        backgroundColor: '#fff',
        padding: 5,
        justifyContent: 'space-between', alignItems: 'center',
        flexDirection: 'row'
    },
    splitRating: {
        width: '15%',
        backgroundColor: '#e6e6e6',
        height: 5
    },
    DetailListViewContainer: {
        flex: 1,
    },
    ViewSplitTitleContainer: {
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    ViewTitle: {
        fontSize: 15,
        fontWeight: "500",
        color: '#000'
    },
    coin: {

        alignSelf: 'flex-end',
        flexDirection: 'row',
    },
    coinTitle: {
        fontWeight: "500",
        fontSize: 15,
        color: '#000',
        marginRight: 5
    },
    accomdation: {
        fontWeight: "bold",
        fontSize: 15,
        color: '#000',
        alignSelf: 'center',
    }
});

//make this component available to the app
export default BottomPage;

/**
 * Sample React Native MainPage
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useEffect } from 'react';
 import type { Node } from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text, TextInput,
   useColorScheme,
   TouchableOpacity,
   View, ImageBackground
 } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewMainPageScreen';
 import Icon from 'react-native-vector-icons/Ionicons'
 import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons'
 import Entypo from 'react-native-vector-icons/Entypo'
import BottomPage from './BottomPage';
import { selectAllCart, dataItems } from './reducer/getData';
 const MainPage: () => Node = () => {
  const dispatch = useDispatch()
  const refresh=()=>{
    dispatch(dataItems())

  }
  return (
     <View style={styles.container}>
       <View style={styles.topContainer}>
         <ImageBackground
           style={styles.Image}
           source={require('./../assets/Images/clockn.jpg')}
           resizeMode="cover"
         >
 
           <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
             <Icon
               name='ios-arrow-back'
               color='#fff'
               size={25}
             />
             <SimpleIcon
               name='options-vertical'
               color='#fff'
               size={25}
               style={{
                 marginRight: 10
               }}
             />
           </View>
           <View style={styles.topDetailContainer}>
             <Text style={styles.title}>
               My activities
             </Text>
             <View style={styles.searchContainer}>
               <TextInput
                 placeholder='What are you looking for?'
                 placeholderTextColor='#999999'
                 style={{ alignSelf: 'center', color: '#000' }}
               />
             </View>
             <View style={styles.calendarMainContainer}>
               <View style={{ ...styles.calendarSubContainer, marginLeft: 30 }}>
                 <View style={styles.calendarDetailConatiner}>
                   <Text style={styles.DateTitle}>
                     Start Date
                   </Text>
                 </View>
                 <View style={{ ...styles.calendarDetailConatiner, width: null }}>
                   <Entypo
                     name='calendar'
                     color='red'
                     size={18}
                     style={{
                       marginRight: 10
                     }}
                   />
                 </View>
 
               </View>
               <View style={{ ...styles.calendarSubContainer, marginLeft: 5 }}>
                 <View style={styles.calendarDetailConatiner}>
                   <Text style={styles.DateTitle}>
                     End Date
                   </Text>
                 </View>
                 <View style={{ ...styles.calendarDetailConatiner, width: null }}>
                   <Entypo
                     name='calendar'
                     color='red'
                     size={18}
                     style={{
                       marginRight: 10
                     }}
                   />
                 </View>
 
               </View>
               <View style={{ width: 33, height: 33, backgroundColor: "#fff", borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                 
                 <TouchableOpacity
                 onPress={() => {
                  refresh()
                 }}
                 >
                 <Icon
                   name='ios-refresh-sharp'
                   color='#7689a8'
                   size={20}
                   
                 />
                 </TouchableOpacity>
               </View>
             </View>
           </View>
         </ImageBackground>
       </View>
       <View style={styles.BottomContainer}>
                  <BottomPage
                  />
       </View>
     </View>
   );
 };
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff'
   },
   topContainer: {
     width: '100%',
     height: 225,
   },
   Image: {
     flex: 1,
     paddingTop: 8,
     paddingLeft: 8,
     paddingRight: 8
 
   },
   topDetailContainer: {
     flex: 1, alignItems: 'center'
   },
   title: {
     fontSize: 19, fontWeight: '500', color: '#fff'
   },
   searchContainer: {
     height: 43, backgroundColor: '#fff', width: '60%', margin: 8, borderRadius: 5,
   },
   calendarMainContainer: {
     height: 33, justifyContent: 'space-between', flexDirection: 'row', marginTop: 15
   },
   calendarSubContainer: {
     height: 33, backgroundColor: '#fff', width: '35%', borderRadius: 5, marginRight: 15, flexDirection: 'row', justifyContent: 'space-between'
   },
   calendarDetailConatiner: {
     justifyContent: 'center', alignItems: 'center', height: '100%', width: '75%'
   },
   DateTitle:{
     fontWeight: '300', color: '#999999' 
   },
   BottomContainer:{
    flex: 1, backgroundColor: '#fff' ,
    paddingLeft: 8,
    paddingRight: 8
   }
 });
 
 export default MainPage;
 
/**
 * Instagram Embed component for React Native
 */

 import React, { PureComponent } from 'react';
 import { StyleSheet } from 'react-native';
 
 export default StyleSheet.create({
   container: {
     backgroundColor: '#000',
     borderColor: '#cccccc',
     borderWidth: 0,
     borderRadius: 3,
   },
   headerContainer: {
     margin: 0,
     backgroundColor: '#D9676F',
     justifyContent: 'flex-start',
     padding: '4%',
     alignItems: 'center',
     flexDirection: 'row',
     fontFamily: 'Gotham-Light'
   },
   avatar: {
     width: 40,
     height: 40,
     borderRadius: 20,
     borderWidth: 1,
     borderColor: '#cccccc',
   },
   author: { 
     marginLeft: '3%', 
     fontWeight: '500',
     fontFamily: 'Gotham-Light',
     color: '#fff',
     textTransform: 'uppercase'
   },
   titleContainer: { flexDirection: 'row', margin: 8 },
   statsContainer: {
     flexDirection: 'row',
     marginVertical: 6,
     alignItems: 'center',
   },
   statIcon: { width: 20, height: 20, marginHorizontal: 5, resizeMode: 'contain' },
   statLabel: { fontWeight: '500', marginHorizontal: 8, color: '#fff' },
 });
 
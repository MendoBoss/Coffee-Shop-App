import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CartScreen from '../screens/CartScreen';
import DetailsScreen from '../screens/DetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import HomeScreen from '../screens/HomeScreen';
import OrderHistoryScreen from '../screens/OrderHistoryScreen';
import PaymentScreen from '../screens/PaymentScreen';
import CustomIcon from '../components_/CustomIcon';
import { ScreenContainer } from 'react-native-screens';
import { COLORS } from '../theme_/theme';
import { BlurView } from '@react-native-community/blur';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator 
        screenOptions={{
            tabBarHideOnKeyboard:true,
            headerShown:false,
            tabBarShowLabel:false,
            tabBarStyle:styles.tabBarStyle,
            tabBarBackground:()=>(<BlurView overlayColor='' blurAmount={15} style={styles.BlurViewStyles} />)
        }}
    >
        <Tab.Screen name='Home' component={HomeScreen} options={{
            tabBarIcon:({focused,color,size})=>(
                <CustomIcon name='home' size={25} color={focused?COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}/>
            )
        }}></Tab.Screen>
        <Tab.Screen name='Cart' component={CartScreen} options={{
            tabBarIcon:({focused,color,size})=>(
                <CustomIcon name='cart' size={25} color={focused?COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}/>
            )
        }}></Tab.Screen>
        {/* <Tab.Screen name='Details' component={DetailsScreen} options={{
            tabBarIcon:({focused,color,size})=>(
                <CustomIcon name='home' size={25} color={focused?COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}/>
            )
        }}></Tab.Screen> */}
        <Tab.Screen name='Favorites' component={FavoritesScreen} options={{
            tabBarIcon:({focused,color,size})=>(
                <CustomIcon name='like' size={25} color={focused?COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}/>
            )
        }}></Tab.Screen>
        <Tab.Screen name='OrderHistory' component={OrderHistoryScreen} options={{
            tabBarIcon:({focused,color,size})=>(
                <CustomIcon name='bell' size={25} color={focused?COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}/>
            )
        }}></Tab.Screen>
        {/* <Tab.Screen name='Payment' component={PaymentScreen} options={{
            tabBarIcon:({focused,color,size})=>(
                <CustomIcon name='home' size={25} color={focused?COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}/>
            )
        }}></Tab.Screen> */}
    </Tab.Navigator>
  )
}


const styles = StyleSheet.create({
    tabBarStyle:{
        height:80,
        position:'absolute',
        backgroundColor: COLORS.primaryBlackRGBA,
        borderTopWidth:0,
        elevation:0,
        borderTopColor:'transparent',
    },
    BlurViewStyles:{
        position:'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0,
    }
});

export default TabNavigator;

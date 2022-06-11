import {StyleSheet, Text, Image, View} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const HeaderComp = ({TEXT, ICON, Abs}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: 'tranarent',
        position: Abs ? 'absolute' : 'relative',
        top: responsiveHeight(1),
        height: responsiveHeight(5),
        width: responsiveWidth(100),
        zIndex: Abs ? 1 : 0,
      }}>
      <Image
        style={{
          height: '45%',
          alignSelf: 'center',
          width: '8%',
          marginLeft: '5%',
        }}
        resizeMode="contain"
        source={require('../assets/drawer-nev-vector.png')}
      />
      <Text
        style={{
          fontSize: 18,
          width: Abs ? '36%' : '75%',
          textAlign: Abs ? 'auto' : 'center',
          marginLeft: Abs ? '17%' : '0%',
          fontWeight: '700',
          color: '#fff',
        }}>
        {TEXT}
      </Text>

      <Image
        style={{
          height: '45%',
          marginTop: '1%',
          // paddingTop:'10%',
          // alignSelf:'center',
          width: '8%',
        }}
        resizeMode="contain"
        source={ICON}
      />
    </View>
  );
};

export default HeaderComp;

const styles = StyleSheet.create({});

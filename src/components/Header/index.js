import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Logo from '../../assets/images/logo.svg';

const Header = props => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
        <Logo />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 12,
    paddingVertical: 18,
    backgroundColor: '#F4F4F4',
  },
});

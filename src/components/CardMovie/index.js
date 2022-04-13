import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import PropTypes from 'prop-types';

const CardMovie = props => {
  return (
    <View style={styles.product}>
      <Image
        source={{
          uri: props.item.poster_path
            ? `https://image.tmdb.org/t/p/w500${props.item.poster_path}`
            : 'https://archive.ebrschools.org/wp-content/themes/ebr/img/nofound.png',
        }}
        style={styles.image}
      />
      <Text style={styles.name}>{props.item.original_title}</Text>
      <Text style={styles.date}>{props.item.release_date}</Text>
    </View>
  );
};

CardMovie.propTypes = {
  item: PropTypes.shape({
    poster_path: PropTypes.string,
    original_title: PropTypes.string,
    release_date: PropTypes.string,
  }),
};

export default CardMovie;

const styles = StyleSheet.create({
  product: {
    width: 99,
  },
  image: {
    resizeMode: 'cover',
    width: 99,
    height: 149,
    borderRadius: 8,
  },
  name: {
    fontSize: 14,
    fontWeight: '700',
  },
  date: {
    fontSize: 12,
  },
});

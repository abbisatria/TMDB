import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {WebView} from 'react-native-webview';
import Play from '../../assets/images/play.svg';
import Back from '../../assets/images/go-back.svg';
import ProgressCircle from 'react-native-progress-circle';
import {useSelector} from 'react-redux';

const Detail = () => {
  const [isVisible, setIsVisible] = useState(false);
  const {movie} = useSelector(state => {
    return {
      movie: state.movie,
    };
  });

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <ImageBackground
        source={{
          uri: `https://image.tmdb.org/t/p/w500${movie.detail.backdrop_path}`,
        }}
        style={styles.banner}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${movie.detail.poster_path}`,
          }}
          style={styles.image}
        />
      </ImageBackground>
      <Text style={styles.title}>{movie.detail.original_title}</Text>
      <View style={styles.row}>
        <View style={styles.row}>
          <ProgressCircle
            percent={movie.detail.vote_average * 10}
            radius={20}
            borderWidth={8}
            color="#FF7314"
            shadowColor="#999"
            bgColor="#fff">
            <Text style={styles.percent}>{`${
              movie.detail.vote_average * 10
            }%`}</Text>
          </ProgressCircle>
          <Text style={styles.name}>User Score</Text>
        </View>
        <TouchableOpacity style={styles.row} onPress={() => setIsVisible(true)}>
          <Play />
          <Text style={styles.name}>Play Trailer</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.date}>
        {movie.detail.release_date} • {Math.round(movie.detail.runtime / 60)}h{' '}
        {movie.detail.runtime - Math.round(movie.detail.runtime / 60) * 60}m{' '}
      </Text>
      <Text style={styles.genre}>
        {movie.detail.genres.map(item => item.name).join(', ')}
      </Text>
      <View style={styles.overview}>
        <Text style={styles.titleOverview}>Overview</Text>
        <Text style={styles.textOverview}>{movie.detail.overview}</Text>
      </View>
      <Modal
        style={{}}
        animationType="slide"
        transparent={false}
        visible={isVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.rowModal}>
            <TouchableOpacity onPress={() => setIsVisible(false)}>
              <Back />
            </TouchableOpacity>
            <Text style={styles.textModal}>Back</Text>
            <View />
          </View>
          {movie.video ? (
            <WebView
              source={{
                uri: `https://www.youtube.com/watch?v=${movie.video.key}`,
              }}
            />
          ) : (
            <Text style={styles.title}>Not Available</Text>
          )}
        </View>
      </Modal>
    </ScrollView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  banner: {
    height: 277,
    resizeMode: 'cover',
    justifyContent: 'center',
    paddingLeft: 18,
  },
  image: {
    resizeMode: 'cover',
    width: 116,
    height: 173,
    borderRadius: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 18,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  rowModal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 18,
  },
  name: {
    fontSize: 14,
    fontWeight: '700',
    marginLeft: 12,
  },
  percent: {
    fontSize: 10,
  },
  date: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 14,
  },
  genre: {
    fontSize: 14,
    textAlign: 'center',
  },
  overview: {
    paddingHorizontal: 18,
    marginTop: 23,
  },
  titleOverview: {
    fontSize: 18,
    fontWeight: '700',
  },
  textOverview: {
    fontSize: 13,
    marginTop: 14,
  },
  modalContainer: {
    flex: 1,
  },
  textModal: {
    fontSize: 18,
    fontWeight: '700',
  },
});

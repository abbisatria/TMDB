import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  FlatList,
} from 'react-native';
import Banner from '../../assets/images/banner.png';
import {useDispatch, useSelector} from 'react-redux';
import {
  popular,
  nowPlaying,
  detailMovie,
  video,
  search,
  loading,
} from '../../redux/actions/movies';
import {CardMovie, Loading} from '../../components';

const Home = props => {
  const [keyword, setKeyword] = useState('');
  const dispatch = useDispatch();
  const {movie} = useSelector(state => {
    return {
      movie: state.movie,
    };
  });

  const detail = async id => {
    dispatch(loading(true));
    await dispatch(detailMovie(id));
    await dispatch(video(id));
    dispatch(loading(false));
    props.navigation.navigate('Detail');
  };

  const searching = async () => {
    if (keyword !== '') {
      await dispatch(search(keyword));
      setKeyword('');
      props.navigation.navigate('Search');
    }
  };

  const fetchMovie = async () => {
    dispatch(loading(true));
    await dispatch(popular());
    await dispatch(nowPlaying());
    dispatch(loading(false));
  };

  useEffect(() => {
    fetchMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return movie.loading ? (
    <Loading />
  ) : (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <ImageBackground source={Banner} style={styles.banner}>
        <Text style={styles.textBanner}>Find Your Favorite {'\n'} Movie</Text>
        <View style={styles.row}>
          <View style={styles.input}>
            <TextInput
              placeholder="Search.."
              onChangeText={value => setKeyword(value)}
              defaultValue={keyword}
            />
          </View>
          <TouchableOpacity
            style={styles.btnSearch}
            onPress={() => searching()}>
            <Text style={styles.textSearch}>Search</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={styles.content}>
        <Text style={styles.title}>Popular</Text>
        {movie.popular.length > 0 && (
          <FlatList
            data={movie.popular}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => detail(item.id)}
                style={styles.card}>
                <CardMovie item={item} />
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
          />
        )}
        <Text style={styles.title}>Now Playing</Text>
        {movie.nowPlaying.length > 0 && (
          <FlatList
            data={movie.nowPlaying}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => detail(item.id)}
                style={styles.card}>
                <CardMovie item={item} />
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
          />
        )}
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  banner: {
    height: 277,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBanner: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
    marginBottom: 43,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: '50%',
    backgroundColor: 'white',
    paddingHorizontal: 13,
  },
  btnSearch: {
    backgroundColor: '#FF7314',
    paddingHorizontal: 16,
    paddingVertical: 15,
  },
  textSearch: {
    fontSize: 14,
    fontWeight: '500',
    color: 'white',
  },
  content: {
    paddingLeft: 18,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: 12,
    marginBottom: 14,
  },
  card: {
    marginRight: 12,
  },
});

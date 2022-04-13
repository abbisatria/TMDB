import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {CardMovie, Loading} from '../../components';
import {detailMovie, video, search, loading} from '../../redux/actions/movies';

const Search = props => {
  const [keyword, setKeyword] = useState(false);
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
  return movie.loading ? (
    <Loading />
  ) : (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.input}>
          <TextInput
            placeholder="Search.."
            onChangeText={value => setKeyword(value)}
            defaultValue={movie.keyword}
          />
        </View>
        <TouchableOpacity style={styles.btnSearch} onPress={() => searching()}>
          <Text style={styles.textSearch}>Search</Text>
        </TouchableOpacity>
      </View>
      {movie.search.length > 0 ? (
        <FlatList
          data={movie.search}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => detail(item.id)}
              style={styles.card}>
              <CardMovie item={item} />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      ) : (
        <Text>{movie.keyword} Not Found</Text>
      )}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 14,
  },
  input: {
    width: '50%',
    backgroundColor: '#F4F4F4',
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
  card: {
    padding: 12,
  },
});

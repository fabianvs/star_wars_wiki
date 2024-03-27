import React from 'react';
import {useEffect} from 'react';
import {View, Text, ScrollView, ImageBackground, FlatList} from 'react-native';
import {useFilmListStore} from 'store/FilmsStore';

import {globalStyles} from 'globals/globalStyles';
import {CustomButton} from 'components/CustomButton';
import {styles} from './MoviesListScreenStyles';

type ItemProps = {
  item: Film;
};

function Item({item}: ItemProps) {
  console.log('item', item);
  return (
    <View style={styles.itemContainer}>
      <CustomButton title={`Episodio ${item.episode_id}: \n ${item.title}`} />
    </View>
  );
}

function MoviesListScreen(): React.JSX.Element {
  const getAllFilms = useFilmListStore(state => state.getAll);
  const films = useFilmListStore(state => state.results);

  useEffect(() => {
    getAllFilms();
  }, [getAllFilms]);

  return (
    <View style={globalStyles.container}>
      <ImageBackground
        source={require('assets/backgroundApp.jpg')}
        resizeMode="repeat"
        style={globalStyles.image}>
        {films && (
          <FlatList
            data={films}
            renderItem={({item}) => {
              return <Item item={item} />;
            }}
            style={styles.flatList}
          />
        )}
      </ImageBackground>
    </View>
  );
}

export {MoviesListScreen};
